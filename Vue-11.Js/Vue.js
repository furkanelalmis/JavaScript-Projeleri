new Vue({
  el: "#item",
  data: {
    title: "VueJs Instance",
  },
  methods: {
    destroy: function () {
      this.$destroy(); // burdaki destroy bir metotdur.
    },
  },
  beforeCreate: function () {
    console.log("beforeCreate()");
  },
  create: function () {
    console.log("create()");
  },
  beforeMount: function () {
    console.log("beforeMount()");
  },
  mounted: function () {
    console.log("mounted()");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate()");
  },
  update: function () {
    console.log("update()");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy()");
  },
  destroyed: function () {
    console.log("destroyed()");
  },
});

// PRATİK OLARAK ÖRNEK YUKARIDAKİ GİBİDİR.
// NOT : eski dom üzerinde ve yenide herhangi bir değişiklik yoksa güncelleme yapmıyor.
// eski veri ve yeni veri aynı oldugu için güncelleme yapmıyor.
// bu yüzden update ve beforeupdate metodları çalışmıyor.
// dom ile js arasındaki bağlantı kopmuş olur vue ınstıns çalışmaz hale gelir.

// VueJS Instance Yaşam Döngüsü Telefonda Ekran Resmi Çekildi.
// 1-> new Vue (before Create)
// 2-> İntialize Data & Events (Instance Created).
// 3-> Template veya El'in Tempale'i Derlenir. (before Mount)
// 4-> El Derlenmiş Template ile Değiştirilir
// 5-> Mounted to DOM - Data Changed- re-Rener-DOM - Mounted to DOM
// 6-> Mounted to DOM - (before Destory) - Destroyed

// NOT : Döngü Sırası Bu Şekilde İlerliyor.

// NOT : ÖNEMLİ Terimlerin Açıklamaları

// DATA : Sayfa ilk yüklendiğinde ilgili değişkenleri, tiplerini ve ilk değerlerini ‘data’ içerisinde tanımlarız.
// METHODS : Modül/sayfa yüklendikten sonra durumlara göre çalıştıracağımız javascript komutlarını methods kapsayıcısı içerisinde yazabiliriz. İçerisine fonksiyonlar oluşturup her birini farklı durumlara göre istediğimiz yerden(computed, created vs.) çağırabiliriz.
// COMPUTED : Bir değere veya veriye bağlı olarak başka bir alanın anlık değişimlerinin yapılması için dinleme işlemlerini gerçekleştirdiğimiz yerdir
// Created : Methods ve computed gibi object tipinde değil, fonksiyon tipindedir. Sayfanın yüklendiği anda çalışması gereken fonksiyonları kapsar.
// Props : Modül içerisine dışarıdan gönderilen modelleri tanımlarız. Modelin tipi(string, object vs.) , zorunluluk durumu gibi tanımlamalar yapabiliriz. Statik ve dinamik değerler gönderilebilir.
