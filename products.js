import * as data from "./data-grid.json";

const buildComponents = () => {
    console.log('Hello world');
    const divElement = document.querySelector('#product_cards');
    // console.log(dataProducts);
    console.log(divElement);
    const elementToInsert = document.createElement("div");
    elementToInsert.setAttribute('class', 'product');
    divElement.appendChild(elementToInsert);
    
}

buildComponents();