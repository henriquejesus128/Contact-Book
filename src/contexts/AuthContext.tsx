import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthContext,
  IProviderProps,
  IAxiosLogin,
  IReqLogin,
  IReqRegister,
  IUser,
} from "../interface";
import { instance } from "../services/axios";
import { Erro, Success } from "../services/toast";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@ContactBook:token`);
  const id = localStorage.getItem(`@ContactBook:id`);

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);

  const navigate = useNavigate();

  const register = async (data: IReqRegister) => {
    setLoading(true);
    try {
      await instance.post<IUser>(`/users`, data);
      Success(`✅Usuário cadastrado com sucesso!`);
      navigate(`/`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        Erro(`${err.message}❗❗`);
      }
    }
    setLoading(false);
  };

  const login = async (data: IReqLogin) => {
    setLoading(true);
    try {
      const resp = await instance.post<IAxiosLogin>(`/sessions`, data);
      localStorage.setItem(`@ContactBook:token`, resp.data.token);
      localStorage.setItem(`@ContactBook:id`, resp.data.user.id);
      Success(`✅Usuário logado com sucesso!`);
      navigate(`/dashboard`, { replace: true });
      setUpdate(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        Erro(`${err.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        id,
        register,
        login,
        update,
        setUpdate,
        loading,
        setLoading,
        showPassword,
        setShowPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
