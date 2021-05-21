import { Component, useState, tags } from "@odoo/owl";
import { MyComponent } from "./components/MyComponent";

const APP_TEMPLATE = tags.xml/*xml*/ `
<div t-name="App" class="" t-on-click="update">
  <MyComponent/>
</div>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  static components = { MyComponent };
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
