import {
  DeliveryOrder,
  DeliveryOrderItem,
  LogisticPostalAddress,
  sequelize,
} from "../models";

const index = async (req, res) => {
  try {
    const data = await DeliveryOrder.findAll({
      include: { all: true, nested: true },
    });

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const createDeliveryOrderItems = async (
  items,
  DeliveryId,
  transaction
) => {
  for (const item of items) {
    await DeliveryOrderItem.create(
      {
        ...item,
        DeliveryId,
      },
      {
        transaction,
      }
    );
  }
};

const createDeliveryAddress = async (deliveryAddress, transaction) => {
  const created = await LogisticPostalAddress.create(deliveryAddress, {
    transaction,
  });

  return created.LocationId;
};

const create = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const DeliveryAddress = await createDeliveryAddress(
      req.body.deliveryAddress,
      transaction
    );

    const data = await DeliveryOrder.create(
      {
        ...req.body,
        DeliveryAddress,
      },
      {
        transaction,
      }
    );

    await createDeliveryOrderItems(req.body.items, data.DeliveryId, transaction);

    await transaction.commit();

    const result = await DeliveryOrder.findOne({
      where: {
        DeliveryId: data.DeliveryId,
      },
      include: { all: true, nested: true },
    });

    return res.status(200).json(result);
  } catch (err) {
    transaction.rollback();
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res) => {
  try {
    throw { message: "Não implementado" };

    return res.status(200).json();
  } catch (err) {
    return res.status(400).json(err);
  }
};

const destroy = async (req, res) => {
  try {
    const { DeliveryId } = req.params;

    const data = await DeliveryOrder.destroy({
      where: { DeliveryId },
    });

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

export default {
  index,
  create,
  update,
  destroy,
};
