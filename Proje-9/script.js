// Ortalama Hesaplama

function sec(id){
    return document.getElementById(id);
}

function ortalamaBul(){
    const not1= Number(sec("not-1").value);
    const not2= Number(sec("not-2").value);
    const ortalama=(not1 + not2) / 2 ;

    if(ortalama>0 && ortalama<50){

    }
    else if(ortalama>=50 && ortalama<60){

    }
    if ( ortalama >=50){
        sec("sonuc").innerHTML = "Geçti"        
    }else{
        sec("sonuc").innerHTML = "Kaldı"
    }
}