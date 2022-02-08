// Rakamların Son Basamağını Aynı Olup Olmadığını Yap

function sec(id){
    return document.getElementById(id);
}

function tamsayı(){
    const sayi1 = Number(sec("sayi-1").value);
    const sayi2= Number(sec("sayi-2").value);
    const sayi3= Number(sec("sayi-3").value);


    const result1 = sayi1 % 10;
    const result2 = sayi2 % 10;
    const result3 = sayi3 % 10;


    if(result1 == result2 && result1 == result3){
        sec("sonuc").innerHTML = (`${sayi1}, ${sayi2} , ${sayi3}`);
    }else{
        sec("sonuc").innerHTML = (`${sayi1},${sayi2} , ${sayi3}`);
    }
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators 
// bu sayfada kullanacağımız karakterler var önemli bir sayfa incelenecek.