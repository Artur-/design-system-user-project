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
      <vaadin-vertical-layout theme="padding spacing" style="width: 100%;"
        ><vaadin-text-field tabindex="0" has-label=""></vaadin-text-field
        ><vaadin-text-field
          class="fancy"
          tabindex="0"
          has-label=""
        ></vaadin-text-field
        ><vaadin-button tabindex="0" role="button"
          >Standard button</vaadin-button
        ><my-button tabindex="0" role="button">My button</my-button
        ><fill-indicator></fill-indicator
        ><vaadin-chart empty-text=" "></vaadin-chart
      ></vaadin-vertical-layout>
    `;
  }
}
