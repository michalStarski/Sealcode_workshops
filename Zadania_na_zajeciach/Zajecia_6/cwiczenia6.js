var klasy = document.querySelectorAll(".example");

var wypiszLi = function(i){
    console.log(document.getElementById("li-" + i).innerHTML);
}

var wypiszCl = function(i){
    console.log(klasy[i].innerHTML);
}

for(var i = 1; i<=4; i++){
    wypiszLi(i);
}

for(var j=0; j<klasy.length; j++){
    wypiszCl(j);
}