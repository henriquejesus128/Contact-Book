import { createContext, useContext, useEffect, useState } from "react";
import { IContact, IProviderProps, IUser, IUserContext } from "../interface";
import { instance } from "../services/axios";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const { token, setLoading, update, setUpdate } = useContext(AuthContext);

  const [user, setUser] = useState<IUser>({} as IUser);
  const [contacts, setContacts] = useState<IContact[]>([]);

  const dataUser = async () => {
    const id = localStorage.getItem(`@ContactBook:id`);
    if (token) {
      try {
        instance.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await instance.get<IUser>(`/users/${id}`);
        setUser(resp.data);
        console.log(resp.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setUpdate(false);
      }
    }
  };

  useEffect(() => {
    dataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        dataUser,
        contacts,
        setContacts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
