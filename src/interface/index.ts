import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IAuthContext {
  token: string | null;
  id: string | null;
  registed: (data: IReqRegister) => Promise<void>;
  session: (data: IReqSession) => Promise<void>;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export interface IUserContext {
  listUsers: () => Promise<void>;
  allUsers: IUser[] | null;
  setAllUsers: Dispatch<SetStateAction<IUser[] | null>>;
  getRetriverUser: (id: string | number) => Promise<void>;
  patchUser: (body: IPatchUser) => Promise<void>;
  deleteUser: () => Promise<void>;
}

export interface IContactContext {
  allcontact: IContact[] | null;
  setAllContact: Dispatch<SetStateAction<IContact[]>>;
  listContacts: () => Promise<void>;
  createContact: (data: IReqContact) => Promise<void>;
  retriverContact: (id: string) => Promise<void>;
  patchContact: (body: IPatchContact, id: string) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
  contact: IContact;
  setContact: Dispatch<SetStateAction<IContact>>;
  modalCreat: boolean;
  setModalCreat: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IReqSession {
  email: string;
  password: string;
}

export interface IReqRegister {
  name: string;
  email: string;
  password: string;
  photo?: string | null;
  phone: string;
}

export interface IPatchUser {
  name?: string;
  email?: string;
  password?: string;
  photo?: string | null;
  phone?: string;
}
export interface IPatchContact {
  name?: string;
  email?: string;
  photo?: string | null;
  phone?: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  photo?: string | null;
  phone: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  photo?: string | null;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRespContact {
  user: IUser;
  id: string;
  name: string;
  email: string;
  photo?: string | null;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IReqContact {
  name: string;
  email: string;
  photo?: string | null;
  phone: string;
}

export interface IToken {
  token: string;
  user: IUser;
}
