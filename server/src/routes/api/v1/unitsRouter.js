import express from 'express'
import { Unit } from "../../../models/index.js"

const unitsRouter = new express.Router()

unitsRouter.get("/", async (req, res) => {
  try {
    const units = await Unit.query()
    res.status(200).json({ units })
  } catch (error) {
    res.status(500).json({ errors })
  }
})

export default unitsRouter