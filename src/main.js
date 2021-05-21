import { App } from "./App";
import { utils, mount } from "@odoo/owl";

async function setup() {
  mount(App, { target: document.body });
}

utils.whenReady(setup);
