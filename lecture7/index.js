// let div=document.querySelector('div')

// let p=document.createElement('h1')
// let h4=document.createElement('h4')
// h4.innerText='heyyy!'
// p.innerText='hellooo'
// div.append(p,h4)
// // p.remove()
// console.log(div);  


//1st Approch
// function fun1(){
//     console.log('heyyy!!')
// }

// // 2nd Approch

// let btn=document.querySelector('button')
// btn.onclick=function(){
//     console.log('heyyyy!!!')
// }

// //3rd Approch
// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//   console.log('hellooo!!!')
// })

// let div=document.querySelector('div')

// let inr=document.querySelector('input')
// inr.addEventListener('input',(e)=>{
//     // console.let('heyy!!!');
//     console.log(e.target.value);
//     div.innerText=e.target.value
// })

let form=document.querySelector('form')
form.addEventListener('button',(e)=>{
    e.preventDefault()
    console.log(e.target.value);
    form.innerText=e.target.value
})


