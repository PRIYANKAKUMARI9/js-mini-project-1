const buttons =document.querySelectorAll('.button')
const bodys =document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click' ,function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id === 'green'){
        bodys.style.backgroundColor=e.target.id
     }
     if(e.target.id === 'blue'){
        bodys.style.backgroundColor=e.target.id
     }
     if(e.target.id === 'yellow'){
        bodys.style.backgroundColor=e.target.id
     }
     if(e.target.id === 'pink'){
        bodys.style.backgroundColor=e.target.id
     }
    })
});