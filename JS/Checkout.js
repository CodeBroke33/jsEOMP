//Footer
document.querySelector("#currentYear").textContent =
  new Date().getUTCFullYear();

// Amount of products added to cart

let cartSize = JSON.parse(localStorage.getItem("checkout"))?.length || 0;
document.querySelector("[cartSize]").textContent = cartSize;
let chkOutList = JSON.parse(localStorage.getItem("checkout"))
  ? JSON.parse(localStorage.getItem("checkout"))
  : [];
let tbody = document.querySelector("tbody");
(function displayCheckOut() {
  try {
    if (!chkOutList.length)
      throw "Please add the product to the checkout list.";
    let groupBy = Object.groupBy(chkOutList, (item) => {
      return item.id;
    });
    let amountDue = 0;
    for (let idx in groupBy) {
      let totalAmount = groupBy[idx].length * groupBy[idx][0].amount;
      amountDue += totalAmount;
      tbody.innerHTML += `
                <tr>
                    <td>${groupBy[idx][0].make}</td>
                    <td>${groupBy[idx][0].spec}</td>
                    <td>${groupBy[idx].length}</td>
                    <td>R${totalAmount}</td>
                </tr>
            `;
    }
    // shows the amount owing
    tbody.innerHTML += `
            <tr class="amount-due">
                <td></td>                    
                <td></td>                    
                <td>Amount Due:</td> 
                <td>R${amountDue}</td>
            </tr>
        `;
  } catch (e) {
    tbody.innerText = e;
    tbody.style = "font-weight: bold; font-size: 2rem;";
  }
})();
// Clear all
let clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", () => {
  localStorage.removeItem("checkout");
  tbody.innerHTML = "Please add the product to the checkout list.";
});
// Disable ctrl, f2, right click
window.onkeydown = (e) => {
  let keyCodes = [16, 17, 18, 73];
  return keyCodes.some((a) => a === e.keyCode) ? false : true;
};
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
