import React, { useState, useEffect } from "react";
import SongTile from "./SongTile"
import { Link } from "react-router-dom"

const SongList = () => {
  const [songs, setSongs] = useState([])

  const fetchSongs = async () => {
    try {
      const response = await fetch("/api/v1/songs");
      if (!response.ok) {
        const errorMessage = `${response.status}: (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setSongs(responseBody.songs);
    } catch (error) {
      console.log(`error in fetch: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchSongs();
  }, []);
  const songList = songs.map((song) => {
    return (
      <li>
        <SongTile song={song} />
      </li>
    )
  })

  return (
    <div>
      <h1>songs</h1>
      <Link to="/">
        home
      </Link>
      <ul>
        {songList}
      </ul>
    </div>
  )
}

export default SongList