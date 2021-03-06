import { sequelize, DeliveryCompany, SysUser } from "../models";

const index = async (req, res) => {
  try {
    const data = await SysUser.findAll();

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const findDeliveryMan = async (req, res) => {
  try {
    const data = await SysUser.findAll({
      where: {
        PermissionId: 2,
      },
      include: {
        all: true
      }
    });

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const create = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { body } = req;

    const userData = await SysUser.create(
      {
        ...body,
        PermissionId: body.PermissionId || 2,
      },
      {
        transaction,
      }
    );

    if (userData.PermissionId == 2) {
      const data = await DeliveryCompany.create(
        {
          ...body,
          UserId: userData.UserId,
        },
        {
          transaction,
        }
      );
    }

    await transaction.commit();

    return res.status(200).json(userData);
  } catch (err) {
    transaction.rollback();
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { UserId } = req.params;
    const userData = await SysUser.update(req.body, {
      where: { UserId },
      transaction,
      returning: true,
    });

    if (req.body.deliveryCompany) {
      await DeliveryCompany.update(
        {
          ...req.body.deliveryCompany,
        },
        {
          where: {
            UserId,
          },
          transaction,
        }
      );
    }

    await transaction.commit();

    return res.status(200).json(userData);
  } catch (err) {
    transaction.rollback();
    return res.status(400).json(err);
  }
};

const destroy = async (req, res) => {
  try {
    const { UserId } = req.params;

    await DeliveryCompany.destroy({
      where: { UserId },
    });

    const data = await SysUser.destroy({
      where: { UserId },
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
  findDeliveryMan,
  update,
  destroy,
};
