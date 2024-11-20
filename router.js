// Router para manejar la navegación
class Router {
    navigate(page) {
        console.log("Navigating to:", page);
        const baseUrl = window.location.origin;
        const newUrl = `${baseUrl}/${page}`;
        window.history.pushState({}, '', newUrl);
        
        document.getElementById('content').innerHTML = pages[page].render();
        console.log(`Estás en la ruta: ${newUrl}`);
    }
}

const router = new Router();
