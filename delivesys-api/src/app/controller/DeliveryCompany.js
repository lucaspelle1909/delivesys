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

    const data = await Category.create(
      {
        ...body,
        companyId: req.companyId,
      },
      {
        transaction,
      }
    );

    await createSubcategories(subcategories, data.id, transaction);

    await transaction.commit();

    const createdCategory = await getCategoryWithSubCategories(data.id);

    return res.status(200).json(createdCategory);
  } catch (err) {
    
    await transaction.rollback();

    console.log(err);
    return res.status(400).json(err);
  }
};

const getCategoryWithSubCategories = async (categoryId) => {
  return await Category.findOne({
    where: {
      id: categoryId,
    },
    include: [
      {
        model: SubCategory,
        as: "subcategories",
      },
    ],
  });
};

const createSubcategories = async (subcategories, categoryId, transaction) => {
  for (const subcat of subcategories) {
    delete subcat["fakeId"];

    await SubCategory.create(
      {
        ...subcat,
        categoryId,
      },
      {
        transaction,
      }
    );
  }
};

const update = async (req, res) => {
  try {
    const { categoryId: id } = req.params;
    const data = await Category.update(req.body, {
      where: { id },
      returning: true,
    });

    const result = await getCategoryWithSubCategories(id);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const destroy = async (req, res) => {
  try {
    const { categoryId: id } = req.params;
    const data = await Category.destroy({
      where: { id },
    });

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default {
  index,
  create,
  update,
  destroy,
};
