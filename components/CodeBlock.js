class CodeBlock extends HTMLElement {
  connectedCallback() {
    this.content = [
      { prefix: '$', text: 'Hi there, and welcome!', class: 'text-success' },
      { prefix: '$', text: "I'm a Software Engineer from Paris, and as you can see, I'm developing something right now.", class: 'text-success' },
      { prefix: '$', text: "Okay, let's run my website and see what happens:", class: 'text-success' },

      { prefix: '>', text: 'yarn start vr-website', class: 'text-warning' },
      { prefix: '~', text: 'initializing...', class: 'text-info' },
      { prefix: '~', text: 'starting vr-website...', class: 'text-info' },

      { prefix: '~', text: 'TypeScript Error', class: 'bg-warning text-warning-content' },
      { prefix: '$', text: "...", class: 'text-success' },
      { prefix: '$', text: "Can you come back later, please?", class: 'text-success' },

    ];
  }

  set content(value) {
    this.innerHTML = `
          <div class="mockup-code" style="text-align: left;">
              ${value
        .map(
          (line) => `
                  <pre data-prefix="${line.prefix || ''}" class="${line.class || ''}" style="display: flex; align-items: baseline;">
                    <code>${line.text}</code>
                  </pre>`
        )
        .join('')}
          </div>
      `;
  }

}

customElements.define('code-block', CodeBlock);