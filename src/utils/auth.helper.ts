import { ILoginProps, IRegisterProps } from "@/types"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("Usuario registrado con exito")
            return response.json();
        } else {
            alert("Fallo al registrar el usuario")
            throw new Error("Fallo el servidor al registrar el usuario")
        }
    } catch (error: any) {
        throw new Error(error)
    }
};

export async function login(userData: ILoginProps) {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("Usuario se ha logueado con exito")
            return response.json();
        } else {
            alert("Fallo al loguear el usuario")
            throw new Error("Fallo el servidor al loguear el usuario")
        }
    } catch (error: any) {
        throw new Error(error)
    }
};
