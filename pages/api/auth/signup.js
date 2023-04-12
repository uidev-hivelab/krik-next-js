import nextConnect from "next-connect";
import bcrypt from "bcrypt";
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
import User from "../../../models/User";
import { createActivationToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";

const handler = nextConnect();
handler.post(async (req, res) => {
  console.log("1234");
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
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(name, email, url, "", "Activate your account");
    await db.disconnectDb();
    res.json({
      message:
        "Đăng ký thành công. Vui lòng xác nhận Email để sử dụng tài khoản",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
