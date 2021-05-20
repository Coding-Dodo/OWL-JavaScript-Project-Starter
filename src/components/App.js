import { Component, useState, tags } from "@odoo/owl";

const APP_TEMPLATE = tags.xml/*xml*/ `
<div t-name="App" class="" t-on-click="update">
  Hello <t t-esc="state.text"/>
</div>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
