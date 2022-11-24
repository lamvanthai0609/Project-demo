import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Traing_code");
    console.log("Connect thành công");
  } catch {
    console.log("fail");
  }
}
