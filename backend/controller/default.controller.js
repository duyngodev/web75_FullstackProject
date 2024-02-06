import defaultModel from "../model/default.model.js";

const getDefault = async (req, res, next) => {
  const defaultGet = await defaultModel.find({});
  if (!defaultGet)
    throw {
      status: 402,
      message: "No found",
      data: defaultGet,
    };
  res.status(200).send(defaultGet);
};

const postDefault = async (req, res, next) => {
  const defaultPost = await defaultModel.create(req.body);

  res.status(200).send(defaultPost);
};
export { getDefault, postDefault };

// create login, register, logout methods
