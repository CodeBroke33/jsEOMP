document.querySelector("#currentYear").textContent =
  new Date().getUTCFullYear();

// number of products in the cart

let cartSize = JSON.parse(localStorage.getItem("cartItems")) || [];
let checkoutWrapper = document.querySelector("#checkoutTable")
function displayCheckout (){
  checkoutWrapper.innerHTML =``
  let checkoutData = Object.groupBy(cartSize, item => item.id)
  for(let key in checkoutData) {
    checkoutWrapper.innerHTML +=`
    <tr>
      <td>${checkoutData[key][0].name}</td>
      <td>${checkoutData[key][0].make}</td>
      <td>${checkoutData[key].length}</td>
      <td>${checkoutData[key][0].amount}</td>
      <td>R${eval(`${checkoutData[key][0].amount} * ${checkoutData[key].length}`)} </td>
    </tr>`
  }
}
displayProducts()



// document.querySelector("[cartSize]").textContent = cartSize;
// let checkOutList = JSON.parse(localStorage.getItem("checkout"))
  //  JSON.parse(localStorage.getItem("checkout"))
//   : [];
// let tbody = document.querySelector("tbody");
// (function displayCheckOut() {
//   try {
//     if (!checkOutList.length) throw "Add product to list.";
//     let groupBy = Object.groupBy(checkOutList, (item) => {
//       return item.id;
//     });
//     let amountDue = 0;
//     for (let idx in groupBy) {
//       let totalAmount = groupBy[idx].length * groupBy[idx][0].amount;
//       amountDue += totalAmount;
//       tbody.innerHTML += `
//                 <tr>
//                     <td>${groupBy[idx][0].make}</td>
//                     <td>${groupBy[idx][0].spec }</td>
//                     <td>${groupBy[idx].length}</td>
//                     <td>R${totalAmount}</td>
//                 </tr>
//             `;
//     }
//     // shows the amount owing
//     tbody.innerHTML += `
//             <tr class="amount-due">
//                 <td></td>                    
//                 <td></td>                    
//                 <td>Amount Due:</td> 
//                 <td>R${amountDue}</td>
//             </tr>
//         `;
//   } catch (e) {
//     tbody.innerText = e;
//     tbody.style = "font-weight: bold; font-size: 2rem;";
//   }
// })();
// // Clear all
// let clearAll = document.querySelector("#clearAll");
// clearAll.addEventListener("click", () => {
//   localStorage.removeItem("checkout");
//   tbody.innerHTML = "Add the product to list.";
// });

// window.onkeydown = (e) => {
//   let keyCodes = [16, 17, 18, 73];
//   return keyCodes.some((a) => a === e.keyCode) ? false : true;
// };
// window.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// // this groups my elements by id
// Object.defineProperty(Object, "groupBy", {
//   value: function (array, key) {
//     return array.reduce(function (acc, obj) {
//       const property = obj[key];
//       acc[property] = acc[property] || [];
//       acc[property].push(obj);
//       return acc;
//     }, {});
//   },
//   enumerable: false,
//   writable: true,
// };
