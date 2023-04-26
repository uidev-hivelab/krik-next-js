import nextConnect from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import { createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
import { resetPasswordEmailTemplate } from "../../../email/resetPasswordEmailTemplate";

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
    sendEmail(
      "",
      email,
      url,
      "",
      "Reset your password",
      resetPasswordEmailTemplate
    );
    await db.disconnectDb();
    res.json({
      message: "Một email đã được gửi tới bạn. Nó sử dụng để reset password.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
