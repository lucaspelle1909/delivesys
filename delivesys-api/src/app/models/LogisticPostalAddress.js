module.exports = (sequelize, DataTypes) => {
  const LogisticPostalAddress = sequelize.define(
    "LogisticPostalAddress",
    {
      LocationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ZipCode: DataTypes.STRING,
      Street: DataTypes.STRING,
      State: DataTypes.STRING,
      City: DataTypes.STRING,
      Country: DataTypes.STRING,
      StreetNumber: DataTypes.INTEGER,
    },
    {
      tableName: "logisticspostaladdress",
      timestamps: false,
    }
  );

  return LogisticPostalAddress;
};
