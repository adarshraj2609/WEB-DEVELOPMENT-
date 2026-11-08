// let student ={
//     name:"adarsh",
//     rollNo:34,
//     sub: ["Math","English"]
// }
// delete student.rollNo; --> this is for object 

// let { sub,...variable}=student
// console.log(variable);


let arr1=[1,2,3,4,5,6]
// // arr1.splice(2,2);   // for delete
// // arr1.splice(3,0,"heloo"); ///for add
// arr1.splice(3,2,["replace"]) // for replace
// console.log(arr1);

//SLICE=======
// let trimr=arr1.slice(1,3)
// console.log(trimr);
// console.log(arr1.indexOf(283484));
// let res=arr1.find(( value)=>{
//  return value===5;
// })
// console.log(res);


// let restInd=arr1.findIndex((value)=>{
//     return value===3;
// })
// console.log(restInd);


//flat
// let arr3=[1,2,3,4,5,6,[6,7,8,[9,10,11]]]
// console.log(arr3.flat(Infinity));
 
orginalPrice=[432,654,2346]
// let discountPrice=[]
// for (value of orginalPrice){
//     discountPrice.push(value*0.9)
// }

const discountPrice2=orginalPrice.map((value)=>{
    return value*0.9;
})
console.log(discountPrice2);


