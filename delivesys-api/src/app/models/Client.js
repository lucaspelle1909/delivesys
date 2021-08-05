module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      CustAccount: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      CpfCnpj: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      CustName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      BirthDate: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    },
    {
      tableName: "custtable",
      timestamps: false,
    }
  );

  return Client;
};
