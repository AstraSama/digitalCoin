import User from "../../database/models/user_model.js";

const store = async (req, res) => {
  try {
    const { name, email, password, createdAt, walletId, role, isActive } = req.body;

    await User.create({ name, email, password, createdAt, walletId, role, isActive });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await User.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await User.findById(req.params.id)
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, email, password, createdAt, walletId, role, isActive } = req.body;

    await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password,
      createdAt,
      walletId,
      role, 
      isActive
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    .exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};