import { DeliveryCompany, sequelize } from "../models";

const index = async (req, res) => {
  try {
    const data = await DeliveryCompany.findAll();

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const create = async (req, res) => {

  try {
    const { body } = req;

    const data = await DeliveryCompany.create(
      {
        ...body,
        // UserId: req.userId,
      },
    );

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async (req, res) => {
  try {
    const { deliveryCompanyId } = req.params;
    const data = await DeliveryCompany.update(req.body, {
      where: { deliveryCompanyId },
      returning: true,
    });

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const destroy = async (req, res) => {
  try {
    const { deliveryCompanyId } = req.params;
    const data = await DeliveryCompany.destroy({
      where: { deliveryCompanyId },
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
