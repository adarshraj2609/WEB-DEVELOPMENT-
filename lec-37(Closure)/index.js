// function outter(){
//     const a=5;
//     function inner(){
//         console.log(a); //error 
//         var a=7;     
//     }
//     inner()
// }
// outter()

// function outter(){
//     const a=5;
//     function inner(){
//         console.log(a); //undefinied
//         var a=7;     
//     }
//     inner()
// }
// outter()


// function outter(){
//     const a=5;
//     function inner(){
//         console.log(a);   
//     }
//     return inner;
// }
// const response=outter();
// console.log(outter);   
// console.log(response);
// response();


function outter(){
    let count=0;
    function counter(){
        count+=1;
        console.log(count);
        
    }
    return counter
}
const counter=outter();
counter();
counter();