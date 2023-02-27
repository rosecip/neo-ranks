import React, { useEffect, useState } from 'react'
import AlbumTile from "./AlbumTile"
import { Link } from "react-router-dom"

const AlbumList = (props) => {
  const [albums, setAlbums] = useState([])

  const fetchAlbums = async () => {
    try {
      const response = await fetch("/api/v1/albums")
      if (!response.ok) {
        const errorMessage = `${response.status}`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setAlbums(responseBody.albums)
    } catch (error) {
      console.log(`error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  const albumsList = albums.map((album) => {
    return (
      <li>
        <AlbumTile album={album} />
      </li>
    )
  })

  return (
    <div>
      <h1>albums</h1>
      <Link to="/">
        home
      </Link>
      <ul>
        {albumsList}
      </ul>
    </div>
  )
}

export default AlbumList