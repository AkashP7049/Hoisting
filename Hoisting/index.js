// function find(){
//     console.log('helooo');
// }
// find()

// //HOISTING
// find()
// function find(){
//         console.log('helooo');
//     }
   

// var sum=()=>{
//     console.log('helloooo');
// }
// sum()
// // OUTPUT =helloooo



// sum()
// var sum=()=>{
//         console.log('helloooo');
//     }
  
//     // OUTPUT = error: sum is not a function



// sum()
// const sum=()=>{
//         console.log('helloooo');
//     }


// console.log('helloooo');
// {
//     console.log('helloooo');
// }


// let a=5
// {
//     let a=10
//     console.log(a); //10
// }
// console.log(a);   //5



// var a=5
// {
//     var a=10
//     console.log(a); //10
// }
// console.log(a);   //10


// const a=5
// {
//     const a=10
//     console.log(a); //10
// }
// console.log(a);   //5




//HIGHER ORDER FUNCTION
  

// function outer(a){
//     console.log(a);
//     a()
// }
// outer (function inner(){
//     console.log('hello mai inner hu');
// })


// function outer(){
//     console.log('outer');
//     function inner(){
//         console.log('inner');
        
//     }
//     return inner
    
// }
// let inner=outer
// inner()

//QUS :LET arr  [ 1,2,3,4,"hello","hii", false]

let arr = [1,2,3,4,'hello','hey',false]
function number (arr){
let result =[]
for (let i of arr){
    if(typeof i==='number'){
        result.push(i)
    }
}
return result
}
console.log(number(arr));

function element (arr){
    let result1 =[]
    for(let i of arr){
        if(typeof i==='string'){
            result1.push(i)
        }
    }
    return result1
}
console.log(element(arr));


function bool (arr){
    let result1 =[]
    for(let i of arr){
        if(typeof i==='boolean'){
            result1.push(i)
        }
    }
    return result1
}
console.log(bool(arr));