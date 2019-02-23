
import { CoNavBar } from "./components/navbar";
import { LitElement, html, css, customElement, property } from 'lit-element';

// This decorator defines the element.
@customElement('co-app')
export class App extends LitElement {

  @property()
  title = "Web components world"

  static styles = css`
    .title {
      color: green;
    }`;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
        <co-navbar title="Navbar"></co-navbar>
        <h1 class="title">${this.title}</h1>
      `;
  }

}