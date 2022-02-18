// CSS Classları ile Dinamik Stil İşleme

new Vue({
    el : "#items",
    data : {
        attachedClass : false,
        color: "green"
    },
    computed : {
        divClass : function(){
            return{
                yellow : this.attachedClass,
                blue : !this.attachedClass
            }
        }
    }
})


// Diğer yöntemler ekran fotosu çekildi telefondan incelenecek.


