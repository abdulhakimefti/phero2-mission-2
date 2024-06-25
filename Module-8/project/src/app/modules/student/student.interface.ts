import { Model } from "mongoose";

export type TGaurdian={
    fatherName:string;
    fatherOccupation?: string ;
    fatherContactNumber: string;
    motherName:string;
    motherOccupation?:string;
    motherContactNumber?:string;
}
export type TName  ={
    firstName:string;
        middleName?:string ;
        lastName:string;
}
export type TLocalGaurdian={
    name:string;
    occupation?:string ;
    contactNumber:string;
}

export type TStudent={
    id:string;
    name:TName;
    age:number;
    gender: 'male' | 'female';
    email:string;
    dateOfBirth: string;
    contactNumber:string;
    emergencyContactNumber:string;
    bloodGroup?: 'A+'|'A-'|'B+'|'B-'|'AB+'|'AB-'|'O+'|'O-';
    presentAddress:string;
    permanentAddress : string;
    guardian: TGaurdian;
    localGuardian: TLocalGaurdian;
    profileImg ? : string;
    isActive: 'active'|'inactive';
}


export type StudentMethod = {
    isStudentExist(id:string):Promise<TStudent | null>
}

export type StudentModel = Model<TStudent,Record<string,never>,StudentMethod>