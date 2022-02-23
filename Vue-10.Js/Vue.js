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
      this.$refs.myButton.innerText = "Test Deneme !!"; // data içine tanımlayıp içeriğe ulaştık.
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

Vue.component("hello", {
  template: "<h1>Merhaba..!</h1>",
});

// Bir butna tıkaldıgımız zaman aksiyon almasını istiyorsak Vue Instance ile yapıyoruz
// Buton, Element, Gibi parametrelerin tetiklenmesi için aksiyon almak isiyorsak Vue ınstance kulanıyoruz.
// 2 aynı ınstance açmak yerine 2 ınstance birleşirip calışmak daha iyi.
// Örneği eğitmen yaptı izlenildi burda uygulanmadı.
// Vue apide okuyabiliriz
// gönderdiğimiz Objenin dışında propöti ekleyebilriiz
// fakat vue js içerisinde reactiviti anlamında kullanamıyoruz
// izin vermeyen ara katmanın adı WatcherLuer

// $data.title yazarakta yukarıda data içine tanımlanmış içeriğe ulaşılabilir.

// ('ref sadece etribüttür html etribüttü değildir fakat vue js tarafından bilinen ve aksiyon alınan etribüttür)
// ('referansın kısaltılması ) this.$refs diyerek içeriden ulaşabiliriz.
// $refs ile instıns içerisinde yer almıyor Önemli bir bilgi.
// Vue-Js API sitesini inceleyebiliriz bu konu ile ilgili ...

// Template Mount Etme İşlemi:

// $ mount : oluşan instınsa bir template bağlamamızı sağlar
// $ mount : En sık kullanılan yaşam döngüsü kancasıdır.Vue mounted(), bileşeniniz DOM'a eklendiğinde kancayı çağırır. Çoğunlukla, bileşenin daha sonra oluşturacağı verileri almak için bir HTTP isteği göndermek için kullanılır.
// var değişkeni tanımladı kendi örneğinde mountu kullanma gösterimi için yazıyorum bunu
// vm1.$mount("#items"); Bu şekilde tanımlanıyor items html'de tanımlanmış id adresini girdik.

// component kullanımı : yukarıda örneği yaptık tanımladık ve html sayfasında hello olarak tanımladık ve ne kadar yazarsak yazalım hep çalışacak alt alta yazılacak .

// String Template Kullanım Limitleri:
// 1-) string template yaptıgımızda bizim browser üzerinde çalışan compaylırımız bunu ele almayacak ve calısmayacak.
// Bu konuya bir daha bakılıp izlenecek.
