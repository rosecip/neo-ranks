import express from 'express'
import { Album } from '../../../models/index.js'

const albumsRouter = new express.Router()

albumsRouter.get("/", async (req, res) => {
  try {
    const albums = await Album.query()
    res.status(200).json({ albums })
  } catch (error) {
    res.status(500),json({ errors })
  }
})

export default albumsRouter
