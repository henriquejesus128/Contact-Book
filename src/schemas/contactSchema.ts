import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required(`Nome obrigatório`),
  email: yup.string().required(`Email obrigatório`).email(`email invalido`),
  photo: yup.string(),
  phone: yup.string().required(`Telefone obrigatório`),
});
