let btn = document.getElementById('btn');
btn.addEventListener ('click' , roll)
function roll() {
    let randomNumber = Math.floor(Math.random()*6)
    let number = document.getElementById('number')
    number.innerText=''
    let dice = document.getElementById('dice');
    dice.classList.add('animate-dice');
    setTimeout(()=>{
        dice.classList.remove('animate-dice')
        number.innerText=randomNumber
    }, 1002)

        btn.style.backgroundColor="blueviolet"   
   
} 

let tested = document.getElementById('test')
tested.addEventListener('click' , test)

function test() {
    tested.style.backgroundColor="blueviolet"
}


// title

// let titleTest = document.getElementById('title')
// titleTest.addEventListener('click', title)
// function title(e) {
//     // console.log(e.target.baseURI);
//     console.log(e);
// }


// innertext and innerhtml
// let container =document.getElementById('container')
// container.innerHTML='<h1>This a an element<h1>'