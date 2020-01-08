// Get Elements into variables

var basic = document.querySelector('#basic');
var prof = document.querySelector('#prof');
var masters = document.querySelector('#master');


var active = document.getElementsByClassName('.active')
console.log(active)

var toggleBtn = document.querySelector('.toggle-btn');

function toggleMonthly() {
    
    const active = document.getElementsByClassName('active')
    console.log(active)
}

const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    const active = document.getElementsByClassName('active'); 
    if(active){
        basic.textContent = "$19.99";
        prof.textContent = "$24.99";
        masters.textContent = "$39.99";
    }
    if(active.length === 0){
        basic.textContent = "$199.99";
        prof.textContent = "$249.99";
        masters.textContent = "$399.99";
    }
});