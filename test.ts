import { Request } from "express";
import active_user  from "./models/vanus_ai_active_users";

const test = async (req: Request) => {
  try {
    const { uid, country, is_premium } = req.body;

    const testDoc = new active_user({
      user_id: uid,
      active_date: Date.now(),
      country: country,
      is_premium: is_premium,
    });

    await testDoc.save();
    const response = {message: "Data is successfully saved"};
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { test };