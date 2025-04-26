class NotFoundPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Page non trouvée</h1>`;
    }
}
customElements.define("not-found-page", NotFoundPage);