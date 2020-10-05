import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
const app=express()
const PORT= process.env.PORT||5000
////////////////////////////////

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