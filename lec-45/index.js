
// function fun1(callback){
//     console.log("hiee");
//     callback()
    
// }
// fun1()

// function cb(){
//     console.log("THIS IS CALL BACK FUNCTION");
    
// }fun1(cb)

// let name="ADARSH";

// function hello(naam){
//     console.log(naam);
    
// }hello(name)




// Asyncronous-->>>>
 function  search(cb1){
  console.log("Seaching");
setTimeout(function(){
    console.log("Pizza Mneu");
    cb1()
},2000)
}
function addTocard(){
  console.log("Added to the card");
}

 search(addTocard)