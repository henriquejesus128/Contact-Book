import * as yup from "yup";

export const sessionSchema = yup.object().shape({
  email: yup.string().required(`Email obrigatório`).email(`Email invalido`),
  password: yup.string().required(`Senha obrigatório`),
});
