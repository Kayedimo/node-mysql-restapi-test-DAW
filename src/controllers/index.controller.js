import { pool } from '../db.js'

export const  ping = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT "Pong" AS result')
        res.json(result[0])
    } catch (error) {
        console.log('Error en /ping: ', error)
        res.status(500).json({ error: 'Error interno del servidor', detalle: error.message})
        
    }
}