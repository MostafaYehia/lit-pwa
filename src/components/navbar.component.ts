
import { LitElement, html, css, customElement, property } from 'lit-element';

// This decorator defines the element.
@customElement('co-navbar')
export class CoNavBar extends LitElement {

  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property()
  title = 'Navbar';

  static styles = css`
  .container {
    background: rgb(75, 154, 212);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 37px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 2px 1px 0px #403f3f;
  }
  `;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`
            <div class="container">
              <h1>${this.title}</h1>
            </div>
      `;
  }

}