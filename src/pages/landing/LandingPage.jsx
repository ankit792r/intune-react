import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const authenticated = useSelector(state => state.user.authenticated);

  return (
    <div>
      <h1>Lets CHAT</h1>
      <p>the best chatting app made ever.</p>
      <br />

      {authenticated ? <Link to="/home">Home</Link> : <Link to="/auth">signin</Link>}
    </div>
  )
}

export default LandingPage