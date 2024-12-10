import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      requried: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup : {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        requried: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
