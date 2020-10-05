import express from 'express'
// const path=require('path')

const app=express()
const PORT= process.env.PORT||5000
////////////////////////////////

//Body parser
//implementing error handler
const server=app.listen(PORT,console.log(`server running in Production mode on port ${PORT}`))


//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});