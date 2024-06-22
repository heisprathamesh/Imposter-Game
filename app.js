let hide=()=>{
    var ele = document.getElementsByClassName("hidnav")[0];
    if(ele.style.display == "none"){
        ele.style.display = "flex";
    }
    else{
        ele.style.display = "none";
    }
}

//breaaaak 1



// let fun1=()=>{ frex();
//     var result = document.getElementById("rest");
//     result.innerHTML= (`<h1>You lost</h1> <br> <h1> This is not the impostor</h1>`);

//     //running function under function for the animation requirment
// }

// let fun2=()=>{  frex();
//     var result = document.getElementById("rest");
//     result.innerHTML = (`<h1>wrong!! ha imposter nahiye! </h1>`);

   
// }
// let fun3=()=>{ frex();
//     var result = document.getElementById("rest");
//     result.innerHTML = (`<h1> wrong wrong wrong!! ha pn impostor nahi ahe!</h1>`);

    
// }
// let fun4=()=>{   frex();
//     var result= document.getElementById("rest");
//     result.innerHTML = (`<h1>Are side wala imposter hota!! nit bagh</h1>`);

 
// }



let frex = ()=>{
    var result= document.getElementById("rest");
    if(result.style.animationName=="none"){
        result.style.animationName = "frex";
    }
    else{
        result.style.animationName= "none";
    }
  
} 

let dis = ()=>{

    var dis = document.getElementsByClassName("players")[0].style.display="block";
    var dis = document.getElementsByClassName("players")[1].style.display="block";
    var dis = document.getElementsByClassName("players")[2].style.display="block";
    var dis = document.getElementsByClassName("players")[3].style.display="block";
    var dis = document.getElementsByClassName("players")[4].style.display="block";
    var sec = document.getElementsByClassName("playsec")[0].style.display="block";
   
    document.getElementById('sec1').style.display = "none"
}




//break 2

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



/*fresh work 

*/



function generateUniqueRandomNumber(existingNumbers) {
    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 5) + 1;
    } while (existingNumbers.includes(randomNumber));

    existingNumbers.push(randomNumber);
    return randomNumber;
}

var existingNumbers = [];
var r1 = generateUniqueRandomNumber(existingNumbers);
var r2 = generateUniqueRandomNumber(existingNumbers);
var r3 = generateUniqueRandomNumber(existingNumbers);
var r4 = generateUniqueRandomNumber(existingNumbers);
var r5 = generateUniqueRandomNumber(existingNumbers);

// let players = document.getElementsByClassName("players").forEach(err=>{
//     err.innerHTML;
// });

console.log(r1, r2, r3 , r4 , r5)


document.getElementById("p"+r1).addEventListener("click", () => {
    toggleDial2("Victory")
});

document.getElementById("p"+r2).addEventListener("click", () => {
    toggleDial("Defeat");
});

document.getElementById("p"+r3).addEventListener("click", () => {
    toggleDial("Defeat");
});

document.getElementById("p"+r4).addEventListener("click", () => {
    toggleDial("Defeat");
});

document.getElementById("p"+r5).addEventListener("click", () => {
    toggleDial("Defeat");
});

var dial1 = document.getElementById("dial1");

function toggleDial(message) {
    if (dial1.style.display === "none") {
        dial1.style.display = "flex";
    } else {
        dial1.style.display = "none";
    }
    
    document.getElementById("sent").innerHTML = message;
}


function toggleDial2(msg) {
    if (dial2.style.display === "none") {
        dial2.style.display = "flex";
    } else {
        dial2.style.display = "none";
    }
    document.getElementById("sent2").innerHTML = msg;

}

document.getElementById("okay").onclick = () => {
    dial1.style.display = "none";
};

document.getElementById("okay2").onclick = () => {
   window.location.reload()
};
