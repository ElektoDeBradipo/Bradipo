import React from 'react'
import { Box } from '../../grommet'
import { GoogleLoginButton } from '../'
import { API_URL } from '../../config'

const handleSocialLogin = async (user, callback) => {
  const response = await fetch(
    `${API_URL}auth/google?tokenId=${user.token.idToken}`
  )
  const { token } = await response.json()
  callback(token)
}

const handleSocialLoginFailure = err => {
  console.error(err)
}

export const SocialLogin = ({ onToken }) => (
  <Box>
    <GoogleLoginButton
      provider='google'
      appId='582267539600-cmdj1ehb6ks135o4rqst0bkjc8ctffrr.apps.googleusercontent.com'
      onLoginSuccess={user => handleSocialLogin(user, onToken)}
      onLoginFailure={handleSocialLoginFailure}
    />
  </Box>
)
