import React from 'react'
import Auth2 from '../../components/authentication/Auth2'
import Auth from '../../components/authentication/Auth'
import Auth4 from '../../components/authentication/Auth4'
import LoginForm from '../../components/authentication/LoginForm'

const SignIn = () => {
  return (
    <>
    <Auth2 authline={'Enter your email and password to Sign In.'}>
       <LoginForm/>
    </Auth2>
    </>
  )
}

export default SignIn