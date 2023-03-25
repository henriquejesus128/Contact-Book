import axios from "axios";
import { createContext, useContext, useState } from "react";
import { IContact, IContactContext, IProviderProps } from "../interface";
import { instance } from "../services/axios";
import { Erro, Success } from "../services/toast";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

export const ContactContext = createContext({} as IContactContext);

const TechProvider = ({ children }: IProviderProps) => {
  const { token, setLoading } = useContext(AuthContext);
  const { dataUser } = useContext(UserContext);

  const [contact, setContact] = useState<IContact>({} as IContact);
  const [modalRegs, setModalRegs] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  const newContact = async (data: IContact) => {
    setLoading(true);
    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      const resp = await instance.post<IContact>(`/contacts`, data);
      Success(`✅Tecnologia cadastrado com sucesso!`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        Erro(`${err.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };
  const updateContact = async (data: IContact) => {
    setLoading(true);
    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      const resp = await instance.put<IContact>(
        `/contacts/${contact.id}`,
        data
      );
      Success(`✅Contato atualizado com sucesso!`);
      dataUser();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        Erro(`${err.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };
  const deleteContact = async (id: string) => {
    setLoading(true);
    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      await instance.delete<``>(`/contacts/${id}`);
      Success(`✅Tecnologia deletado com sucesso!`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        Erro(`${err.message}❗❗`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        newContact,
        deleteContact,
        updateContact,
        contact,
        setContact,
        modalRegs,
        setModalRegs,
        modalEdit,
        setModalEdit,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default TechProvider;
