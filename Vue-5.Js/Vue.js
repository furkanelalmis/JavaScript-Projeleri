// VUE JS Computed Properties İle Değişikliklere Karşılık Vermek 

new Vue({
    el : "#item",
    data : {
        counter:0,        
    },
    methods : {
        result : function(){            
           return this.counter > 10 ? "10'dan büyüktür " : "10'dan küçüktür." 
        }      
    },
    watch : {
        counter : function(value){
            vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },1500)
        }
    }
})


// Bu bölüm birdaha izlenecek baştan . NOT !! .  7.Dakikadan sonra tekrar izlenecek.
// computed Senkron çalışır  
// watch Asenkron çalışır   
// watch ile tanımladığımız bölgeyle kendi kendini refleshme özelliği yaptık her 1,5saniye içinde kendini sıfırla anlamında.






