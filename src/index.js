import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

import { pool } from './db.js';

try {
  const [rows] = await pool.query('SELECT 1');
  console.log('✅ Conexión a la base de datos exitosa');
} catch (error) {
  console.error('❌ Error de conexión:', error.message);
}

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`)
})



