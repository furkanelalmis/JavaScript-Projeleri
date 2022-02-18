// Örnek-2

new Vue({
    el: "#items",
    data: {
        title: "Merhaba",
        message: "Hoş Geldin",
        link: "http://www.facebook.com",
        blogLink: "<a href='http://www.instagram.com'>Link</a>"

    },
    methods: {
        hello: function() {
                this.title = "Aman Aman Nerelere Geldik"
                return this.title

                // ('return this.title dersek yukarıda title içine tanımlanmış yazı ekrana gelir.)
            } // return this.title + this.message bu şekilde yukarıda tanımlananları ekrana getirir.
    }
});


// NOT : return edip döndürürken elemanı yukarıda başka bir propörti tanımlanmılşsa onuda çağırabiliriz.
// yani öncelik olarak ('return this.title') dersem MERHABA yazsı aktif olarak çalışacaktır.
// Link için Bind Etme özellğini gördük.


// Directive Nedir ? bize vuje js tarafından işlem yapmamızı sağlayan tanımlamalar diyebiliriz.
// (v-Once) Nedir ? İlk Rendırdan sonra HTML üzerinden verinin data içerisinde neyse öyle kalmasını sağlar.
// (v-html) data tanımlanmş blogLinki yazdığımız zaman direk olarak Linki sayfaya aktarır.(v-html)
// yani Script kod olarak dataya tanımladığımız zaman html sayfasına direk olarak aktarır.(v-html)
