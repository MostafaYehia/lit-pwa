import {LitElement, html, css, customElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('co-navbar')
export class CoNavBar extends LitElement {

  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property()
  title = 'Navbar';

  static styles = css`
    span {
      color: green;
    }`;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
      <h2>${this.title}</h2>!
      `;
  }

}