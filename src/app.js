import express from 'express'
import usersRouter from './routers/user.router.js'
import errorHandler from './middlewares/error.middleware.js'


const app = express()
app.use(express.json())

app.use('/mockingproducts',usersRouter)
app.use('/api/users',usersRouter)
app.use(errorHandler)

app.all('*', (req,res,next) => {
    const err = new Error(`No se pudo encontrar ${req.originalUrl} en el servidor`)
    err.status = 'fail'
    err.statusCode= 404
    next(err)
})

app.use((error,req,res,next) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    })
})

app.listen(8080, () => console.log('Server Up!'))