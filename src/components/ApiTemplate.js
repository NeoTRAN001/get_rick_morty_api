import { LitElement, html, css } from 'lit-element';
import styles from '../styles/ApiTemplateStyle';

export class ApiTemplate extends LitElement {

    static get styles() {
      return [styles];
    }

    render() {
        return html`
          <div class="container">
            <h1>The <strong class="title">Rick and Morty</strong> API</h1>
            <p class="title">LitElement</p>
          </div>
        `;
      }
}

customElements.define('api-template', ApiTemplate);