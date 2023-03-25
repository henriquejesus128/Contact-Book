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

export interface IReqLogin {
  email: string;
  password: string;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IAxiosLogin {
  user: IUser;
  token: string;
}

export interface IAuthContext {
  token: string | null;
  id: string | null;
  register: (data: IReqRegister) => Promise<void>;
  login: (data: IReqLogin) => Promise<void>;
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
