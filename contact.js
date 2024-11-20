// Página de contacto con formulario de envío de email
class ContactPage {
    constructor(content) {
        this.content = content;
    }

    render() {
        return this.content;
    }
}

const contactPage = new ContactPage(`
    <div>
        <h1>Contacto</h1>
        <form id="contact-form">
            <div>
                <label for="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre completo">
            </div>
            <div>
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" placeholder="tu_email@ejemplo.com">
            </div>
            <div>
                <label for="message">Mensaje</label>
                <textarea id="message" placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
`);

// Agregar la página de contacto al objeto pages
if (typeof pages !== 'undefined') {
    pages.contact = contactPage;
}

// Manejo del envío del formulario
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'contact-form') {
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(event) {
                    event.preventDefault();
                    alert('Formulario enviado exitosamente. ¡Nos pondremos en contacto contigo pronto!');
                });
            }
        }
    });
});
