import { Schema, model } from 'mongoose'
import { TGaurdian, TLocalGaurdian, TName, TStudent, StudentMethod, StudentModel } from './student.interface'

const nameSchema = new Schema<TName>({
    firstName: { type: String, required: [true, 'First name is required'] },
    middleName: { type: String },
    lastName: { type: String, required: [true, 'Last name is required'] },
  });
  
  const guardianSchema = new Schema<TGaurdian>({
    fatherName: { type: String, required: [true, 'Father name is required'] },
    fatherOccupation: { type: String },
    fatherContactNumber: { type: String, required: [true, 'Father contact number is required'] },
    motherName: { type: String, required: [true, 'Mother name is required'] },
    motherOccupation: { type: String },
    motherContactNumber: { type: String },
  });
  
  const localGuardianSchema = new Schema<TLocalGaurdian>({
    name: { type: String, required: [true, 'Local guardian name is required'] },
    occupation: { type: String },
    contactNumber: { type: String, required: [true, 'Local guardian contact number is required'] },
  });
  
  const studentSchema = new Schema<TStudent,StudentModel,StudentMethod>({
    id: { type: String, required: [true, 'Student ID is required'], unique: true },
    name: { type: nameSchema, required: [true, 'Student name is required'] },
    gender: {
      type: String,
      enum: {
          values: ['male', 'female'],
          message: 'Gender must be either "male" or "female"',
      },
      required: [true, 'Gender is required'],
    },
    age:{type:Number,required:true},
    dateOfBirth: { type: String },
    email: { type: String, required: [true, 'Email is required'] },
    contactNumber: { type: String, required: [true, 'Contact number is required'] },
    emergencyContactNumber: { type: String, required: [true, 'Emergency contact number is required'] },
    bloodGroup: {
      type: String,
      enum: {
          values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
          message: 'Blood group must be one of: A+, A-, B+, B-, AB+, AB-, O+, O-',
      },
    },
    presentAddress: { type: String, required: [true, 'Present address is required'] },
    permanentAddress: { type: String, required: [true, 'Permanent address is required'] },
    guardian: { type: guardianSchema, required: [true, 'Guardian information is required'] },
    localGuardian: { type: localGuardianSchema, required: [true, 'Local guardian information is required'] },
    profileImg: { type: String },
    isActive: {
      type: String,
      enum: {
          values: ['active', 'inactive'],
          message: 'Status must be either "active" or "inactive"',
      },
      required: [true, 'Status is required'],
    },
  });


studentSchema.methods.isStudentExist= async function (id:string){
  const existingUser = await Student.findOne({id})
  return existingUser;
}


//model
const Student = model<TStudent,StudentModel>('Student', studentSchema)
export default Student
