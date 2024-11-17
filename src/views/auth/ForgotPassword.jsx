import React from 'react'
import Auth2 from '../../components/authentication/Auth2'
import LoginForm from '../../components/authentication/LoginForm'
import ForgotPasswordForm from '../../components/authentication/ForgotPasswordForm'
import useTitle from '../../hooks/useTitle'
import { useTranslation } from 'react-i18next'

const ForgotPassword = () => {
  const { t } = useTranslation()
  useTitle(t('forgotPasswordPage.pageTitle'))
  return (
    <>
    <Auth2 authline={t('forgotPasswordPage.authline')}>
       <ForgotPasswordForm/>
    </Auth2>
    </>
  )
}

export default ForgotPassword;
