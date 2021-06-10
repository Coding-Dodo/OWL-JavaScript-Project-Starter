import { Component, useState, tags } from "@odoo/owl";

const MY_COMPONENT_TEMPLATE = tags.xml/*xml*/ `
<h1 class="my-4 text-2xl md:text-4xl text-gray-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1" t-on-click.prevent="update">
  Hello <t t-esc="state.text"/> Starter Template
</h1>
`;

export class MyComponent extends Component {
  static template = MY_COMPONENT_TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
