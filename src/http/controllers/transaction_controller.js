import Transaction from "../../database/models/transaction_model.js";

const store = async (req, res) => {
  try {
    const { walletFrom, walletTo, amount, type, currency, details } = req.body;

    await Transaction.create({ walletFrom, walletTo, amount, type, currency, details });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Transaction.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Transaction.findById(req.params.id)
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { walletFrom, walletTo, amount, type, currency, details } = req.body;

    await Transaction.findByIdAndUpdate(req.params.id, {
      walletFrom,
      walletTo,
      amount,
      type,
      currency,
      details
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id)
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