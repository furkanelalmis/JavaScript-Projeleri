// HESAP MAKİNESİ BİR YERE BAKMADAN YAPTIĞIM ÇALIŞMA

function sec(id) {
  return document.getElementById(id);
}

function dörtİslem() {
  const sayi1 = Number(sec("sayi-1").value);
  const sayi2 = Number(sec("sayi-2").value);
  const islem = sec("islem").value;

  if (islem == 1) {
    sec("sonuc").innerHTML = sayi1 + sayi2;
  } else if (islem == 2) {
    sec("sonuc").innerHTML = sayi1 - sayi2;
  } else if (islem == 3) {
    sec("sonuc").innerHTML = sayi1 * sayi2;
  } else if (islem == 4) {
    sec("sonuc").innerHTML = sayi1 / sayi2;
  }
}
