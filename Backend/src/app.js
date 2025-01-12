import express from 'express'
import morgan from 'morgan'
import { routes } from './routes/index.js'
import { dependencies } from './config/dependencies.js'
import helmet from 'helmet'
const app =  express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(helmet())

app.use('/api',routes(dependencies))
export {app}