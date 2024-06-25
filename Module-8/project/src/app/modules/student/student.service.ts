import { TStudent } from "./student.interface";
import Student from "./student.model";
// import {StudentModel} from "./student.model"

const createStudentIntoDB =async (student: TStudent)=>{
//    builtin  static method
//    const result = await StudentModel.create(student);
//    return result;

    // builtin instance method
    const studentInstance = new Student(student)
    if(await studentInstance.isStudentExist(student.id)){
        throw new Error
    }

    const result = await studentInstance.save()
    return result


}

const getAllStudentFromDB = async()=>{

    //static method
    const result = await Student.find()
    return result
}

export const StudentServices = {
    createStudentIntoDB,getAllStudentFromDB
}