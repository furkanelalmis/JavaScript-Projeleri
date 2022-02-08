// 3 sayıdan en küçüğünü bulma

function sec(id) {
  return document.getElementById(id);
}

function sayiyibul() {
  const sayi1 = Number(sec("sayi-1").value);
  const sayi2 = Number(sec("sayi-2").value);
  const sayi3 = Number(sec("sayi-3").value);

  if (sayi1 < sayi2) {
    if (sayi1 < sayi3) {
      alert("en küçük sayı : " + sayi1);
    } else {
      alert("en küçük sayı : " + sayi3);
    }
  } else {
    if (sayi2 < sayi3) alert("en küçük sayı: " + sayi2);
    else alert("en küçük sayı : " + sayi3);
  }
}
