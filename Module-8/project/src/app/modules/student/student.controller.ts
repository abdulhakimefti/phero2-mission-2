import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import StudentValidationSchema from "./student.validator";


const createStudent= async (req:Request,res:Response)=>{

  try{
    const {student : studentData} = req.body;
    //zod validation 
    const zodParsedData = StudentValidationSchema.parse(studentData)

    //will call service func to send data
    const result = await StudentServices.createStudentIntoDB(zodParsedData)

    //send response

    res.status(200).json({
        success: true,
        message: 'student is created Succesfully',
        data : result
    })
  }
  catch(err){
    res.status(500).json({
      success:false,
      message : err || 'something went wrong',
      error: err
    })
    console.log(err)
  }
}

const getAllStudents = async(req:Request,res:Response)=>{
  try{
    
    const result = await StudentServices.getAllStudentFromDB()
    res.status(200).json({
      success: true,
      message: 'students are retrive successfully',
      data : result
  })
  }
  catch(err){
    console.log(err)
  }
}


export const StudentControllers = {
  getAllStudents,
    createStudent
}