// console.log(a);
// let a=5

// console.log(b);
// var b=6

//CALLING FUNCTION

// function outer(a){
//     console.log('heyy');
//     console.log(a);
//     a()
// }
// outer(function inner(){
//     console.log('innerr')
// })



// function outer(a){
//     console.log('heyy');
//     a()
// }
// function inner(){
//     console.log('innerer');
// }
// outer(inner)


// console.log('two');
// setTimeout(()=>{
// console.log('one');
// },2000)
// console.log('three');

// console.log('two');
// setTimeout(()=>{
// console.log('one');
// },2000)
// setTimeout(()=>{
//     console.log('ten');
//     },3000)
//     setTimeout(()=>{
//         console.log('four');
//         },1000)
//         setTimeout(()=>{
//             console.log('five');
//             },5000)
// console.log('three');

let id= setInterval(()=>{
    console.log('one');
    },200)
    clearInterval(id)