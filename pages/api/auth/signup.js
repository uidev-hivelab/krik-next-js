import nextConnect from "next-connect";
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";

const handler = nextConnect();

handler.post(async (req, res) => {
  // res.send("Hello");
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
