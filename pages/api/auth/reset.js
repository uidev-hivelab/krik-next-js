import nextConnect from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/User";
import bcrypt from "bcrypt";

const handler = nextConnect();
handler.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "Tài khoản không tồn tại" });
    }
    const cryptPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: cryptPassword,
    });
    res.status(200).json({ name: user.name });
    await db.disconnectDb();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
