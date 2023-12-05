//Footer
document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) :
localStorage.setItem('products', JSON.stringify(
    [
    {
        "id":1,
        "name": "31-inch Skateboard",
        "make": "Wood Street",
        "amount": 599.99,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaCPFzVd0sNt146XUK7wiI551HPAJRdAR4rkoZBQy6SZrzS-_5BifBKbsuh7DXB0pwGq_T0Wf-xfUVkHHt5BCIfGlWE-=w1588-h1304",
    },
    {
        "id":2,
        "name": "Reef Marble 34.74 Skatboard",
        "make": "Wood Street",
        "amount": 2199.00,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBk0n_nORcBfFvcu7LWv0a18rpBjQSA1G2VUV8xVyWBzThUiF_8qWuUlm6DX1uNkgn2FudlOF8N41hNuJTOrmnayhNUBA=w1588-h1304",
    },
    {
        "id":3,
        "name": "28 Inch Skateboard",
        "make": "Wood Street",
        "amount": 299.99,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBe1MmEJGUrvuQCaqksP_i09FAmdBm402afKoVQqLq3Nqtn3TMg8zrXpKMCDewXTduHycVWQ70TE1EY4U15QqZV4mFw=w1588-h1304",
    },
    {
        "id":4,
        "name": "Rad Skateboard",
        "make": "Complete Cherry Blossom Black/Red (Size 7.75)",
        "amount": 1199.00,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaC_vFwMR9ibII2xWjazYP4EBKNjoR4v_5yTll0j0P-dD2QuoFVfW17m8y3y_-DkyryVePJNcYMeEk8nst2go0KWTyG_wA=w1588-h1304",
    },
    {
        "id":5,
        "name": "Magneto",
        "make": "Mini Cruiser Skateboard",
        "amount": 1318.09,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaBZA8Pbjnm3RdMlhzj8Jo7y46yqYNb2a_b7PT7FYUWyBDM7E4XAiAteGTcR6Rpi1OGKW1akhKGqrUzKqzZYjo4fmkqa=w1588-h1304 ",
    },
    {
        "id":6,
        "name": "Rippa Skateboard",
        "make": "Wood · Mini · Longboard",
        "amount": 249.90,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDdAdl1xK5l04OolCQmwpmyr5QwdOr3zIHMNpVPBelnLl2ERNQi0jykk_X95373TqaZD83kxr537KjF5-LBvaydufN32Q=w1588-h1304",
    },
    {
        "id":7,
        "name": "Element Seal",
        "make": "Skateboard Complete",
        "amount": 1599.95,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaATXlNuoe1LEq_YciRkHiX-kPuHBEm_kSPSZZUD1OE61r68IkfSpKJx_uLxLb0BMwMoZmAziMQdr3eINRPj_aXbb90AQg=w1588-h1304",
    },
    {
        "id":8,
        "name": "Skateboard Skull",
        "make": "Black8Hole Modell 3103",
        "amount": 339.19,
        "img": "https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAE2NNl32zgVZalXtUzC7NtzskOcKhQmNAQUDuE-XEmu2GBPzcKBPZarstPh1htM33yftG_ZEzw2_ARhhODwCR4keCb9g=w1588-h1304",
    }
    
]
));

let productGrid = document.querySelector('[data-myProducts]');
// products go to html7 
function displayProducts() {
    productGrid.innerHTML = ""
    if (products) {
        // loop through the product in array
        products.forEach(product => {
            // Add product HTML to the productGrid
            productGrid.innerHTML += `
            <div class="card my-3 mx-3">
                <img src="${product.img}" class="card-img-top" width:100px height: 100px>
                <div class="card-body">
                    <h5 class="card-title text-center">${product.make}</h5>
                    <p class="card-text text-center">${product.name}</p>
                    <p class="card-text text-center">R${product.amount}</p>
                    <a href="#" class="btn btn-dark d-flex justify-content-center">Add to Cart</a>
                </div>
            </div>
            `;
        });
    } 
    // Display Spinner
    else {
        productGrid.innerHTML = `<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
    }
}

// Call the function to display products
displayProducts();







