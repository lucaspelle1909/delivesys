import { Product } from "../models";

const index = async (req, res) => {
  try {
    const data = await Product.findAll();

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const create = async (req, res) => {
  try {

    const data = await Product.create(req.body);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const update = async (req, res) => {

  try {
    const { ItemId } = req.params;
    const result = await Product.update(req.body, {
      where: { ItemId },
      returning: true,
    });

    return res.status(200).json(result[0] ? result[0][1] : result);
  } catch (err) {
    transaction.rollback();
    return res.status(400).json(err);
  }
};

const destroy = async (req, res) => {
  try {
    const { ItemId } = req.params;

    const data = await Product.destroy({
      where: { ItemId },
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
