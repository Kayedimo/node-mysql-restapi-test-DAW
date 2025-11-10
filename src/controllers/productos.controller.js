import { pool } from "../db.js"

export const getProductos = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos')
        res.json(rows)   
    } catch (error) {
        return res.status(500).json({
        message: 'Something goes wrong'
        })
    }
}


export const getProducto = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [req.params.id])
        if(rows.length <= 0 ) return res.status(404).json({
            Message: 'Producto not found'
        })
        res.json(rows[0])
    }  catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
        })
    }
}


export const createProductos = async(req, res) => {
    try {
        const {nombre, precio, origen, impacto_ecologico, stock} = req.body
        const [rows] = await pool.query('INSERT INTO productos(nombre, precio, origen, impacto_ecologico, stock) VALUES(?, ?, ?, ?, ?)', [nombre, precio, origen, impacto_ecologico, stock])
        res.send({
            id: rows.insertId, 
            nombre,
            precio,
            origen,
            impacto_ecologico,
            stock,
        })
    } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
        })
    }
}


/*
PUT
export const updateProductos = async(req, res) => {
    const{id} = req.params
    const{nombre, precio, origen, impacto_ecologico,stock} = req.body
    const [result] = await pool.query('UPDATE productos SET nombre = ?, precio = ?, origen = ?, impacto_ecologico = ?, stock = ? WHERE id = ?', [nombre, precio, origen, impacto_ecologico, stock, id])

    if(result.affectedRows === 0) return res.status(404).json({Message: 'Producto not found'

    })

    const[rows] = await pool.query('SELECT * FROM productos WHERE id = ?' , [id])
        
    res.json(rows[0])
}
*/


export const updateProductos = async(req, res) => {
    const{id} = req.params
    const{nombre, precio, origen, impacto_ecologico, stock} = req.body

    try {
        const [result] = await pool.query('UPDATE productos SET nombre = IFNULL(?, nombre), precio = IFNULL(?, precio), origen = IFNULL(?, origen), impacto_ecologico = IFNULL(?,impacto_ecologico), stock = IFNULL(?, stock) WHERE id = ?', [nombre, precio, origen, impacto_ecologico, stock, id])
        console.log(result)

        if(result.affectedRows === 0) return res.status(404).json({Message: 'Producto not found'

        })

        const[rows] = await pool.query('SELECT * FROM productos WHERE id = ?' , [id])
            
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
        message: 'Something goes wrong'
        })
    }
}


export const deleteProductos = async(req, res) => {
    try {
    const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [req.params.id])
    if(result.affectedRows <= 0) return res.status(404).json({message: 'Producto not found'})
    
    res.sendStatus(204)
    } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
        })
    
    }
}

