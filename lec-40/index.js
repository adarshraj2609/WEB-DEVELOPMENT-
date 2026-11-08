
let btn = document.querySelector("#revel-gift");
let btn1 = document.querySelector("#btn1");
let h1 = document.querySelector("#gift");

function revealGift1() {
    console.log("iPhone 10 Pro Max");
    console.log("Printed already");
}

function revealGift() {
    h1.classList.remove("hidden");
    h1.classList.add("visible");
}

// Single click on reveal-gift button
btn.addEventListener("click", revealGift);

// Double click on btn1
btn1.addEventListener("dblclick", revealGift1);


