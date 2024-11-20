// Router para manejar la navegación
class Router {
    navigate(page) {
        console.log("Navigating to:", page);
        const url = new URL(window.location);
        url.hash = page;
        window.history.pushState({}, '', url);
        
        document.getElementById('content').innerHTML = pages[page].render();
    }
}

const router = new Router();

