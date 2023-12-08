
let products = JSON.parse(localStorage.getItem("products"));
document.querySelector("#currentYear").textContent =
  new Date().getUTCFullYear();

let tableData = document.querySelector("[table-products]");

function adminData() {
  try {
    tableData.innerHTML = "";
    products.forEach((product, i) => {
      tableData.innerHTML += `
           <tr>
           <td>${product.make}</td>
           <td>
                <img src="${product.img}" alt=
                ${products.id}" class="img-fluid w-25" >
           </td>
           <td>${product.amount}</td>
           <td>
                <div>
                    <button class="btn bg-black">EDIT</i></button>
                    <button class="btn bg-black" data-bs-toggle="modal" data-bs-target="exampleModal">DEL</i></button>
                </div>
           </td>
           
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
           </tr> `;
    });
  } catch (e) {}
}
adminData();


