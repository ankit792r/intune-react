import React from 'react'
import { Link } from 'react-router-dom'

const ChatNavbar = ({name}) => {
  return (
    <div>
        <Link to="/home">close</Link> <span><b>{name}</b></span>
    </div>
  )
}

export default ChatNavbar