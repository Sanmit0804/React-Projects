import mongoose from "mongoose";

const medicalReportSchema = new mongoose.Schema({}, { timestamps: true });

const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema);
