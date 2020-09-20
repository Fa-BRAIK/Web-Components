const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="css/f-button.css" />

    <button class="f-button type1"> 
      <slot name="content" />
    </button>
`;

class FButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("f-button", FButton);
