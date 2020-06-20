import * as yup from 'yup'

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Email is not valid!')
    .required('Email is required!'),
  password: yup.string().required('Password is required!'),
})

export default loginSchema
