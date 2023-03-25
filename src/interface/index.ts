import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string | null;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  photo: string | null;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReqRegister {
  name: string;
  email: string;
  password: string;
  photo?: string | null;
  phone: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string | null;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IReqSession {
  email: string;
  password: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IToken {
  user: IUser;
  token: string;
}

export interface IAuthContext {
  token: string | null;
  id: string | null;
  register: (data: IReqRegister) => Promise<void>;
  login: (data: IReqSession) => Promise<void>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}

export interface IUserContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  contacts: IContact[];
  setContacts: Dispatch<SetStateAction<IContact[]>>;
  dataUser: () => Promise<void>;
}

export interface IContactContext {
  newContact: (data: IContact) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
  updateContact: (data: IContact) => Promise<void>;
  contact: IContact;
  setContact: Dispatch<SetStateAction<IContact>>;
  modalRegs: boolean;
  setModalRegs: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
}
