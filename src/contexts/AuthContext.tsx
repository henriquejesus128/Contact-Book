import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthContext,
  IProviderProps,
  IReqRegister,
  IUser,
  IReqSession,
  IToken,
} from "../interface";
import { instance } from "../services/axios";
import { Erro, Success } from "../services/toast";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@ContactBook:token`);
  const id = localStorage.getItem(`@ContactBook:id`);

  const [loading, setLoading] = useState<boolean>(false);

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

  const session = async (data: IReqSession) => {
    setLoading(true);
    try {
      const resp = await instance.post<IToken>(`/sessions`, data);
      localStorage.setItem(`@ContactBook:token`, resp.data.token);
      localStorage.setItem(`@ContactBook:id`, resp.data.user.id);
      Success(`✅Usuário logado com sucesso!`);
      navigate(`/dashboard`, { replace: true });
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
