"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const nameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true }
});
const gaurdianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String },
    fahterContactNumber: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String },
    motherContactNumber: { type: String }
});
const localGaurdianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String },
    contactNumber: { type: String, required: true }
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: nameSchema,
    gender: ['male', 'female'],
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gaurdian: gaurdianSchema,
    localGaurdian: localGaurdianSchema,
    profileImg: { type: String },
    isActive: ['active', 'inactive']
});
//model 
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.default = StudentModel;
