CREATE SCHEMA base
USE base;
CREATE TABLE users(  
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) DEFAULT NULL,  
email VARCHAR(255) UNIQUE NOT NULL,     
password VARCHAR(255) NOT NULL,      
fecha DATE,     
dni INT UNSIGNED,     
foto VARCHAR(255),   
rememberToken TINYINT(1) DEFAULT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,     
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,     
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE productos(  
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarioId INT UNSIGNED,
nombreArchivoImg VARCHAR(255),   
nombre VARCHAR(50), 
descripcion VARCHAR(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarioId) REFERENCES users(id) 
);
SHOW TABLES;
CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuarioId INT UNSIGNED NOT NULL,
texto VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarioId) REFERENCES users(id)
);


INSERT INTO users (email, password, fecha, dni, foto, rememberToken) 
VALUES ('juan.perez@gemail.com', '123456', '1990-05-15', 31456789, '/images/users/trala.png', 0);

INSERT INTO users (email, password, fecha, dni, foto, rememberToken) 
VALUES ('ana.garcia@gemail.com', 'abc123', '1992-07-20', 32456123, '/images/users/trala.png', 1);

INSERT INTO users (email, password, fecha, dni, foto, rememberToken) 
VALUES ('carlos.lopez@gemail.com', 'pass456', '1988-03-10', 28789456, '/images/users/trala.png', 0);

INSERT INTO users (email, password, fecha, dni, foto, rememberToken) 
VALUES ('maria.rodriguez@gemail.com', 'secure789', '1995-11-25', 35123789, '/images/users/trala.png', 1);

INSERT INTO usuarios (email, password, fecha, dni, foto, rememberToken) 
VALUES ('roberto.fernandez@gemail.com', 'r0b3rt0', '1985-09-05', 27456123, '/images/users/trala.png', 1);



 
INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (1, '/images/products/teclado.png', 'Teclado inalambrico', 'Swithces mecánicos, retroiluminado RGB, conexión USB-C');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (2, '/images/products/mouse.png', 'Mouse', 'sensor optico de alta precisión, luces LED RGB, 16000 DPI');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (3, '/images/products/monitor.png', 'Monitor curvo 4k', 'Monitor curvo 4k de 32 pulgadas, 144Hz, FreeSync');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (1, '/images/products/notebook.png', 'Notebook', 'Notebook HP 15, i5, 8GB RAM, 512GB SSD');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (4, '/images/products/smartwatch.jpg', 'smartwatch', 'pantalla AMOLED, GPS, monitor de ritmo cardiaco, waterproof');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (2, '/images/products/parlante.jpg', 'parlante inteligente', 'Asistente de voz, bluetooth, sonido envolvente');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (5, '/images/products/auriculares.jpg', 'auriculares inalambricos', 'cancelación de ruido activa, sonido envolvente, bluetooth');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (3, '/images/products/camara.jpg', 'camara de seguridad', 'vision nocturna, detección de movimiento, grabación en la nube');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (1, '/images/products/tablet.jpg', 'tablet', 'pantalla 10 pulgadas, procesador octa-core, 64GB almacenamiento');

INSERT INTO productos (usuarioId, nombreArchivoImg, nombre, descripcion) 
VALUES (4, '/images/products/impresora.jpg', 'impresora multifunción', 'impresión a color, scanner, wifi, impresión a doble cara');


INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (2, 1, 'Excelente teclado, muy cómodo para escribir y las luces RGB se ven increíbles');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (3, 1, 'Los switches mecánicos son muy responsivos, lo recomiendo 100%');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (1, 2, 'El mouse tiene muy buena precisión, perfecto para gaming');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (4, 2, 'La calidad del sensor óptico es excelente, muy suave el movimiento');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (6, 3, 'El monitor curvo es impresionante, los colores se ven muy vivos');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (2, 3, 'La experiencia de gaming con 144Hz es increíble, no hay lag');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (3, 4, 'La notebook funciona muy bien, rápida y con buen rendimiento');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (1, 5, 'El smartwatch es muy útil, la batería dura varios días');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (4, 6, 'El parlante suena espectacular, el asistente de voz funciona perfecto');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (6, 7, 'Los auriculares tienen excelente cancelación de ruido, muy cómodos');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (2, 8, 'La cámara de seguridad funciona muy bien, la app es fácil de usar');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (3, 9, 'La tablet es perfecta para trabajar, la pantalla se ve muy nítida');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (1, 10, 'La impresora es muy eficiente, imprime rápido y con buena calidad');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (4, 1, 'Me encanta la retroiluminación RGB, se puede personalizar fácilmente');

INSERT INTO comentarios (usuarioId, productoId, texto) 
VALUES (6, 5, 'El monitor de ritmo cardíaco es muy preciso durante el ejercicio');



select * from productos;
select * from usuarios;
select * from comentarios;



