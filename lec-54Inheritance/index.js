class User{
     constructor(name,email){
        this.name=name;
        this.email=email;
    }
    login(){}
    logout(){}
}
class Customer extends User{
    cart=[]
    constructor(name,email){
     super(name,email)
        // this.name=name;
        // this.email=email;
   }
    buyProduct(){console.log("Buy product")}
    addCart(item){console.log(this.cart.push(item))}
    showCrd(){console.log(this.cart)}
    // login(){}
    // logout(){}

}
class Seller extends User{
   // constructor(name,email){
        // this.name=name;
        // this.email=email;
 //   }
    addProduct(){console.log("add card");
    }
    // login(){}
    // logout(){}
}
class Admin extends User{
   // constructor(name,email){
        // this.name=name;
        // this.email=email;
   // }
    hideProduct(){console.log("hide product");
    }
    // login(){}
    // logout(){}

}
const c1=new Customer("ADARSH RAJ","adarshsrivastav970@gmail.com")
const c3=new Seller("ADARSH","adarsh@gmail.com")
const c2=new Admin("Kishan","adarsh70@gmail.com")
console.log(c1)
// console.log(c2)
// console.log(c3)
c1.addCart("pencil")
c1.showCrd()


class PremiumCus extends Customer{
    constructor(name,email){
        super(name,email)
    }
}
