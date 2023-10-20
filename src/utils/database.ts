import * as mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB already connected");
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URI ?? "", {
      dbName: "share_prompt",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error :", error);
  }
};
