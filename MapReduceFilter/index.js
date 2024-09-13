// let arr=[1,2,3,4,5,6,7,8,9]

// let a=arr.filter((data)=>{
//     return data>2
// }).filter((ele)=>{
//     return ele%2==1
// }).reduce((sum,sum1)=>{
//     return sum+sum1
// });
// console.log(a)


//ARRAY OF OBJECT

let arr=[
    {
        id:1,
        name:"hello"
    },
    {
        id:2,
        name:"hiii"
    }
]
arr.map((a)=>{
    console.log(a.id)
})