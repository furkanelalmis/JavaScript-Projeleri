// Örnek

for (let i = 0; i < 10; i++) {
    // eğer 2 ye bölünebiliyorsa bir sonraki adıma atlar
    if (i % 2 == 0) continue;
    alert(i); // ekranda 1,3,5,7,9 değerlerini verir 2 ye tam bölünemeyen tek değerleri verir.
}

// Sayfayı açınca alert olarak direk geliyor . Kısa bir örnek yaptık 



// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// }

// Aynı yöntem bu şekildede tanımlanabilir .



for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) continue;
    alert(i);
}


// 'i' yi kücük ve eşit olarak sağlarsak 2 ye bölünen kalanları verir
// 0,2,4,6,8 rakamlarını verir.