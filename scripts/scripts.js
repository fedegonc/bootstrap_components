// Definición de productos
const productDetails = {
    1: {
        title: "Tallados en Relieve",
        image: "imagen1",
        description: "Piezas que destacan por detalles elevados, dando vida a diseños personalizados. Ideal para decoración interior o exterior, con acabados de alta calidad."
    },
    2: {
        title: "Tallados Hundidos",
        image: "imagen2",
        description: "Técnicas de tallado donde los diseños se esculpen hacia adentro, creando una profundidad única. Perfecto para piezas artísticas con un toque moderno y sofisticado."
    },
    3: {
        title: "Carteles en Madera Pintados",
        image: "imagen3",
        description: "Carteles de madera pintados, personalizados para negocios o decoraciones. Disponibles en diferentes colores y acabados para adaptarse a cualquier entorno."
    }
};

// Generador de tarjeta de producto
function generateProductCard(productId) {
    const product = productDetails[productId];
    return `
        <div class="col-12 mb-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <button class="btn btn-primary mt-2" style="width: 100%; font-weight: bold;" onclick="navigate('details', ${productId})">Ver más detalles</button>
                </div>
            </div>
        </div>
    `;
}

// Página del catálogo
const catalogPage = `
    <div class="container mt-5 mb-5">
        <h1 class="mb-4 text-center">Catálogo de Tallados</h1>
        <div class="row flex-column align-items-center">
            ${Object.keys(productDetails).map(productId => generateProductCard(productId)).join('')}
        </div>
    </div>
`;

// Página de inicio
const homePage = `
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
            <div class="col-lg-12 mb-4 d-flex">
                <div class="card mb-4 flex-fill">
                    <div class="card-body">
                        <h2 class="card-title">Nuestros Valores</h2>
                        <p class="card-text">Nos enfocamos en la sostenibilidad, la calidad artesanal y la satisfacción del cliente. Creemos en la importancia de utilizar materiales de alta calidad y en el compromiso con prácticas responsables que respeten el medio ambiente. Nuestro objetivo es crear piezas que no solo sean estéticamente hermosas, sino también funcionales y duraderas.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Página de contacto
const contactPage = `
    <div class="container mt-5 mb-5">
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
    </div>
`;

// Página de detalles
function detailsPage(productId) {
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

// Definición del contenido de cada página
const pages = {
    catalog: catalogPage,
    home: homePage,
    contact: contactPage,
    details: detailsPage
};

// Función para cambiar entre páginas y marcar la navegación activa
function navigate(page, productId = null) {
    if (page === 'details' && productId !== null) {
        document.getElementById('content').innerHTML = pages.details(productId);
    } else {
        document.getElementById('content').innerHTML = pages[page];
    }

    window.history.pushState({}, '', '#' + page); // Enmascarar la URL sin recargar la página

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[href="#${page}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Si se navega a la página de contacto, interceptar el envío del formulario
    if (page === 'contact') {
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario
            alert('Formulario enviado exitosamente. ¡Nos pondremos en contacto contigo pronto!');
        });
    }
}

// Inicializa la página en "home"
navigate('home');
