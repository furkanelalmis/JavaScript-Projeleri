// YAŞ ORTALAMASI BULMA

function sec(id){
    return document.getElementById(id);
}

function ortalamahesapla(){
    const yas1= Number(sec("yas-1").value);
    const yas2= Number(sec("yas-2").value);
    const ortalama= (yas1 + yas2) / 2 ;

    sec("sonuc").innerHTML= ortalama;
}
