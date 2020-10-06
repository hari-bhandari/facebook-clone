
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
const app=express()
import connectDB from './config/db.js'
import auth from './routes/auth.js'
import {errorHandler} from "./middlewares/error.js";
const PORT= process.env.PORT||5000

////////////////////////////////
//config

connectDB()
//Body parser
app.use(express.json());
//connecting to db
//implementing helmet
app.use(helmet())
//cors
app.use(cors())
//routes
app.use('/api/auth',auth)
app.use(errorHandler);
//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});