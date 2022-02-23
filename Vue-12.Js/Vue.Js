// Webpack ve Vue CLI ile Gerçek Geliştirme Ortamına Geçiş 

new Vue({
    el: "#item",
    data: {
        title: "VueJs Instance"
    }
});


// Neden Development Server'a İhtiyacımız Var ? 
// 1-> Uygulamamızı gerçek şartlarda test etmemizi sağlar 
// 2-> Uygulamanın başlangıcında tüm dosyaları yüklemiyor musun ?('O zaman App Servere İhtiyacımız Var')
// 3-> programlama dillerini tarayıcımızda çalıştırmamızı sağlayan aracı programdır. App Server
// NOT : File protokolü HTTP' protokolü değildir. ('file://!= http://)

// Development Workflow nedir ? 

// Code => Production Server ('Development server'ı') => Kullanıcı Sıralama bu şekilde ilerliyor.
// Code ile Production Server arasında Daha fazla özellik vardır.
// Bunlar : 1-) Single File template Derlenir : kendi içerisinde js blogu, html blogu ve css blogu barındırdan kendi içerisinde calısan kücük uygulamadır.
// 2-) Karakter Duyarlılığı Component Seçicileri: componentin harfler ve kelimeler arasında isimlendirme yaparken birden fazla isimlendirme yapabiliriz.
// 3-) Pre processors ve daha fazlası : ecmascript 6dan 5e dönüştürebilir veya sassdan direk css koduna dönüştürebilir

// Vue CLI ('Sielay') Nedir ?
// Vue.js uygulamaları geliştirmemize yardımcı olan ve ihtiyaç duyabileceğimiz tüm moden geliştirme araçlarını barındıran bir geliştirme aracıdır.
// 1-) npm install -g vue-cli ('İlk önce İndirmemiz Gerekiyor )
// 2-) İstediğimiz Şablonu Secip Kodlama Ortamımızı Hazırlıyoruz.
// 3-) WebPack: ('Komplex Webpack Workflow (Test dahil) ') Biz bu kodlama ortamını kullanıyoruz.
// 4-) NPM : Node Pack Manager ( Paket Yöneticisi ).