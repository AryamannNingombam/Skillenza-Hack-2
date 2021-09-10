import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { store } from '../../app/store'
import { SignInThunk } from '../../features/auth/Auth'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import './SignIn.css'
import Recaptcha from 'react-recaptcha'
import { useNavigate } from 'react-router'

const validationSchema = yup.object().shape({
  username: yup.string().required('This is required').strict(),
  email: yup
    .string()
    .email('Invalid email format')
    .required('This is a required field')
    .strict(),
  password: yup
    .string()
    .min(8, 'The password should be of minimum 8 characters!')
    .required('This field is required!'),
   
})

const formInitialValues = {
  username: '',
  email: '',
  password: '',
}


export const SignIn = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onButtonClick = async (e) => {
    e.preventDefault()
    const result = await store.dispatch(
      SignInThunk({ email: email, password: password }),
    )
    console.log(result)
    if (result.payload.success) {
      navigate('/home')
    } else {
      alert('Wrong Credentials!')
    }
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div id="login-page-main-background">
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values)
          
          const result = await store.dispatch(
            SignInThunk({
              username: values.username,
              email: values.email,
              password: values.password,
            }),
          )
          console.log(result)
          if (result.payload.success) {
            alert('Signed In!')
            navigate('/user-details')
          } else {
            alert('Error signing in!')
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          return (
            <Form id="login-page-main-area">
              <span id="login-page-heading-area">
                <span className="login-page-main-heading" id="SIGN">
                  Sign{' '}
                </span>
                <span className="login-page-main-heading" id="UP">
                  {' '}
                  In
                </span>
              </span>
              <Form.Group className="login-page-form-group">
                <Form.Control
                  placeholder="john_cena"
                  id="login-input-username"
                  required
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.username}
                  name="username"
                  className="login-page-input"
                />

                <Form.Control.Feedback type="invalid" className="ml-3">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="login-page-form-group">
                <Form.Control
                  placeholder="john@mail.com"
                  id="login-input-email"
                  required
                  type="email"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.email}
                  name="email"
                  className="login-page-input"
                />

                <Form.Control.Feedback type="invalid" className="ml-3">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="login-page-form-group">
                <Form.Control
                  required
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.password}
                  placeholder="**********"
                  id="login-input-password"
                  className="login-page-input"
                />

                <Form.Control.Feedback type="invalid" className="ml-3">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

               
            

              <Button
                onClick={(e) => {
                  e.preventDefault()
                  handleSubmit()
                }}
                type="submit"
                id="submit-button"
              >
                Submit
              </Button>
              <Link style={{ color: 'white' }} to="/sign-up">
                Dont have an account? Sign Up!
              </Link>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
