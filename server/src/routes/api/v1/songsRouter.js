import express from 'express'
import { Song } from "../../../models/index.js"

const songsRouter = new express.Router()

songsRouter.get("/", async (req, res) => {
  try {
    const songs = await Song.query()
    res.status(200).json({ songs })
  } catch (error) {
    res.status(500).json({ errors })
  }
})

export default songsRouter