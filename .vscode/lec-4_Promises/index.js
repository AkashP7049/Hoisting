// function step1(fn){
//    setTimeout(()=>{
//     console.log('photo selected');
//     fn()
//    } ,5000)

// }
// function step2(fn){
//     setTimeout(()=>{
//      console.log('filtereddd');
//      fn()
//     }, 4000)
 
//  }
//  function step3(fn){
//     setTimeout(()=>{
//      console.log('captionsssss');
//      fn()
//     }, 3000)
   
//  }
//  function step4(){
//     setTimeout(()=>{
//      console.log('photo post hooo gyiee');
//     }, 2000)
   
//  }
 
  //CALL BY HELL

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })

//  step1()
//  step2()
//  step3()
//  step4()

// PROMISS

// let promise = new Promise((res, rej)=>{
//     let reason='barish'
//     if(reason==='barish'){
//         rej()
//     }else{
//    
//     res()
//     }
 
// } )
// promise.then(()=>{
//     console.log('resolve');
// }).catch(()=>{
//     console.log('error');
// })


// promises

// let step1=function(){
//     return new Promise((res, )=>{
//         setTimeout(()=>{
//             res('photo select ho gyiii');
//         }, 5000)
//     })
// }
// let step2=function(){
//     return new Promise(( res , )=>{
//         setTimeout(()=>{
//             res('filtereddd')
//         },4000)
//     })
// }
// let step3=function(){
//     return new Promise(( res ,)=>{
//         setTimeout(()=>{
//             res('Captionsssss')
//         },3000)
//     })
// }
// let step4=function(){
//     return new Promise(( res , )=>{
//         setTimeout(()=>{
//             res('post ho gyiiii')
//         },2000)
//     })
// }
// step1().then((data)=>{
//     console.log(data);
//     return step2().then((filteddd)=>{
//         console.log(filteddd);   
//         return step3().then((caption)=>{
//             console.log(caption);
//             return step4().then((post)=>{
//                 console.log(post);
//             })
//         }) 
//     })
// })


// async function magic(){
//     let data =await step1()
//     console.log(data);
//     let data1=await step2()
//     console.log(data1);
//     let data2=await step3()
//     console.log(data2);
//     let data3=await step4()
//     console.log(data3);
// }
// magic()



// function step1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('message sent');
//         },4000)
//     })
// }


// function step2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('message delivered');
//         },3000)
//     })
// }

// function step3(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('message seen');
//         },3000)
//     })
// }
// step1().then((data)=>{
//     console.log(data);
//     return step2().then((data)=>{
//         console.log(data);
//         return step3().then((data)=>{
//             console.log(data);
//         })
//     })
// })

// async function magic(){
//     let data =await step1()
//     console.log(data);
//     let data1=await step2()
//     console.log(data1);
//     let data2=await step3()
//     console.log(data2);

// }
// magic()



function step1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Message sent');
              res()
        },4000)
    })
}


function step2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('message delivered');
            
            res()
        },3000)
    })
}

function step3(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('message seen');
            
            res()
        },3000)
    })
}

async function call() {
    await step1()
    await step2()
    await step3()
    
}
call()