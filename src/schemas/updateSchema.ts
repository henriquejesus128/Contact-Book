import * as yup from "yup";

export const updateContactSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(`email invalido`),
  photo: yup.string(),
  phone: yup.string(),
});

export const updateUserSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(`email invalido`),
  password: yup.string(),
  photo: yup.string(),
  phone: yup.string(),
});
