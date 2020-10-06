import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
const app=express()
import connectDB from './config/db'
const PORT= process.env.PORT||5000
////////////////////////////////
//connecting to db

//config
app.set('trust proxy',true);
dotenv.config({path:'./config/config.env'})
//implementing helmet
app.use(helmet())
//cors
app.use(cors())
//implementing error handler
const server=app.listen(PORT,console.log(`server running in Production mode on port ${PORT}`))


//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});