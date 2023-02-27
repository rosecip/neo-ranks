import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import membersRouter from "./api/v1/membersRouter.js"
import unitsRouter from "./api/v1/unitsRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/members", membersRouter)
rootRouter.use("/api/v1/units", unitsRouter)

export default rootRouter;
