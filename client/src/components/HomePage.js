import React from 'react'
import { Link } from "react-router-dom"

const HomePage = (props) => {
  return (
    <div>
      <ul>
        <li>
        <Link to="/units">
        units
      </Link>
        </li>
        <li>
      <Link to="/members">
        members
      </Link>
        </li>
        <li>
      <Link to="/albums">
        albums
      </Link>
        </li>
        <li>
      <Link to="/songs">
        songs
      </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage