import React from 'react'

export const ErrorPage = ({ code, message }) => (
  <h1>
    {code}: {message}
  </h1>
)
