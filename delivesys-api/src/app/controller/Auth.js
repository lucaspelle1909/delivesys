import { SysUser } from "../models";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

const auth = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await SysUser.findOne({
      where: {
        username,
      },
    });

    let isValid = false;

    if (user) {
      const validPassword = await SysUser.validPassword(password);

      if (validPassword) isValid = true;
    }

    if (!isValid) {
      return res.status(400).json({ message: "Dados Inválidos" });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: 14515200,
      }
    );

    user.setDataValue("token", token);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
export default {
  auth,
};
