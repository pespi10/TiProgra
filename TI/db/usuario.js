const infou = {
    usuario: {
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        contraseña: "123456",
        fecha_nacimiento: "1990-05-15",
        documento: "31456789",
        foto_perfil: "/images/users/default-image.png"
    },

    productos: [
        {
            imagen: "/images/products/img-tv-samsung-smart.jpg",
            nombre: "Smart TV Samsung 55 pulgadas",
            descripcion: "TV LED, pantalla 4K Ultra HD, sistema operativo Tizen, conexión WiFi y Bluetooth",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-samsung-galaxy-s10.jpg",
            nombre: "Samsung Galaxy S10",
            descripcion: "Smartphone con pantalla AMOLED de 6.1 pulgadas, 8GB RAM, 128GB almacenamiento",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-macbook-pro-2019.jpg",
            nombre: "MacBook Pro 2019",
            descripcion: "Laptop con procesador Intel i7, 16GB RAM, 512GB SSD, pantalla Retina de 15 pulgadas",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-cafetera-moulinex.jpg",
            nombre: "Cafetera Moulinex",
            descripcion: "Cafetera automática con sistema de presión de 15 bares, capacidad para 1.5 litros",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-heladera-whirlpool.jpg",
            nombre: "Heladera Whirlpool No Frost",
            descripcion: "Heladera con freezer superior, 375 litros, tecnología No Frost, dispensador de agua",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-camara-nikon.jpg",
            nombre: "Cámara Nikon D3500",
            descripcion: "Cámara réflex digital con sensor CMOS de 24.2 MP, grabación de video Full HD",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-microondas-atma.jpg",
            nombre: "Microondas Atma 20 litros",
            descripcion: "Microondas digital con 700W de potencia, plato giratorio, 8 niveles de potencia",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-play-station-4.jpg",
            nombre: "PlayStation 4 Slim 1TB",
            descripcion: "Consola de videojuegos con 1TB de almacenamiento, incluye joystick inalámbrico",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-bicicleta-mountain.jpg",
            nombre: "Bicicleta Mountain Bike Rodado 29",
            descripcion: "Bicicleta con cuadro de aluminio, 21 velocidades, frenos a disco, suspensión delantera",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        },
        {
            imagen: "/images/products/img-aire-acondicionado.jpg",
            nombre: "Aire Acondicionado Split Inverter Surrey 3200W",
            descripcion: "Aire acondicionado frío/calor, tecnología Inverter, bajo consumo energético, clase A",
            comentarios: [
                {
                    usuario: "Ana García",
                    userComment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "Carlos López",
                    userComment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    imagen_perfil: "/images/users/default-image.png"
                },
                {
                    usuario: "María Rodríguez",
                    userComment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    imagen_perfil: "/images/users/default-image.png"
                }
            ]
        }
    ]
}

module.exports = infou;
