import MSG_ERRORS from "./validate/msgs";
import { validateBr } from "js-brasil";

import bcrypt from "bcrypt";

module.exports = (sequelize, DataTypes) => {
  const SysUser = sequelize.define(
    "SysUser",
    {
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      Username: {
        type: DataTypes.STRING,
        unique: MSG_ERRORS.isUnique("email"),
        allowNull: false,
      },
      Password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "sysusers",
      timestamps: false,
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync(8);
          user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeBulkUpdate: ({ attributes: user }) => {
          // console.log(user);
          if (user.password) {
            const salt = bcrypt.genSaltSync(8);
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
    }
  );

  SysUser.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.Password);
  };

  return SysUser;
};
