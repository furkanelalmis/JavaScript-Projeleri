// Component Yapısına Giriş 



var cmp = {
    data: function() {
        return {
            status: "Pasif"
        }
    },
    // buraya methods, computed,watch tanımlanabilir rendır edilebilir.
    template: '<p> Sunucu Durumu :{{status}} <button @click="changeStatus">Değiştir</button></p>',
    methods: {
        changeStatus: function() {
            this.status = "Aktif"
        }
    }
}




new Vue({
    el: "#item",
    components: {
        "my-comp": cmp
    } // burası bir obje olduğu için içerisine birden fazla component alabiliriz.

})

new Vue({
    el: "#item-2",
})

// Deftere Notlar Güzel Bir Şekilde Alındı.