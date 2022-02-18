// Eventler

new Vue({
    el : "#items",
    data : {
        counter : 0,
        drop : 0,
        x : 0,
        y : 0
    },
    methods: {
        showAlert : function(name){
            alert(name);
        },
        // fonksiyon tanımlayarak yapılan kodlama 
        increaseCounter : function(){
            this.counter++;
        },
        updateCoords : function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        showAlert2 : function(event){
            alert(event.target.value); 
        }
    }
        
})



// Bind etmek için (:) özelliği kullanabiliriz. 
// butonda belirtilen ++ dediğimiz zaman butona her basıldıgında 1 arttır anlamına geliyor.

// 'on' yakalama anlamına gelir. 

// v-on:mousemove olayı html sayfasında mouse ile gezerken sayfa kordinatları hakkında bilgi veriyor . örneğini yaptık 

// Event içinde argüman gönderdik ( function içine name tanımladık ve html sayfasında knedi ismimi yazdım butoan basınca htmlde yazılan isim tetikliyor.)

// Event Modifier Özelliğini gördük bu özellik bir fiilin kendine has özellikleri yapmamızı engelleyen yapmamızı yasaklayan özelliktir.
// Örnek Yapıldı (v-on:mousemove) tetiklemesni durdurduk.

// Klavye Eventini Gördük Klavye İçin Tanımlanmış bir tuşa basıldğı zaman 'keyup' ı yakalar ve tetikler.

// Keyup tetiklenmesi target value vermemizin sebebi inputun içine yazdığımız bilgiyi tetikler (enter-space tanımladık.)

// 'p' etiketlerine yazılan 'counter' örnekleri : Template içerisinde javascript kodları yazmanın örnekleridir.

// tek satır için yazılabilir template içerisinde js kodu Önemli bir NOTT.! 


