import React from 'react'
import SocialLogin from 'react-social-login'
import { GoogleLoginButton as GoogleLoginBtn } from 'react-social-login-buttons'

export const GoogleLoginButton = SocialLogin(({ triggerLogin, ...props }) => (
  <GoogleLoginBtn onClick={triggerLogin} {...props} />
))
