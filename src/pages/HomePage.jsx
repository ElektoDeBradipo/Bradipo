import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    <h1>Hello world</h1>
    <Link to='/movie'>movie</Link>
  </div>
)
