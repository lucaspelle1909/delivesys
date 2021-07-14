import MSG_ERRORS from "./validate/msgs";
import { validateBr } from "js-brasil";

import bcrypt from "bcrypt";

module.exports = (sequelize, DataTypes) => {
  const DeliveryCompany = sequelize.define(
    "DeliveryCompany",
    {
      DeliveryCompanyId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CpfCnpj: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'SysUser',
          key: 'id'
        },
      }
    },
    {
      tableName: "deliverycompanytable",
      timestamps: false,
    }
  );

  return DeliveryCompany;
};
