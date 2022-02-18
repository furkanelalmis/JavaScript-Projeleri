// Örnek-2

new Vue({
    el: "#items",
    data: {
        title: "Merhaba",
        message: "Hoş Geldin",
        link: "http://www.facebook.com"

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
// v-Once Nedir ? İlk Rendırdan sonra HTML üzerinden verinin data içerisinde neyse öyle kalmasını sağlar.