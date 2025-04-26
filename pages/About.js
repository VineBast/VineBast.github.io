class AboutPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<code-block></code-block>`;
    }
}
customElements.define("about-page", AboutPage);