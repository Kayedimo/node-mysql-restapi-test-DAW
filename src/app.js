import express from 'express'
import productosRoutes from './routes/productos.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api',productosRoutes)

app.get('/', (req, res) => {
    res.send('API funcionando correctamente')
})

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app