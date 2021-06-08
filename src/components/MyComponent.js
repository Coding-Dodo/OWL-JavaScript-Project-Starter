import { Component, useState, tags } from "@odoo/owl";

const MY_COMPONENT_TEMPLATE = tags.xml/*xml*/ `
<h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1" t-on-click.prevent="update">
  Hello <t t-esc="state.text"/> Odoo App
</h1>
`;

export class MyComponent extends Component {
  static template = MY_COMPONENT_TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
