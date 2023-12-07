//Footer
document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

let currentDate = new Date().getUTCFullYear();
document.querySelector('#currentDate').textContent = currentDate;
// Number of products loaded into a cart.
let cartSize = JSON.parse(localStorage.getItem('checkout'))?.length || 0
document.querySelector('[cartSize]').textContent = cartSize
// Get data from the products local storage
let products = JSON.parse(localStorage.getItem('products'));
// Sorting button
let btnSorting = document.querySelector('#sorting');
// Add a new product
let saveProduct = document.querySelector('#saveProduct');
let adminTbody = document.querySelector('[data-admin]');
// Display function
function display(arg) {
    try {
        adminTbody.innerHTML = "";
        if (!arg.length) throw "Please add products";
        arg?.forEach((item, i) => {
            adminTbody.innerHTML += `
                <tr>
                    <td>
                        <h4>${item.make}</h4>
                    </td>
                    <td>
                        <img src="${item.image}" alt="${item.id}" loading="lazy"/>
                    </td>
                    <td>${item.spec}</td>
                    <td>R${item.amount}</td>
                    <td id="btnCols">
                        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#editProduct${item.id}">Edit</button>
                        <!-- Modal -->
                        <div class="modal fade" id="editProduct${item.id}" tabindex="-1" aria-label="editProductLabel${item.id}" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editProductLabel${item.id}">Edit Product</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form class="form g-2">
                                    <div class="container">
                                        <input class="form-control" type="text" placeholder="Enter your laptop's make" value='${item.make}' name="admin-make" id="admin-make${item.id}" required>
                                        <textarea class="form-control my-2" placeholder="Enter your laptop's specs" required name="admin-spec" id="admin-spec${item.id}">${item.spec}</textarea>
                                        <input class="form-control" type="number" placeholder="Enter the amount" value='${item.amount}' name="admin-amount" id="admin-amount${item.id}" required>
                                        <input class="form-control my-2" type="url" placeholder="Enter the image's url" value='${item.image}' name="admin-image" id="admin-image${item.id}" required>
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer my-2">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCloseModal">Close</button>
                                  <button type="button" class="btn btn-success" onclick='new EditProduct(${JSON.stringify(item)}, ${JSON.stringify(i)})'>Save changes</button>
                                </div>
                              </div>
                            </div>
                        </div>        
                        <button class="btn btn-secondary" onclick='deleteProduct(${JSON.stringify(i)})'>Delete</button>
                    </td>     
                </tr>
            `
        });
    } catch (e) {
        adminTbody.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden"></span>
            </div>
        </div>
        `
    }
};
display(products);
// Sorting
let isToggle = false;
btnSorting.addEventListener('click', () => {
    if (!isToggle) {
        products.sort((a, b) => b.id - a.id);
        btnSorting.textContent = "Sorted by desc (ID)";
        isToggle = true;
    } else {
        products.sort((a, b) => a.id - b.id);
        btnSorting.textContent = "Sorted by asc (ID)";
        isToggle = false;
    }
    display(products);
})
// Add a new product
saveProduct.addEventListener('click', () => {
    try {
        // Get the last ID value
        const currID =
            products.map(item => item.id).at(-1)
        let id = currID >= 1 ? currID : 0;
        id++;
        products.push({
            id,
            make: document.querySelector('#addMake').value,
            spec: document.querySelector('#addSpec').value,
            amount: document.querySelector('#addAmount').value,
            image: document.querySelector('#addImage').value
        });
        // Update the local storage with the latest product.
        localStorage.setItem('products', JSON.stringify(products));
        display(products);
    } catch (e) {
        adminTbody.textContent = "Please try again"
    }

});
// Edit
function EditProduct(item, index) {
    this.id = item.id;
    this.make = document.querySelector(`#admin-make${item.id}`).value;
    this.spec = document.querySelector(`#admin-spec${item.id}`).value;
    this.amount = document.querySelector(`#admin-amount${item.id}`).value;
    this.image = document.querySelector(`#admin-image${item.id}`).value;
    // Update
    products[index] = Object.assign({}, this);
    localStorage.setItem('products', JSON.stringify(products));
    display(products);
    location.reload();
}
// Delete
function deleteProduct(index) {
    products.splice(index, 1);
    // Convert an array to string using JSON.stringify()
    localStorage.setItem('products', JSON.stringify(products));
    display(products);
}
// Disable ctrl, f2, right click
window.onkeydown = (e) => {
    let keyCodes = [16, 17, 18, 73]
    return keyCodes.some(a => a === e.keyCode) ? false : true
}
window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
})