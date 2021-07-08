import { SysUser } from "../models";
import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

const auth = async (req, res) => {
  try {
    const { username: Username, password: Password } = req.body;

    if(!Username || !Password) throw { message: 'Informe o usuário e senha'};

    const user = await SysUser.findOne({
      where: {
        Username,
      },
    });

    let isValid = false;

    if (user) {
      const validPassword = await user.validPassword(Password);

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
