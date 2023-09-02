let x =document.getElementById('navvbar');
let z =document.getElementById('navi');
console.log(x);
console.log(z);
 let y = z.style.display;
function call() {
    if(y=="none"){
        y=z.style.display = "block"
    }
    else{
        y=z.style.display = "none"
    }
    
}