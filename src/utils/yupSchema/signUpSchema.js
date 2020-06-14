import * as yup from 'yup'

const signUpSchema = yup.object({
  firstname: yup.string().required('Firstname is required!'),
  lastname: yup.string().required('Lastname is required!'),
  username: yup.string().required('Username is required!'),
  password: yup.string().required('Password is required!'),
  email: yup
    .string()
    .email('Email is not valid!')
    .required('Email is required!'),
  confirmpassword: yup
    .string()
    .required('Passwords must match')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  terms: yup
    .string()
    .required('Read and agree to Terms and Conditions')
    .oneOf(['on'], 'Read and agree to Terms and Conditions'),
})

export default signUpSchema
