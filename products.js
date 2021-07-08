const dataProducts = {
    "products": [
        {
            "title": "Custom Tilte 1",
            "Subtitle": "Custom Subtitle 1",
            "buttonText": "Redirect"
        },
        {
            "title": "Custom Tilte 2",
            "Subtitle": "Custom Subtitle 2",
            "buttonText": "Redirect"
        },
        {
            "title": "Custom Tilte 3",
            "Subtitle": "Custom Subtitle 3",
            "buttonText": "Redirect"
        },
        {
            "title": "Custom Tilte 4",
            "Subtitle": "Custom Subtitle 4",
            "buttonText": "Redirect"
        },
        {
            "title": "Custom Tilte 5",
            "Subtitle": "Custom Subtitle 5",
            "buttonText": "Redirect"
        },
        {
            "title": "Custom Tilte 6",
            "Subtitle": "Custom Subtitle 6",
            "buttonText": "Redirect"
        }
    ]
}

const buildComponents = () => {
    const { products } = dataProducts

    const divElement = document.querySelector('#product_cards');
    
    for (let index = 0; index < products.length; index++) {
        let element = document.createElement("div");
        element.setAttribute('class', 'card');
        element.setAttribute('id', `card-content-${index}`);
        divElement.appendChild(element);

        let cardElement = document.querySelector(`#card-content-${index}`);
    
        let contentElement = document.createElement("div");
        contentElement.setAttribute('class', 'content');

        const { title, Subtitle } = products[index];
        console.log(title, Subtitle);

        let titleElement = document.createElement("h3");
        titleElement.appendChild( document.createTextNode(title));

        let subTitleElement = document.createElement("p");
        subTitleElement.appendChild( document.createTextNode(Subtitle));

        contentElement.appendChild(titleElement);
        contentElement.appendChild(document.createElement("hr"));
        contentElement.appendChild(subTitleElement);

    
        cardElement.appendChild(contentElement);
    }


    
}

buildComponents();