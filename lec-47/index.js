// async function fun2() {
//     // console.log("hiee");
//     return 10

// }
// function fun1(){
//     // console.log("hello");
//    return Promise.resolve(12)

// }
// console.log(fun2());
// console.log(fun1());
async function fun3() {
    return "async function"
}
async function fun4() {
    fun3().then(data => {
        console.log(data);

    })
    // let data=await fun3()
    // console.log(data);
    
}
fun4()

