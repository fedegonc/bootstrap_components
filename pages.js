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
        <div>
            <h2>Nuestra Historia</h2>
            <p>Tu Leyenda Tallados surge en 2020 con el propósito de diseñar piezas de madera personalizadas y duraderas.</p>
            <h2>Nuestros Valores</h2>
            <p>Nos enfocamos en sostenibilidad, calidad artesanal y satisfacción del cliente.</p>
            <nav>
                <a href="#" onclick="router.navigate('catalog')">Ir al Catálogo</a>
            </nav>
        </div>
    `),
    catalog: new Page(`
        <div>
            <h1>Catálogo de Tallados</h1>
            <nav>
                <a href="#" onclick="router.navigate('home')">Volver al Inicio</a>
            </nav>
            <div>
                ${products.map(product => `
                    <div>
                        <h5>${product.title}</h5>
                        <p>${product.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `)
};

