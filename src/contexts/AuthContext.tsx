import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IAuthContext,
  IProviderProps,
  IReqRegister,
  IReqSession,
  IToken,
  IUser,
} from "../interface";
import { instance } from "../services/axios";
import { Erro, Success } from "../services/toast";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IProviderProps) => {
  const token = localStorage.getItem(`@ContactBook:token`);
  const id = localStorage.getItem(`@ContactBook:id`);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);

  const registed = async (data: IReqRegister): Promise<void> => {
    setLoading(true);
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      await instance.post<IReqRegister>("/users", data);
      Success(`✅Usuário cadastrado com sucesso!`);
      navigate(`/`);
    } catch (error) {
      Erro("Falha ao cadastrar o usuario❗❗");
    } finally {
      setLoading(false);
    }
  };

  const session = async (body: IReqSession) => {
    setLoading(true);
    try {
      const { data } = await instance.post<IToken>("/session", body);
      instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
      localStorage.setItem(`@ContactBook:token`, data.token);
      localStorage.setItem(`@ContactBook:id`, data.user_id);
      const resp = await instance.get<IUser>(`/profile`);
      setUser(resp.data);
      Success(`✅Usuário logado com sucesso!`);
      navigate(`/dashboard`, { replace: true });
    } catch (error) {
      Erro("Falha ao efetuar o login do usuario❗❗");
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
        registed,
        session,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
