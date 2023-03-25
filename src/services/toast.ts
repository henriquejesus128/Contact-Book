import { toast } from "react-toastify";

export const Success = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Erro = (text) => {
  toast.error(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Info = (text) => {
  toast.info(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Warn = (text) => {
  toast.warn(text, {
    position: "top-right",
    autoClose: 1000,
  });
};

export const Default = (text) => {
  toast(text, {
    position: "top-right",
    autoClose: 1000,
  });
};
