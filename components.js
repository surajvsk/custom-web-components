document.addEventListener("DOMContentLoaded", () => {
  class VHeader extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
        <div class="center">
          <h1>THIS IS MY HEADER</h1>
          <v-menu></v-menu>
        </div>
      `;
    }
  }

  class VMenu extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
        <ul class="center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      `;
    }
  }

  class VMain extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
        <div class="center">
          <h1>THIS IS MY MAIN</h1>
        </div>
      `;
    }
  }

  class VFooter extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
        <div class="center">
          <h1>THIS IS MY FOOTER</h1>
        </div>
      `;
    }
  }

  customElements.define("v-header", VHeader);
  customElements.define("v-footer", VFooter);
  customElements.define("v-main", VMain);
  customElements.define("v-menu", VMenu);
});
