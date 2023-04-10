import nextConnect from "next-connect";
import bcrypt from "bcrypt";
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
import User from "../../../models/User";
import { createActivationToken } from "../../../utils/tokens";

const handler = nextConnect();
handler.post(async (req, res) => {
  // res.send("Hello");
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Vui lòng điền các trường" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Email không hợp lệ" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }
    if (password.length < 6 || password.length > 16) {
      return res
        .status(400)
        .json({ message: "Email phải nhiều hơn 6 và ít hơn 16 ký tự" });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });
    const addUser = await newUser.save();
    const activation_token = createActivationToken({
      id: addUser._id.toString(),
    });
    console.log(activation_token);
    res.send(addUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
