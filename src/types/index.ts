export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number
}

export interface ICategory {
    id: number;
    name: string;
}

enum Role {
    ADMIN = "admin",
    USER = "user"
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: Role
}

export interface ILoginProps {
    email: string;
    password: string
}

export interface ILoginPropsErrors {
    email?: string;
    password?: string
}

export interface IRegisterProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface IUserSession {
    token: string;
    user: IUser
}

export interface IOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[]
}