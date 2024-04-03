import Joi from "joi";

const registerValidator = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username sai",
    "string.min": "Username phải nhiều hơn 3 kí tự",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Không đúng định dạng email",
  }),
  password: Joi.string().min(3).max(10).required(),
}).options({
  abortEarly: false,
});

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
});

export { registerValidator, loginValidator };
