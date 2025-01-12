import express from 'express'
import { userControllers } from '../controllers/index.js'
export const userRoutes = (dependencies) => {
    const router = express.Router()

    const { createUser } = userControllers(dependencies)
    router.post('/users', createUser)
    return router
}
