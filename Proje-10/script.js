// Random Sayı Üretme

function sec(id){
    return document.getElementById(id);
}


function sayıUretme(){
    document.getElementById("sayi-1").innerHTML= randomInt(1,1000);
}

function randomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
