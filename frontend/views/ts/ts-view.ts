import "@vaadin/vaadin-button";
import "@vaadin/vaadin-charts";
import "@vaadin/vaadin-ordered-layout";
import "@vaadin/vaadin-text-field";
import "acme-component/fill-indicator";
import "acme-component/my-button";
import { css, customElement, html, LitElement } from "lit-element";
// @ts-ignore
import { applyTheme } from "theme/applicationTheme.js";

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
      <vaadin-vertical-layout theme="padding spacing" style="width: 100%;"
        ><vaadin-text-field
          tabindex="0"
          label="This is a default text field"
        ></vaadin-text-field
        ><vaadin-text-field
          class="fancy"
          tabindex="0"
          label="This is a class=fancy text field"
        ></vaadin-text-field
        ><vaadin-button tabindex="0" role="button"
          ><i class="fas fa-camera"></i> Standard button</vaadin-button
        >A Font Awesome icon loaded as an external SVG:
        <img style="width:64px" src="fa/svg/file-pdf.svg" />
        <my-button tabindex="0" role="button">My button</my-button
        ><fill-indicator></fill-indicator
        ><vaadin-chart empty-text=" "></vaadin-chart
      ></vaadin-vertical-layout>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    applyTheme(this.shadowRoot);
  }
}
