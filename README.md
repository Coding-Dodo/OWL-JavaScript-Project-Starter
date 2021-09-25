# OWL Javascript Project Starter

This repo is an example on how to start a real project with the Odoo OWL framework.

Thanks to @SimonGenin for it's [original Starter Project for OWL](https://github.com/SimonGenin/OWL-JavaScript-Project-Starter)

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Coding-Dodo/OWL-JavaScript-Project-Starter)

## Features

- [OWL](https://github.com/odoo/owl) v1.4.5
- Javascript
- Livereload
- Rollup.js v2.57
- Tests with Jest v27

## Installation

[This repo is a "template repository". It means you can quickly create repositories based on this one, without it being a fork.](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#about-repository-templates)

Otherwise, you may clone it:

```bash
git clone https://github.com/Coding-Dodo/OWL-JavaScript-Project-Starter.git
```

Install dependencies:

```bash
npm install
```

Dev with livereload:

```bash
npm run dev
```

Production build

```bash
npm run build
```

Run tests

```bash
npm run test
```

## Components

It is expected to create components in one file, following this convention:

```js
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
```

## See also

If your are searching for the a project starter with Tailwind and PostCSS:

[https://github.com/Coding-Dodo/OWL-JavaScript-Tailwind-Project-Starter](https://github.com/Coding-Dodo/OWL-JavaScript-Tailwind-Project-Starter)
