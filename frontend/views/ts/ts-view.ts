import { LitElement, html, css, customElement } from "lit-element";

@customElement("ts-view")
export class TSView extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <br />
      Content placeholder
    `;
  }
}
