import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true  // Allow credentials (cookies, authorization headers, etc.)
}))

// Use middleware to parse JSON request bodies, limiting the size to 16kb
app.use(express.json({limit:"16kb"}))
// Use middleware to parse URL-encoded request bodies, allowing rich objects and arrays, limiting the size to 16kb
app.use(express.urlencoded({extended: true, limit:"16kb"}))
// Serve static files from the "public" directory
app.use(express.static("public"))
app.use(cookieParser())


//routes

import userRouter from './routes/user.routes.js'

//route declaration
app.use("/api/v1/users", userRouter)

export {app}