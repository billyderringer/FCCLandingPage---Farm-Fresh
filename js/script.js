
let products = [
    {
        name: "Apples",
        type: "fruit",
        href: "https://drive.google.com/uc?id=1EnHgV-yU18_qT7J9W0_Yk47E9CCTFfto",
        price: 1.57
    },
    {
        name: "Apricots",
        type: "fruit",
        href: "https://drive.google.com/uc?id=1qf9L83fdJw7h3BTYRuI5qJe3i8pbODLR",
        price: 3.04
    },
    {
        name: "Carrots",
        type: "vegetable",
        href: "https://drive.google.com/uc?id=1FkHdtKNJh10Ivp1mfaw7SwMxetN2B5Tm",
        price: 0.74
    }
]


makeProducts = () => {
    let parentNode = document.getElementById('products')
    let productContainer, imgContainer, title, infoContainer, info

    for(let i=0;i<products.length;i++){

        //create elements
        productContainer = document.createElement('div')
        imgContainer = document.createElement('div')
        title = document.createElement('h3')
        infoContainer = document.createElement('div')
        info = document.createElement('p')

        title.innerHTML = products[i].name
        info.innerHTML = 'Fresh picked <br/>' + products[i].name + '<br/>$' + products[i].price

        //set styles
        infoContainer.className = 'product-info center-text'
        title.className = 'img-title center-text'
        productContainer.className = 'product-container'
        imgContainer.className = 'img-container'
        imgContainer.style = 'background-image: url(' + products[i].href + ')'

        //append elements
        parentNode.appendChild(productContainer)
        productContainer.appendChild(imgContainer)
        imgContainer.appendChild(title)
        productContainer.appendChild(infoContainer)
        infoContainer.appendChild(info)
    }
}

makeProducts()