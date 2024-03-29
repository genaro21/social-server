const models = require("../models");
const utils = require("../utils");

const signIn = (req, res) => {
  return res.json("signIn");
};

const signUp = async (req, res) => {
  try {
    const { file, email, password } = req.body;

    const hash = await utils.bcrypt.encrypt(password);
    const user = {
      avatar: "avatar",
      email,
      password: hash,
    };

    const data = await models.user.create(user);

    return res.status(201).json({ data });
  } catch (err) {
    console.log({ err });
    return res.json({ err });
  }
};

module.exports = {
  signIn,
  signUp,
};
