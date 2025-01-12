import { userRoutes } from "./userRoutes.js";
import express from 'express'
export const routes = (dependencies) => {

    const router = express.Router()
    router.use('/', userRoutes(dependencies))
    return router
}