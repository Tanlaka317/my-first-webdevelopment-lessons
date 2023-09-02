var cards;
cards = document.querySelectorAll('.card');
console.log(cards);

g = cards.length;
console.log(g);

var buttons;
buttons = document.querySelectorAll('.btn');
console.log(buttons);

for (i=0; i<g; i++){
    let x = cards[i].classList[0];
    console.log(x);
}


function dall(){
    for (i=0; i<g; i++){
        let x = cards[i].classList[0];
        if (x=="Cars"||x=="Nature"|| x=="People"){
            cards[i].style.display= "block";
        }
       
    }
       
    
}

function nall(){
    for ( i=0; i<g; i++){
        let x = cards[i].classList[0];
        if (x== "Nature" ){
            cards[i].style.display='block';
        }
         
        else {
            cards[i].style.display='none';
        }

    }
}


function call(){
    for ( i=0; i<g; i++){
        let x = cards[i].classList[0];
        if (x=="Cars"){
            cards[i].style.display='block';
        }
         
        else {
            cards[i].style.display='none';
        }

    }
}



function pall(){
    for ( i=0; i<g; i++){
        let x = cards[i].classList[0];
        if (x=="People"){
            cards[i].style.display='block';
        }
         
        else {
            cards[i].style.display='none';
        }

    }
}




