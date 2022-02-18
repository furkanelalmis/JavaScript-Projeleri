// VUE Js  

new Vue({
    el : "#item",
    data : {
        link : "http://www.facebook.com"
    },
    methods : {
        changeLink : function(){
            this.link = "http://www.instagram.com"
        }
    }
})

// Link değiştirme 
// KISALTMALAR
 // İventi bağlamak istiyorsak @ kullanabiliriz. v-on yerine kullandık
 // Bind(Baynd) etmek istiyorsak (:) kullanabiliriz. v-bind yerine kullandık