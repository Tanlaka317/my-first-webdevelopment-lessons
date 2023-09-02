let z =document.getElementById('navigation');
console.log(z);
 let y = z.style.display="none" ; 
function call() {
    if(y=="none"){
        y=z.style.display = "block"
    }
    else{
        y=z.style.display = "none"
    }
    
}