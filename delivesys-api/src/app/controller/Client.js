import { Client } from "../models";

const index = async (req, res) => {
  try {
    const data = await Client.findAll();

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const create = async (req, res) => {
  try {

    const data = await Client.create(req.body);

    return res.status(200).json(data);
  } catch (err) {
    console.log(err)
    return res.status(400).json(err);
  }
};

const update = async (req, res) => {

  try {
    const { CustAccount } = req.params;
    const result = await Client.update(req.body, {
      where: { CustAccount },
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
    const { CustAccount } = req.params;

    const data = await Client.destroy({
      where: { CustAccount },
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
