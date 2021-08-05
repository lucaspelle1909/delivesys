module.exports = (sequelize, DataTypes) => {
  const DeliveryOrder = sequelize.define(
    "DeliveryOrder",
    {
      DeliveryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CustAccount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Client",
          key: "id",
        },
      },
      DeliveryAddress: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "LogisticPostalAddress",
          key: "id",
        },
      },
      CreatedDateTime: DataTypes.DATE,
      CollectDateTime: DataTypes.DATE,
      DeliveryDateTime: DataTypes.DATE,
      DeliveryStatus: DataTypes.INTEGER,
      FreightValue: DataTypes.FLOAT,
    },
    {
      tableName: "deliveryorders",
      timestamps: false,
    }
  );

  DeliveryOrder.associate = function (models) {
    DeliveryOrder.belongsTo(models.Client, {
      foreignKey: "CustAccount",
      as: "client"
    });
    DeliveryOrder.belongsTo(models.LogisticPostalAddress, {
      foreignKey: "DeliveryAddress",
      as: "postalAddress"
    });
    DeliveryOrder.hasMany(models.DeliveryOrderItem, {
      foreignKey: "DeliveryId",
      as: "items"
    });
  };


  return DeliveryOrder;
};
