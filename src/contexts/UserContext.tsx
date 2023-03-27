import { createContext, useContext, useState } from "react";
import { IProviderProps, IUser, IUserContext } from "../interface";
import { instance } from "../services/axios";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const { setLoading } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState<IUser[] | null>(null);

  const listUsers = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get<IUser[]>("/users");
      setAllUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider value={{ listUsers, allUsers, setAllUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
