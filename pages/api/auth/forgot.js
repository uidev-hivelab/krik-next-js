import nextConnect from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";

const handler = nextConnect();
handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    const userEmail = await User.findOne({ email });
    if (!userEmail) {
      return res.status(400).json({ message: "Email không tồn tại" });
    }
    const user_id = createResetToken({
      id: userEmail._id.toString(),
    });
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
    sendEmail("", email, url, "", "Accept reset password");
    await db.disconnectDb();
    res.json({
      message:
        "Đăng ký thành công. Vui lòng xác nhận Email để sử dụng tài khoản.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
