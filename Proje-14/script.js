// FORM SAYFASI

let List = [];
let editItem = {
    id: ''
};




function sec(id) {
    return document.getElementById(id);
}

function kayitOl() {
    const name = sec("username").value;
    const surname = sec("surname").value;
    const email = sec("email").value;
    const password = sec("password").value;

    List.push({
        id: List.length + 1,
        isim: name,
        soyisim: surname,
        eposta: email,
        sifre: password
    });
    getAll();
    sec("formItem").reset();

    // minlength minimum uzunluğu ister örnek olarak 5 karakterden az kullanamazsınız diye uyarı verir ! 
    // required Giriş alanına bir öğe gerektirdiğini belirtir.
}



function getAll() {
    let html = ""; // html sayfasında tanımladığımız table'daki veriyi buraya cağırıyoruz
    List.forEach(function(uye) { // uye değişkeni tanımladık 
        html += "<tr>" +
            "<th>" + uye.isim + "<th>" + // yukarıda fonksiyon içinde tanımlanan 'uye' yi push ettiğimiz değerler ile çağırırız.
            "<th>" + uye.soyisim + "<th>" + // yukarıda fonksiyon içinde tanımlanan 'uye' yi push ettiğimiz değerler ile çağırırız.
            "<th>" + uye.eposta + "<th>" + // yukarıda fonksiyon içinde tanımlanan 'uye' yi push ettiğimiz değerler ile çağırırız.
            "<th>" + uye.sifre + "<th>" + // yukarıda fonksiyon içinde tanımlanan 'uye' yi push ettiğimiz değerler ile çağırırız.
            "<td>" +
            "<button class='btn btn-primary' onclick='elemanDüzenle(" + uye.id + " )' >Düzenle</button>" +
            "<button class='btn btn-danger' onclick='elemanSil(" + uye.id + " )' >Sil</button>" +
            "<td>" +
            "<tr>";
        // butonları burda tanımlayıp onclik özelliği verdik çünkü butonların tetiklemesi için 
        // css özelliği verebiliyoruz butonlara burda 

    })
    sec("content").innerHTML = html;
    // veriyi sayfaya basmak için tabloda id tanımladığımız yeri çağırıyoruz.
}

function duzenle() {

    const duzen = List.findIndex(list => list.id == editItem.id);
    // findIndex kullandık : her dizi öğesi için bir işlev yürütür.
    // findIndexin içine bir değişken tanımladık ve onu Id ile uyumlu hale getirdik.
    List[duzen].isim = sec("username").value
    List[duzen].soyisim = sec("surname").value
    List[duzen].eposta = sec("email").value
    List[duzen].password = sec("password").value

    // Push ettiğimiz değişkenleri burda tanımlıyoruz ve idlerini'de tanımlıyoruz.

    getAll();
    editItem = "";
    sec("formItem").reset();


    // yukarıda tanımladğımız değişkeni burdada tanımlamamız gerekiyor yukarıda 'editItem' tanımladık burdada tanımlıyoruz.
}

function elemanDüzenle(elemanId) {

    editItem = List.find(list => list.id === elemanId);
    // eleman düzenleyi onclik olarak tetiklediğimiz için burda tanımladık .
    // find kullanmamızın sebebi her dizi öğesi için bir işlev yürütür.
    // bir testi geçen ilk öğenin değerini döndürür.
    // find elemanın kendisini verir 

    sec("username").value = editItem.isim;
    sec("surname").value = editItem.soyisim;
    sec("email").value = editItem.eposta
    sec("password").value = editItem.password;


    // Veriyi sağdan alıp sola atmamız gerekiyor Çok önemli 

}

function elemanSil(elemanId) {
    if (confirm("Elemanı Silmek İstediğinize Eminmisiniz ?")) {
        const elemanıSil = List.findIndex(eleman => eleman.id == elemanId);
        List.splice(elemanıSil, 1);
        getAll();
    }
    // 'splice' metodu ile js'de dizilere eleman ekleyip silebiliyoruz.
    // 'confirm' Elemanı gerçekten silmek istediğimizi teyit etmek için kullandık.
    // fimdindex içerisnde bulunan parametrenin dizi içerisnde sırasını veren metoda fındındex denir 
}


sec("formItem").addEventListener('submit', () => {
    if (parseInt(editItem.id) > 0) {
        duzenle();
    } else {
        kayitOl();
    }

}, false);

//