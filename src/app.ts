const scss = require("../main.scss");
import * as NavbarComponent from "./components/navbar.component";

import { LitElement, html, css, customElement, property } from 'lit-element';

// This decorator defines the element.
@customElement('co-app')
export class App extends LitElement {

  @property()
  title = `
  This project has been created 
  website from scratch using webpack bundler and 
  custom web components using polymer & lit-html,
  I'm also use server workers to make it as offline-first
  app using variant strategies
  `

  static styles = css`

    .container {
      background: white;
      height: 100vh;
      text-align:center;
    }

    .description {
      position: relative;
      color: grey;
      margin: auto;
      margin-top: 50px;
      max-width: 520px;
    }`;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
          <div class="container">
            <co-navbar title="Lit-Components"></co-navbar>
            <p class="description">${this.title}</p>
          </div>
      `;
  }

}