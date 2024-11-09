import React from 'react'
import Auth2 from '../../components/authentication/Auth2'
import LoginForm from '../../components/authentication/LoginForm'
import ForgotPasswordForm from '../../components/authentication/ForgotPasswordForm'
import useTitle from '../../hooks/useTitle'

const ForgotPassword = () => {
  useTitle('Passwort vergessen')
  return (
    <>
    <Auth2 authline={'Geben Sie Ihr Passwort ein, um sich anzumelden.'}>
       <ForgotPasswordForm/>
    </Auth2>
    </>
  )
}

export default ForgotPassword;
