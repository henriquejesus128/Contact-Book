import { createContext, useContext, useState, useEffect } from "react";
import { IPatchUser, IProviderProps, IUser, IUserContext } from "../interface";
import { instance } from "../services/axios";
import { AuthContext } from "./AuthContext";
import { Erro, Success } from "../services/toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();
  const { setLoading, token, id, setUser } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    if (token) {
      getMyProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listUsers = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get<IUser[]>("/users");
      setAllUsers(data);
      Success(`✅Usuários listados com sucesso!`);
    } catch (error) {
      Erro("Falha ao listar todos os usuario❗❗");
    } finally {
      setLoading(false);
    }
  };

  const getMyProfile = async () => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await instance.get<IUser>(`/users/${id}`);
      setUser(data);
    } catch (error) {
      Erro("Sessão expirada! Faça login novamente❗❗");
      localStorage.clear();
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const getRetriverUser = async (id: number | string) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await instance.get<IUser>(`/users/${id}`);
      setUser(data);
      Success(`✅Usuário encontrado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel encontrar esse usuario❗❗");
      localStorage.clear();
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const patchUser = async (body: IPatchUser) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await instance.patch<IUser>("/users", body);
      setUser(data);
      await listUsers();
      Success(`✅Usuário editado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel editar esse usuario❗❗");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      await instance.delete("/users");
      await listUsers();
      Success(`✅Usuário deletado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel desativar esse usuario❗❗");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        listUsers,
        allUsers,
        setAllUsers,
        getRetriverUser,
        patchUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
