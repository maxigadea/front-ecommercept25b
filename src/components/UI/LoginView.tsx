'use client'
import { useAuth } from '@/context/AuthContext';
import { login } from '@/utils/auth.helper';
import { validateLoginForm } from '@/utils/validate';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const {setUserData} = useAuth();
  const router = useRouter();
  return (
    <div>
     <h1>Login to X STORE</h1>
     <Formik
        initialValues={{ email: '', password: '' }}
        validate={validateLoginForm}
        onSubmit={async (values) => {
           const response = await login(values)
           const {token, user} = response;
            setUserData({token, user})
           router.push("/")
        }}
     >
        {({ errors }) => (
        <Form>
            <label>Email:</label>
           <Field placeholder="example@gmail.com" type="email" name="email" />
           <ErrorMessage name="email" component="div" />

           <label>Password:</label>
           <Field placeholder="********" type="password" name="password" />
           <ErrorMessage name="password" component="div" />

           <button type="submit" disabled={errors.email || errors.password ? true : false}>
             Submit
           </button>
         </Form>
        )}
     </Formik>
   </div>
  )
}

export default LoginView