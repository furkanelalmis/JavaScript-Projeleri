// Vue Js Uygulamaları


new Vue({
    el: "#items",
    data: {
        title: "Merhaba",
        description: "Deneme Yazısı "
    },
    methods: {
        changeTitle: function(event) {
            this.description = event.target.value;
        }
    }

});




// Baynd etme özelliği (v-on: input="changeTitle") örneği gibi
// Vue Js'in özel kullandığı özel tanımladğı proröti (methods)dur.
// İçerisine fonksiyonlar alıyor özel propörti (mehtods).
// 'this' ingilizcede (bu) anlamına gelir burdada o anlamda kullanıyor.