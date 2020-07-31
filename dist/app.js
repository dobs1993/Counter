const incButton = document.querySelector(".increase-button");
const decButton = document.querySelector(".decrease-button");
const theCount = document.querySelector('.the-count');

let count = 0;

incButton.addEventListener('click', function(){
    count ++;
    theCount.innerHTML = count;
    if (count < 0) {
        theCount.style.backgroundColor = 'red';
    } else if (count === 0) {
        theCount.style.backgroundColor = 'silver';
    } else {
        theCount.style.backgroundColor = 'green';
    }
})

decButton.addEventListener('click', function(){
    count--;
    theCount.innerHTML = count;
    if(count < 0){
        theCount.style.backgroundColor = 'red';
    } else if (count === 0) {
        theCount.style.backgroundColor = 'silver';
    } else {
        theCount.style.backgroundColor = 'green';
    }
})