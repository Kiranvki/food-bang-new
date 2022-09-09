const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

const helmet = require("helmet")
require('dotenv').config()
require('express-async-error')
const fileUpload = require("express-fileupload")
const { createProxyMiddleware } = require('http-proxy-middleware')
//Express
const app = express()
const path = require('path')
const cloudinary = require('cloudinary')

//route

const authRouter = require('./Router/authRoute')
const imageRouter = require('./Router/imageRoute')
const productRouter = require('./Router/productRoute')
const categoryRouter = require('./Router/categoryRoute')
const orderRouter = require('./Router/orderRoute')


//configuration

app.use(cors())
app.use(cookieParser(process.env.REF_TOKEN_SECRET))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(helmet.contentSecurityPolicy({
    directives: {
        imgSrc: ["'self'", '*.cloudinary.com', '*.google.com']
    }
})
)


app.use(fileUpload({
    useTempFiles: true
}))

// app.use('/api/v1', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: false }));

app.use(`/api/v1/auth`, authRouter)
app.use(`/api/v1/image`, imageRouter)
app.use(`/api/v1/product`, productRouter)
app.use(`/api/v1/category`, categoryRouter)
app.use(`/api/v1/order`, orderRouter)


const PORT = process.env.PORT || 5000

const connectDb = require('./db')


//---------Deployment-------//


__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, './client/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
    })
}


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`server is listening on port http://localhost:${PORT}`);
        })
    } catch (err) {
        throw err
    }
}

start();

