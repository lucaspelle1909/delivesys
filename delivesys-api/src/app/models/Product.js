module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      ItemId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ValueAmount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "inventtable",
      timestamps: false,
    }
  );

  return Product;
};
