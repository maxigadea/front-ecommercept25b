'use client'
import { register } from '@/utils/auth.helper';
import { validationSchemaRegister } from '@/utils/validate';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';


const RegisterView = () => {
  const router = useRouter();
  return (
    <div>
     <h1>Register to X STORE</h1>
     <Formik
        initialValues={{ email: '', password: '', name: '', address: '', phone: '' }}
        validationSchema={validationSchemaRegister}
        onSubmit={async (values) => {
            await register(values)
            router.push("/login")
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

           <label>Name:</label>
           <Field placeholder="Jhon Doe" type="text" name="name" />
           <ErrorMessage name="name" component="div" />

           <label>Address:</label>
           <Field placeholder="Posadas, misiones" type="text" name="address" />
           <ErrorMessage name="address" component="div" />

           <label>Phone:</label>
           <Field placeholder="154949494" type="text" name="phone" />
           <ErrorMessage name="phone" component="div" />

           <button type="submit" disabled={errors.email || errors.password ? true : false}>
             Submit
           </button>
         </Form>
        )}
     </Formik>
   </div>
  )
}

export default RegisterView