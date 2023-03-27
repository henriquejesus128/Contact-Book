import { createContext, useContext, useEffect } from "react";
import {
  IContact,
  IContactContext,
  IPatchContact,
  IProviderProps,
  IReqContact,
  IRespContact,
} from "../interface";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { instance } from "../services/axios";
import { Erro, Success } from "../services/toast";

export const ContactContext = createContext({} as IContactContext);

const ContactProvider = ({ children }: IProviderProps) => {
  const [allContact, setAllContact] = useState([] as IContact[]);
  const [contact, setContact] = useState<IContact>({} as IContact);
  const { setLoading, token, id } = useContext(AuthContext);
  const [modalCreat, setModalCreat] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);

  useEffect(() => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    if (token) {
      listContacts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listContacts = async () => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await instance.get<IContact[]>("/contacts");
      setAllContact(data);
      Success(`✅Contatos listados com sucesso!`);
    } catch (error) {
      Erro("Falha ao listar todos os contatos❗❗");
    } finally {
      setLoading(false);
    }
  };

  const createContact = async (data: IReqContact) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    const body = {
      ...data,
      userId: id,
    };
    try {
      await instance.post<IRespContact>("/contacts", body);
      Success(`✅Contatos criado com sucesso!`);
      await listContacts();
    } catch (error) {
      Erro("Falha ao criar o contato❗❗");
    } finally {
      setLoading(false);
    }
  };

  const retriverContact = async (id: string) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await instance.get<IContact>(`/contacts/${id}`);
      setContact(data);
      Success(`✅Contato encontrado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel encontrar esse contato❗❗");
    } finally {
      setLoading(false);
    }
  };

  const patchContact = async (body: IPatchContact, id: string) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      const { data } = await instance.patch<IContact>(`contacts/${id}`, body);
      setContact(data);
      await listContacts();
      Success(`✅Contatos editado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel editar esse usuario❗❗");
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: string) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(true);
    try {
      await instance.delete(`/contacts/${id}`);
      await listContacts();
      Success(`✅Contatos deletado com sucesso!`);
    } catch (error) {
      Erro("Não foi possivel deletar esse contato❗❗");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        allContact,
        setAllContact,
        contact,
        setContact,
        listContacts,
        createContact,
        retriverContact,
        patchContact,
        deleteContact,
        modalCreat,
        setModalCreat,
        modalEdit,
        setModalEdit,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
export default ContactProvider;
