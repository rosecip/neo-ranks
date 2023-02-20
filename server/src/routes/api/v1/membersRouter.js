import express from "express"
import { Member } from "../../../models/index.js"

const membersRouter = new express.Router()

membersRouter.get("/", async (req, res) => {
  try {
    const members = await Member.query()
    res.status(200).json({ members: members })
  } catch (error) {
    res.status(500).json({ errors })
  }
})

export default membersRouter