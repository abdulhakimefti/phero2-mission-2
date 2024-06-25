import { z } from "zod";

const NameValidationSchema = z.object({
    firstName: z.string().min(1).max(255),
    middleName: z.string().min(1).max(255).optional(),
    lastName: z.string().min(1).max(255),
  });
  
  // Define Zod schema for guardian
  const GuardianValidationSchema = z.object({
    fatherName: z.string().min(1).max(255),
    fatherOccupation: z.string().min(1).max(255).optional(),
    fatherContactNumber: z.string().min(1).max(255),
    motherName: z.string().min(1).max(255),
    motherOccupation: z.string().min(1).max(255),
    motherContactNumber: z.string().min(1).max(255),
  });
  
  // Define Zod schema for local guardian
  const LocalGuardianValidationSchema = z.object({
    name: z.string().min(1).max(255),
    occupation: z.string().min(1).max(255).optional(),
    contactNumber: z.string().min(1).max(255),
  });
  
  // Define Zod schema for student
  const StudentValidationSchema = z.object({
    id: z.string().min(1).max(255),
    name: NameValidationSchema,
    age:z.number(),
    gender: z.enum(["male", "female"]),
    dateOfBirth: z.string().min(1).max(255),
    email: z.string().email(),
    contactNumber: z.string().min(1).max(255),
    emergencyContactNumber: z.string().min(1).max(255),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string().min(1).max(255),
    permanentAddress: z.string().min(1).max(255),
    guardian: GuardianValidationSchema,
    localGuardian: LocalGuardianValidationSchema,
    profileImg: z.string().min(1).max(255).optional(),
    isActive: z.enum(["active", "inactive"]),
  });
  

  export default StudentValidationSchema;