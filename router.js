// Router para manejar la navegación
class Router {
    navigate(page) {
        console.log("Navigating to:", page);
        const url = new URL(window.location);
        url.pathname = `/${page}`;
        window.history.pushState({}, '', url);
        
        document.getElementById('content').innerHTML = pages[page].render();
        console.log(`Estás en la ruta: ${url.pathname}`);
    }
}

const router = new Router();
