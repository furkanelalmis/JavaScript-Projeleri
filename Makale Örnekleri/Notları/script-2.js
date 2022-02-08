// Örnek 2 
// Üst Döngü

ust_dongu: for (let i = 0; i < 3; i++) {
    for (let j = 0; i < 3; i++) {
        let giris = prompt(`Kordinattaki değer (${i}): ${j}`, '');
        // Eğer iptal edildi veya boş bir değer girildiyse dışarıdaki döngüyü de kır.
        if (!giris) break ust_dongu; // (*)
        // değer ile birşeyler yap 
    }
}
alert('Bitti!');

// Yukarıdaki kodda break ust_dongu adımına gelirse üste doğru ust_dongu aranır ve bulunduğu yerde kırılır.

// Böylece kontrol doğrudan (*), alert('Bitti!')ye geçer.



// Özet
// Bu konuda 3 farklı döngü işlendi:

// while – Her tekerrürden önce koşul kontrol edilir
// do..while – Koşul tekerrürden sonra kontrol edilir.
// for (;;) – Her tekerrürden önce koşul kontrol edilir. Farklı seçenekler mevcuttur.
// Sonsuz döngü yapmak için genelde while(true) kullanılır. Böyle döngüler de diğerleri gibi break talimatıyla kırılabilir.
// Örneği yaptık.
// Eğer o anki tekerrür ile işimiz bitti ve bir sonrakine geçmek istiyorsanız continue kullanmanız lazım.
//Örneği yaptık
// break/continue ile döngüden önce yazılan etikete atlamak veya üst döngüyü kırmak mümkündür.


// Script,Script-2 ve Script-3 While ve For Döngüsü Kullanımı Yapıldı.