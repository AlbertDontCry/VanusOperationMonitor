import { Request } from "express";
import connection  from "../models/vanus_ai_connection";
import mongoose from "mongoose";

const test2 = async (req: Request) => {
  try {
    const { uid, event_number } = req.body;

    const testDoc = new connection({
      user_id: uid,
      collected_at: Date.now(),
      eventbus_id: new mongoose.Types.ObjectId(),
      event_number: event_number,
      source_id: new mongoose.Types.ObjectId(),
      sink_id: new mongoose.Types.ObjectId(),
    });

    await testDoc.save();
    const response = "Data is successfully saved";
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { test2 };