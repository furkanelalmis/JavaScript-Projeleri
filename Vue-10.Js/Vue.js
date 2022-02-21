// Vue Instance

new Vue({
  el: "#items",
  data: {
    title: "VueJs Instance",
    showParagraph: false,
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle("VueJs Instance (Güncellendi)");
    },
    updateTitle: function (title) {
      this.title = title;
    },
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function (value) {
      alert("Title değişti, yeni değer : " + value);
    },
  },
});

// Bir butna tıkaldıgımız zaman aksiyon almasını istiyorsak Vue Instance ile yapıyoruz
// Buton, Element, Gibi parametrelerin tetiklenmesi için aksiyon almak isiyorsak Vue ınstance kulanıyoruz.
// 2 aynı ınstance açmak yerine 2 ınstance birleşirip calışmak daha iyi.
// Örneği eğitmen yaptı izlenildi burda uygulanmadı.
// Vue apide okuyabiliriz
// gönderdiğimiz Objenin dışında propöti ekleyebilriiz
// fakat vue js içerisinde reactiviti anlamında kullanamıyoruz
// izin vermeyen ara katmanın adı WatcherLuer
