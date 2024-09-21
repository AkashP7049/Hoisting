let from1 = document.querySelector('form')

from1.addEventListener('submit',(e)=>{
    e.preventDefault()

    // console.log('helloooo');

    console.log(from1.elements[0].value);
    console.log(from1.elements[1].value);
    
    
})