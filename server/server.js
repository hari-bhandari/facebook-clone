import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
const app=express()
import connectDB from './config/db.js'
import auth from './routes/auth.js'
const PORT= process.env.PORT||5000
////////////////////////////////

//config
app.set('trust proxy',true);
dotenv.config({path:'./config/config.env'})
connectDB()

//connecting to db
//implementing helmet
app.use(helmet())
//cors
app.use(cors())
//routes
app.use('/api/auth',auth)

//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))


//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});