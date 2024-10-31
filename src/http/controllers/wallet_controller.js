import Wallet from "../../database/models/wallet_model.js";

const store = async (req, res) => {
  try {
    const { userId, balance, currency, createdAt } = req.body;

    await Wallet.create({ userId, balance, currency, createdAt });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Wallet.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Wallet.findById(req.params.id)
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { userId, balance, currency, createdAt } = req.body;

    await Wallet.findByIdAndUpdate(req.params.id, {
      userId,
      balance,
      currency,
      createdAt
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Wallet.findByIdAndDelete(req.params.id)
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