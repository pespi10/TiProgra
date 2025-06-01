USE base;
CREATE TABLE usuarios(  
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50) DEFAULT NULL,  
eemail VARCHAR(50) UNIQUE NOT NULL,     
password VARCHAR(255) NOT NULL,      
fecha DATE,     
dni INT UNSIGNED,     
foto VARCHAR(50),   
remember_token TINYINT(1) DEFAULT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,     
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,     
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE productos(  
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED,
nombre_archivo_img VARCHAR(50),   
nombre VARCHAR(50), 
descripcion VARCHAR(100),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id) 
);
SHOW TABLES;
CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED NOT NULL,
texto VARCHAR(255) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


INSERT INTO usuarios (email, password, fecha, dni, foto) 
VALUES ('juan.perez@gemail.com', '123456', '1990-05-15', 31456789, '/images/users/trala.png');

INSERT INTO usuarios (email, password, fecha, dni, foto) 
VALUES ('ana.garcia@gemail.com', 'abc123', '1992-07-20', 32456123, '/images/users/trala.png');

INSERT INTO usuarios (email, password, fecha, dni, foto) 
VALUES ('carlos.lopez@gemail.com', 'pass456', '1988-03-10', 28789456, '/images/users/trala.png');

INSERT INTO usuarios (email, password, fecha, dni, foto) 
VALUES ('maria.rodriguez@gemail.com', 'secure789', '1995-11-25', 35123789, '/images/users/trala.png');

INSERT INTO usuarios (email, password, fecha, dni, foto) 
VALUES ('roberto.fernandez@gemail.com', 'r0b3rt0', '1985-09-05', 27456123, '/images/users/trala.png');



 
INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (1, '/images/products/teclado.png', 'Teclado inalambrico', 'Swithces mecánicos, retroiluminado RGB, conexión USB-C');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (2, '/images/products/mouse.png', 'Mouse', 'sensor optico de alta precisión, luces LED RGB, 16000 DPI');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (3, '/images/products/monitor.png', 'Monitor curvo 4k', 'Monitor curvo 4k de 32 pulgadas, 144Hz, FreeSync');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (1, '/images/products/notebook.png', 'Notebook', 'Notebook HP 15, i5, 8GB RAM, 512GB SSD');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (4, '/images/products/smartwatch.jpg', 'smartwatch', 'pantalla AMOLED, GPS, monitor de ritmo cardiaco, waterproof');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (2, '/images/products/parlante.jpg', 'parlante inteligente', 'Asistente de voz, bluetooth, sonido envolvente');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (5, '/images/products/auriculares.jpg', 'auriculares inalambricos', 'cancelación de ruido activa, sonido envolvente, bluetooth');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (3, '/images/products/camara.jpg', 'camara de seguridad', 'vision nocturna, detección de movimiento, grabación en la nube');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (1, '/images/products/tablet.jpg', 'tablet', 'pantalla 10 pulgadas, procesador octa-core, 64GB almacenamiento');

INSERT INTO productos (usuario_id, nombreArchivoImg, nombre, descripcion) 
VALUES (4, '/images/products/impresora.jpg', 'impresora multifunción', 'impresión a color, scanner, wifi, impresión a doble cara');



INSERT INTO comentarios (usuario_id, texto) 
VALUES (2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (3, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (4, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (3, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (5, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (2, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (4, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (1, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (3, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (4, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (5, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (1, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (2, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (5, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (1, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (3, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (5, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (4, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (3, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (2, 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

INSERT INTO comentarios (usuario_id, texto) 
VALUES (4, 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');



select * from productos;
select * from usuarios;
select * from comentarios;



