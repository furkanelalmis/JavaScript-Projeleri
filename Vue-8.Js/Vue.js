// VUE V-if Koşul Eklemek .

new Vue({
    el: "#items",
    data: {
        show: false,
        sayi: 12,
        showParagh: false,
    }
})

// v-else 'de yazabilirdik (Beni Görebilirmisin Acaba ?) yazısına v-if ('!') değil işareti olarak kullandık. 
// ikiside aynı anlama geliyor.

// v-if // v-else-if // v-else yapılarını gördük şart koşma

// v-show yapısınıda gördük v-if ile aynı yapıya sahip.

// v-if ve v-show arasındaki fark ? uygulamada dom üzerinde pasif oalrak durmasını istiyorsak v-show kullanırız eğer ihtiyac yoksa v-if kullanırız.