module.exports = (sequelize, DataTypes) => {
  const DeliveryOrderItem = sequelize.define(
    "DeliveryOrderItem",
    {
      RecId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      DeliveryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "DeliveryOrder",
          key: "id",
        },
      },
      ItemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "id",
        },
      },
      Quantity: DataTypes.INTEGER,
      ValueAmount: DataTypes.FLOAT,
    },
    {
      tableName: "deliveryordersitems",
      timestamps: false,
    }
  );

  DeliveryOrderItem.associate = function (models) {
    DeliveryOrderItem.belongsTo(models.DeliveryOrder, {
      foreignKey: "DeliveryId",
      as: "client"
    });
    DeliveryOrderItem.belongsTo(models.Product, {
      foreignKey: "ItemId",
      as: "product"
    });
  };


  return DeliveryOrderItem;
};
