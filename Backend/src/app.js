import express from 'express'
import morgan from 'morgan'
import { routes } from './routes/index.js'
import { dependencies } from './config/dependencies.js'
import helmet from 'helmet'
import cors from 'cors'
const app =  express()
import { config } from './config/config.js'

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(helmet())
app.use(cors({
    origin:config.CORS_ORIGIN_API,
    methods:['GET' , 'PUT' ,'POST'],
    credentials:true
}))

app.use('/api',routes(dependencies))
export {app}