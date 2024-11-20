 // Definición del contenido de cada página
    const pages = {
        catalog: `
            <div class="container mt-5 mb-5">
                <h1 class="mb-4">Catálogo de Tallados</h1>
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card">
                            <img src="/images/imagen1.jpg" class="card-img-top" alt="Tallado en relieve único de madera">
                            <div class="card-body">
                                <h5 class="card-title">Tallados en Relieve</h5>
                                <p class="card-text">Piezas que destacan por detalles elevados, dando vida a diseños personalizados.</p>
                                <button class="btn btn-outline-primary mt-2" onclick="navigate('details', 1)">Ver más detalles</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card">
                            <img src="/images/imagen2.jpg" class="card-img-top" alt="Tallado hundido con diseño moderno">
                            <div class="card-body">
                                <h5 class="card-title">Tallados Hundidos</h5>
                                <p class="card-text">Técnicas de tallado donde los diseños se esculpen hacia adentro.</p>
                                <button class="btn btn-outline-primary mt-2" onclick="navigate('details', 2)">Ver más detalles</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card">
                            <img src="/images/imagen3.jpg" class="card-img-top" alt="Carteles de madera pintados">
                            <div class="card-body">
                                <h5 class="card-title">Carteles en Madera Pintados</h5>
                                <p class="card-text">Carteles de madera personalizados, perfectos para negocios o decoraciones.</p>
                                <button class="btn btn-outline-primary mt-2" onclick="navigate('details', 3)">Ver más detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        home: `
            <div class="container mt-5 mb-5">
                <img src="images/image.jpg" class="img-fluid w-100" alt="Imagen de tallado principal" style="max-height: 500px; object-fit: cover;">
            </div>
            <div class="container mt-5 mb-5">
                <div class="row d-flex flex-wrap align-items-stretch">
                    <div class="col-lg-8 col-md-12 mb-4 d-flex">
                        <div class="card mb-4 flex-fill">
                            <div class="card-body">
                                <h2 class="card-title">Nuestra Historia</h2>
                                <p class="card-text">Tu Leyenda Tallados surge en 2020 con la intención de diseñar y elaborar piezas en madera para diversos fines, principalmente enfocándonos en la personalización y la alta durabilidad de nuestros materiales.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 d-flex">
                        <div class="card mb-4 flex-fill">
                            <div class="card-body">
                                <h2 class="card-title">Nuestro Enfoque</h2>
                                <p class="card-text">Diseñamos letreros que cumplen doble función: indicar una ubicación y reflejar identidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="card mb-4 flex-fill">
                <div class="card-body">
                    <h1 class="card-title">Solicitar Presupuesto</h1>
                    <p class="card-text">Puedes contactarnos para consultas o un presupuesto personalizado.</p>
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" id="nombre" name="user_name" placeholder="Ingresa tu nombre completo">
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" class="form-control" id="email" name="user_email" placeholder="tu_email@ejemplo.com">
                        </div>
                        <div class="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea class="form-control" id="mensaje" name="message" rows="4" placeholder="Escribe aquí tu consulta"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Enviar Solicitud</button>
                    </form>
                </div>
            </div>
        `,
        details: function(productId) {
            const productDetails = {
                1: {
                    title: "Tallados en Relieve",
                    image: "/images/imagen1.jpg",
                    description: "Piezas que destacan por detalles elevados, dando vida a diseños personalizados. Ideal para decoración interior o exterior, con acabados de alta calidad."
                },
                2: {
                    title: "Tallados Hundidos",
                    image: "/images/imagen2.jpg",
                    description: "Técnicas de tallado donde los diseños se esculpen hacia adentro, creando una profundidad única. Perfecto para piezas artísticas con un toque moderno y sofisticado."
                },
                3: {
                    title: "Carteles en Madera Pintados",
                    image: "/images/imagen3.jpg",
                    description: "Carteles de madera pintados, personalizados para negocios o decoraciones. Disponibles en diferentes colores y acabados para adaptarse a cualquier entorno."
                }
            };

            const product = productDetails[productId];
            return `
                <div class="container mt-5 mb-5">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h2 class="card-title">${product.title}</h2>
                            <p class="card-text">${product.description}</p>
                            <button class="btn btn-secondary mt-3" onclick="navigate('catalog')">Volver al Catálogo</button>
                        </div>
                    </div>
                </div>
            `;
        }
    };

    // Función para cambiar entre páginas y marcar la navegación activa
    function navigate(page, productId = null) {
        if (page === 'details' && productId) {
            document.getElementById('content').innerHTML = pages.details(productId);
        } else {
            document.getElementById('content').innerHTML = pages[page];
        }
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[href="#${page}"]`);
        if (activeLink) activeLink.classList.add('active');
    }

    // Inicializa la página en "home"
    navigate('home');