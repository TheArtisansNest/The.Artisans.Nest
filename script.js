/* =========================================
   THE ARTISAN'S NEST
   SHOPPING CART
========================================= */


let cart = [];


/* ================= ELEMENTS ================= */

const cartButton =
    document.getElementById("cartButton");

const cart =
    document.getElementById("cart");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCartButton =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");



/* ================= OPEN CART ================= */

function openCart() {

    cart.classList.add("open");

    cartOverlay.classList.add("show");

}


/* ================= CLOSE CART ================= */

function closeCart() {

    cart.classList.remove("open");

    cartOverlay.classList.remove("show");

}


/* ================= CART BUTTON ================= */

cartButton.addEventListener(
    "click",
    openCart
);


/* ================= CLOSE BUTTON ================= */

closeCartButton.addEventListener(
    "click",
    closeCart
);


/* ================= OVERLAY ================= */

cartOverlay.addEventListener(
    "click",
    closeCart
);



/* ================= ADD TO CART ================= */

const addButtons =
    document.querySelectorAll(".add-cart");


addButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const productName =
                button.getAttribute("data-name");


            addToCart(productName);

        }
    );

});



function addToCart(productName) {

    cart.push(productName);

    updateCart();

    openCart();

}



/* ================= UPDATE CART ================= */

function updateCart() {

    cartCount.innerText =
        cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                Your basket is empty ♡
            </p>

        `;

        cartTotal.innerText =
            "Rs. 0";

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(function(product, index) {

        const item =
            document.createElement("div");


        item.classList.add("cart-item");


        item.innerHTML = `

            <span>
                ${product}
            </span>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})">

                Remove

            </button>

        `;


        cartItems.appendChild(item);

    });


    /*
       Prices are not connected yet.

       Once you give me your actual prices,
       we can make the cart calculate the
       real total automatically.
    */

    cartTotal.innerText =
        "Rs. —";

}



/* ================= REMOVE ITEM ================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}



/* ================= CHECKOUT ================= */

checkoutButton.addEventListener(
    "click",
    function() {

        if (cart.length === 0) {

            alert(
                "Your basket is empty ♡"
            );

            return;

        }


        alert(
            "Checkout will be connected here once your payment and delivery system is ready."
        );

    }
);



/* ================= MOBILE NAVIGATION ================= */

/*
   The mobile navigation can be expanded later
   with a hamburger menu.
*/


/* ================= PAGE LOADED ================= */

console.log(
    "Welcome to The Artisan's Nest ♡"
);