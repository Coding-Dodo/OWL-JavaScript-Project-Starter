import { App } from "./App";
import { utils, mount, config as owlConfig } from "@odoo/owl";
import "./main.css";
async function setup() {
  if (process.env.OWL_ENV === "dev") {
    owlConfig.mode = "dev";
  }
  mount(App, { target: document.body });
}

utils.whenReady(setup);
