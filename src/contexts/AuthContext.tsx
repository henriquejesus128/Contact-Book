import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthContext,
  IProviderProps,
  IReqRegister,
  IReqSession,
} from "../interface";
import { instance } from "../services/axios";
import { Erro, Success } from "../services/toast";
import axios from "axios";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@ContactBook:token`);
  const id = localStorage.getItem(`@ContactBook:id`);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const register = async (data: IReqRegister) => {
    setLoading(true);
    try {
      await instance.post("/users", data);
      Success(`✅Usuário cadastrado com sucesso!`);
      navigate(`/`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Erro(`${error.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  const session = async (data: IReqSession) => {
    setLoading(true);
    try {
      const resp = await instance.post("/session", data);
      localStorage.setItem(`@KenzieHub:token`, resp.data.token);
      localStorage.setItem(`@KenzieHub:id`, resp.data.user.id);
      Success(`✅Usuário logado com sucesso!`);
      navigate(`/dashboard`, { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Erro(`${error.message}❗❗`);
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
        showPassword,
        setShowPassword,
        loading,
        setLoading,
        register,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
