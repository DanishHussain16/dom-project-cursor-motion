var target=document.querySelector('body');

target.addEventListener('mousemove',over);



function over(e){
    target.style.backgroundColor='rgb('+e.offsetX+','+e.clientY+',40)';
}
