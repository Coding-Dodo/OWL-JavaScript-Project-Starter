import { Component, tags } from "@odoo/owl";
import { MyComponent } from "./components/MyComponent";

const APP_TEMPLATE = tags.xml/*xml*/ `
<main class="h-full pb-14 bg-faded-green" t-name="App">
    <!--Nav-->
    <div class="w-full container mx-auto p-6">

        <div class="w-full flex items-center justify-between">
            <a class="flex items-center text-reddish-brown no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <img class="h-8 mx-auto lg:mr-0" src="owl.svg"/>
                OWL App Starter Project
            </a>

            <div class="flex w-1/2 justify-end content-center">
                <a class="inline-block text-center h-10 p-2 md:h-auto md:p-4" href="https://twitter.com/intent/tweet?url=#">
                    <img class="w-2/6 mx-auto lg:mr-0" src="github-logo.svg"/>
                </a>
            </div>

        </div>

    </div>
    <!--Main-->
    <div class="container pt-3 md:pt-6 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">

        <!--Left Col-->
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <MyComponent />
            <ul class="list-disc text-gray-600 text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle"> 
                <li>OWL</li> 
                <li>Rollup</li>
                <li>Tailwindcss</li>
            </ul>

            <p class="bg-gray-100 text-xs rounded-md py-7 px-5 font-medium font-mono">
              git clone https://github.com/Coding-Dodo/OWL-JavaScript-Project-Starter
            </p>

        </div>

        <!--Right Col-->
        <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="storefront-colour.svg"/>
        </div>

        <!--Footer-->
        <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a class="text-gray-500 no-underline hover:no-underline" href="#">Coding Dodo - 2021</a>
        </div>

    </div>
</main>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  static components = { MyComponent };
}
