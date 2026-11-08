// // console.log("hello");
// // let h1=document.getElementById("h1")
// // console.log(h1);

// // let h1=document.querySelector("h1")
// // console.log(h1);

// // let h1=document.querySelectorAll("h1")
// // console.log(h1);

// // let p=document.querySelector("p")
// // console.log(p);

// let p=document.querySelector("#desc")
// // p.textContent="hello kishan kaise ho"
// // p.innerHTML="<h2> hello adarsh <h2/>"  //very very risky
// // console.log(p.innerHTML);
// // console.log(p.textContent);
// // console.log(p.innertext);

// // p.setAttribute("style","background-color: pink ;font-size:50px")

// let btn=document.querySelector("#btn")
// // btn.setAttribute("disabled" ,"true")
// btn.textContent="Remove"

// // let res=p.setAttribute("style")
// // console.log(res);

// // p.removeAttribute("style")

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")
// p.classList.contains("random")
// // p.style.backgroundColor="pink"  //camel case
// p.dataset.helloTo="adarsh"

// method---->
// getElementById--->select by id
// querySelectorAll--->select all 
// queryselector



// let div=document.createElement("div")
// let div2=document.createElement("div")
// div.textContent="heloo"
// div2.textContent="adarsh"
// console.log(div);

let body=document.querySelector("body")
// body.appendChild(div)
// body.append(div,div2) //last in body
let products= [
    {
        name: "Iphone 20",
        price: 3374303
    },
    {
        name: "Iphone 10",
        price: 33743
    },
    {
        name: "Iphone 14",
        price: 337753
    },
    {
        name: "Iphone 15",
        price: 3374300
    },
]

let productList = document.querySelector("#productList");

products.forEach((product) => {
    const card = document.createElement("p");

    card.textContent = `${product.name} - ${product.price}`;

    productList.append(card);
});