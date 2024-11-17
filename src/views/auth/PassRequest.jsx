import React from 'react'
import Auth2 from '../../components/authentication/Auth2'
import LoginForm from '../../components/authentication/LoginForm'
import PassRequestForm from '../../components/authentication/PassRequestForm'
import useTitle from '../../hooks/useTitle'
import { useTranslation } from 'react-i18next'

const PassRequest = () => {
  const { t } = useTranslation();
  useTitle(t('passRequestPage.pageTitle'))
  return (
    <Auth2 authline={t('passRequestPage.authline')}>
       <PassRequestForm/>
    </Auth2>
  )
}

export default PassRequest
