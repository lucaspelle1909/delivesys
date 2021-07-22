import MSG_ERRORS from "./validate/msgs";
import { validateBr } from "js-brasil";

import bcrypt from "bcrypt";

module.exports = (sequelize, DataTypes) => {
  const SysUser = sequelize.define(
    "SysUser",
    {
      UserId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Username: {
        type: DataTypes.STRING,
        unique: MSG_ERRORS.isUnique("email"),
        allowNull: false,
      },
      PermissionId: DataTypes.INTEGER,
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
          user.Password = bcrypt.hashSync(user.Password, salt);
        },
        beforeBulkUpdate: ({ attributes: user }) => {
          // console.log(user);
          if (user.Password) {
            const salt = bcrypt.genSaltSync(8);
            user.Password = bcrypt.hashSync(user.Password, salt);
          }
        },
      },
    }
  );

  SysUser.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.Password);
  };


  SysUser.associate = function (models) {
    SysUser.hasOne(models.DeliveryCompany, {
      foreignKey: "UserId",
      as: "deliveryCompany"
    });
  };

  return SysUser;
};
