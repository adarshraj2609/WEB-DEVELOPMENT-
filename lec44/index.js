// console.log("Task 1");


// console.log("Task 2");

// // for(let i=0;i<10000000;i++){

// // }

// let startTime=Date.now()
// while(Date.now()-startTime<1000)


// console.log("Task 3");

// console.log("Task 1:");
// setTimeout(function cb(){
//     console.log("task 2:");
    
// },1000)
// console.log("Task 3:");


// // setInterval(() => {
// //     console.log("hlo dosto");
    
// // }, 4000);

// let count=1;
// let id=setInterval(function(){
//     count ++;
//     if(count>5){
//         clearInterval(id)
//     }console.log("hiee");
    
// })


const body=document.querySelector("body")
let colorStr="0123456789abcdef"
setInterval(()=>{
    let color=""
    for(let i=0;i<6;i++){
        let randomvalue=Math.floor(Math.random()*colorStr.length)
        color=color+colorStr[randomvalue]

    }
    body.style.backgroundColor=`#${color}`

},500)