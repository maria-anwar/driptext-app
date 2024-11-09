import React from 'react'
import Auth2 from '../../components/authentication/Auth2'
import LoginForm from '../../components/authentication/LoginForm'
import PassRequestForm from '../../components/authentication/PassRequestForm'
import useTitle from '../../hooks/useTitle'

const PassRequest = () => {
  useTitle('Passwort zurücksetzen')
  return (
    <Auth2 authline={'Bitte geben Sie Ihre E-Mail-Adresse ein, damit wir Ihnen einen Link zum Zurücksetzen Ihres Passworts senden können.'}>
       <PassRequestForm/>
    </Auth2>
  )
}

export default PassRequest
