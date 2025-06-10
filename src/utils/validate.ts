import { ILoginProps, ILoginPropsErrors } from "@/types";
import * as Yup from 'yup';

export const validateLoginForm = (values: ILoginProps) => {
            const errors: ILoginPropsErrors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;  
}

export const validationSchemaRegister = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string()
      .email('El email no es válido')
      .required('El email es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
    address: Yup.string().required('Tu dirección es obligatoria'),
    phone: Yup.string().required('Tu telefono es obligatorio'),
  });