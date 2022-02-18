// VUE JS LİSTELEME YÖNTEMİ 

new Vue({
    el: "#items",
    data: {
        products: ["Monitör", "Klavye", "Askı", "Masa"],
        persons: [
            { name: "Furkan", email: "mardinlifurkan_1995@hotmail.com" },
            { name: "Furkan", email: "mardinlifurkan_1995@hotmail.com" },
            { name: "Furkan", email: "mardinlifurkan_1995@hotmail.com" },
            { name: "Furkan", email: "mardinlifurkan_1995@hotmail.com" },
        ]
    }
})

// v-for kullaınımı listeleme yöntemleri için cok kullanılır.
// küçük bir örnekte yaptığımız mantık şu : product'ı products'ın içinden al mantığı vardır.
// (product,index) in products tanımı yapılınca : listenin 0'dan başlayıp sıra numarası vermesini sağlar.
// v-for ile aynı seviyedeki elemnletleri TEMPLATE olarak döndürmeyi öğrendik.
// span etiketine yazılan örnek belirli sayıda döngü kurmak için yapılan bir örnektir.