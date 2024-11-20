// Definición de productos
class Product {
    constructor(id, title, image, description) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
    }

    generateCard() {
        return `
            <div class="col-12 mb-4">
                <div class="card">
                    <img src="${this.image}" class="card-img-top" alt="${this.title}">
                    <div class="card-body">
                        <h5 class="card-title">${this.title}</h5>
                        <p class="card-text">${this.description}</p>
                        <button class="btn btn-primary mt-2" style="width: 100%; font-weight: bold;" onclick="router.navigate('details', ${this.id})">Ver más detalles</button>
                    </div>
                </div>
            </div>
        `;
    }

    generateDetailsPage() {
        return `
            <div class="container mt-5 mb-5">
                <div class="card">
                    <img src="${this.image}" class="card-img-top" alt="${this.title}">
                    <div class="card-body">
                        <h2 class="card-title">${this.title}</h2>
                        <p class="card-text">${this.description}</p>
                        <button class="btn btn-secondary mt-3" onclick="router.navigate('catalog')">Volver al Catálogo</button>
                    </div>
                </div>
            </div>
        `;
    }
}

const productDetails = {
    1: new Product(1, "Tallados en Relieve", "imagen1", "Piezas que destacan por detalles elevados, dando vida a diseños personalizados. Ideal para decoración interior o exterior, con acabados de alta calidad."),
    2: new Product(2, "Tallados Hundidos", "imagen2", "Técnicas de tallado donde los diseños se esculpen hacia adentro, creando una profundidad única. Perfecto para piezas artísticas con un toque moderno y sofisticado."),
    3: new Product(3, "Carteles en Madera Pintados", "imagen3", "Carteles de madera pintados, personalizados para negocios o decoraciones. Disponibles en diferentes colores y acabados para adaptarse a cualquier entorno.")
};

// Definición de páginas
class Page {
    constructor(content) {
        this.content = content;
    }

    render() {
        return this.content;
    }
}

const pages = {
    home: new Page(`
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
    `),
    catalog: new Page(`
        <div class="container mt-5 mb-5">
            <h1 class="mb-4 text-center">Catálogo de Tallados</h1>
            <div class="row flex-column align-items-center">
                ${Object.values(productDetails).map(product => product.generateCard()).join('')}
            </div>
        </div>
    `),
    contact: new Page(`
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
    `)
};

// Router para manejar la navegación
class Router {
    navigate(page, productId = null) {
        console.log("Navigating to:", page, "with productId:", productId);
        if (page === 'details' && productId !== null) {
            document.getElementById('content').innerHTML = productDetails[productId].generateDetailsPage();
            window.history.pushState({}, '', `#details/${productId}`);
        } else {
            document.getElementById('content').innerHTML = pages[page].render();
            window.history.pushState({}, '', `#${page}`);
        }

        // Marca el enlace de navegación activo
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`[href="#${page}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Intercepta el envío del formulario en la página de contacto
        if (page === 'contact') {
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    alert('Formulario enviado exitosamente. ¡Nos pondremos en contacto contigo pronto!');
                });
            }
        }
    }
}

const router = new Router();

// Inicializa la página en "home"
router.navigate('home');
