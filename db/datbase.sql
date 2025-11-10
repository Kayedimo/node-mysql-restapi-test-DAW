CREATE DATABASE IF NOT EXIST productos_ecologicos;

USE productos_ecologicos;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  origen VARCHAR(100),
  impacto_ecologico TEXT,
  stock INT DEFAULT 0
);

INSERT INTO productos (nombre, precio, origen, impacto_ecologico, stock) VALUES
('Cepillo de bambú', 3.50, 'Perú', 'Biodegradable, sin plástico', 100),
('Bolsa de tela orgánica', 2.00, 'España', 'Reutilizable, reduce bolsas plásticas', 200),
('Shampoo sólido vegano', 5.90, 'Colombia', 'Sin envase plástico, ingredientes naturales', 80),
('Jabón artesanal de coco', 4.20, 'México', 'Sin químicos, biodegradable', 150),
('Vela de soja natural', 6.75, 'Argentina', 'Sin parafina, envase reciclable', 60);

SELECT * FROM productos;

SELECT * FROM productos
WHERE id = 1;

SELECT * FROM productos
WHERE id = 2;

DELETE FROM productos
WHERE id = 2;