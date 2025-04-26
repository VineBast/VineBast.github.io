class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    attachDataLinkHandlers() {
        document.querySelectorAll("a[data-link]").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault(); // Empêche le comportement par défaut du lien
                const path = link.getAttribute("href"); // Récupère l'attribut href
                this.navigate(path); // Navigue vers la route
            });
        });
    }

    init() {
        // Écoute les changements d'URL
        window.onpopstate = () => this.loadRoute();
        this.loadRoute();

        // Attache les gestionnaires après que le header est prêt
        document.addEventListener('header-ready', () => {
            this.attachDataLinkHandlers();
        });
    }

    navigate(path) {
        console.log(`Navigating to ${path}`);
        history.pushState({}, "", path);
        this.loadRoute();
    }

    loadRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes["/404"];
        const outlet = document.querySelector("router-outlet");
        if (outlet) {
            outlet.innerHTML = ""; // Nettoie le contenu précédent
            outlet.appendChild(document.createElement(route));
        }
    }
}

// Initialisation du routeur
const router = new Router({
    "/": "home-page",
    "/about": "about-page",
    "/404": "not-found-page"
});
