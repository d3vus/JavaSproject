const colors=["green","red","rgba(133,122,200)","#f15025","blue","magenta"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    // getting random number between 0-3 
    const randomnumber = getrandomNumber();
    console.log(randomnumber);

    // assigning random items of colors array
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber]; 
});

function getrandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
