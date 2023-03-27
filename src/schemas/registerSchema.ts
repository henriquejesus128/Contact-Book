import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required(`Nome obrigatório`),
  email: yup.string().required(`Email obrigatório`).email(`email invalido`),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
  photo: yup.string(),
  phone: yup.string().required(`Telefone obrigatório`),
});
