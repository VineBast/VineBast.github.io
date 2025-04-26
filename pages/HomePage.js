class HomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<code-block></code-block>`;
    }
}
customElements.define("home-page", HomePage);