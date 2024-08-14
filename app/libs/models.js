import Joi from "joi";

export const contact_schema = Joi.object({
  name: Joi.string().min(1).message({
    "string.empty": "Name is required.",
  }).required(),
  phone: Joi.string(),
  email: Joi.string().email({ tlds: { allow: false } }).message({
    'string.empty': 'Email is required',
    'string.email': 'Enter a valid email'
  }),
   subject: Joi.string(),
  message: Joi.string().min(1).message({
    'string.empty': 'Message is required.'
  }).required()
});
