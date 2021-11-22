const { Joi } = require('celebrate');

const Pattern =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[?!@$%^*-]).{8,50}$';

const workerSchema = Joi.object().keys({
  mode: Joi.number().allow('').default(1),
  firstName: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().required(),
    otherwise: Joi.string().allow('').optional(),
  }),
  lastName: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().required(),
    otherwise: Joi.string().allow('').optional(),
  }),
  email: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().email().trim().lowercase().required(),
    otherwise: Joi.string().allow('').optional(),
  }),
  password: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().pattern(new RegExp(Pattern)),
  }),
  confirmPassword: Joi.string().when('password', {
    then: Joi.string().valid(Joi.ref('password')).required(),
    otherwise: Joi.string().allow('').optional(),
  }),
  aadhar: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().length().max(12).min(12),
  }),
  pincode: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().length().max(6).min(6),
  }),
  phone: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().length().max(10).min(10),
  }),
  city: Joi.string().when('mode', {
    is: 1,
    then: Joi.string().required(),
  }),
});

const loginSchema = Joi.object().keys({
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().pattern(new RegExp(Pattern)),
});

module.exports = { workerSchema, loginSchema };
