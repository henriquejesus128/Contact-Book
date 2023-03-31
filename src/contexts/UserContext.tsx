import { createContext, useContext, useState, useEffect } from "react";
import { IPatchUser, IProviderProps, IUser, IUserContext } from "../interface";
import { instance } from "../services/axios";
import { AuthContext } from "./AuthContext";
import { Erro, Success } from "../services/toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();
  const { setLoading, token, setUser } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null);
  const [modalEditUser, setModalEditUser] = useState<boolean>(false);

  useEffect(() => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    if (token) {
      getMyProfile();
      listUsers();
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
      const { data } = await instance.get<IUser>(`/profile`);
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
    if (body.email?.length === 0) {
      delete body.email;
    }
    if (body.name?.length === 0) {
      delete body.name;
    }
    if (body.password?.length === 0) {
      delete body.password;
    }
    if (body.photo?.length === 0) {
      delete body.photo;
    }
    if (body.phone?.length === 0) {
      delete body.phone;
    }
    console.log(body);
    setLoading(true);
    try {
      const { data } = await instance.patch<IUser>("/users", body);
      setUser(data);
      await listUsers();
      await getMyProfile();
      Success(`✅Usuário editado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel editar esse usuario❗❗");
    } finally {
      setLoading(false);
      setModalEditUser(false);
    }
  };

  const deleteUser = async () => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      await instance.delete("/users");
      await listUsers();
      Success(`✅Usuário deletado com sucesso!`);
      navigate(`/`);
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
        modalEditUser,
        setModalEditUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
