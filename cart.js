const add_to_cart_buttons = document.querySelectorAll(".add-to-cart");
const view_cart_button = document.getElementById("view-cart");
const process_order_button = document.getElementById("process-order-button");
const clear_cart_button = document.getElementById("clear-cart-button");
const cart_dialog = document.getElementById("cart-dialog");
const cart_table = document.getElementById("cart-table");

sessionStorage.setItem("cart", JSON.stringify({}));
  
add_to_cart_buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    let item = event.target.getAttribute('data-value');
    addToCart(item);
})
});


view_cart_button.addEventListener("click", ()=>{
  cart_table.innerHTML = createTable();
  cart_dialog.showModal();
});

clear_cart_button.addEventListener("click", () => clearCart())
process_order_button.addEventListener("click", () => processCart())

function addToCart(item){
  let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (item in cart){
        cart[item] +=  1; 
    }
    else{
        cart[item] =  1; 
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart");
};

function clearCart(){
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  if(Object.keys(cart).length === 0){
    alert("No items to clear");
  }else{
    cart = {};
    sessionStorage.setItem("cart", JSON.stringify(cart));
    cart_dialog.close()
    alert("Cart cleared");
  }

}

function processCart(){
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  if(Object.keys(cart).length === 0){
    alert("Cart is empty");
  }else{
    cart = {};
    sessionStorage.setItem("cart", JSON.stringify(cart));
    cart_dialog.close()
    alert("Thank you for your order");
  }

}

function createTable(){
  let cart = JSON.parse(sessionStorage.getItem("cart"));
  let html = "<table><tr><th>Book</th><th>Quantity</th></tr>";
  for(var key in cart){
    html += `<tr><td>${key}</td><td>${cart[key]}</td></tr>`;
    } 
 html += "</table>";

 return html;
};

