import React from 'react'
import Auth2 from '../../components/authentication/Auth2'
import LoginForm from '../../components/authentication/LoginForm'
import ForgotPasswordForm from '../../components/authentication/ForgotPasswordForm'

const ForgotPassword = () => {
  return (
    <>
    <Auth2 authline={'Geben Sie Ihr Passwort ein, um sich anzumelden.'}>
       <ForgotPasswordForm/>
    </Auth2>
    </>
  )
}

export default ForgotPassword;
