// Proje -15 Kitaplık Uygulaması
// kitap bilgileri kitap hakkında bilgiler .

let List = [];
let editItem = {
    id: "",
};


function sec(id) {
    return document.getElementById(id);
}

function ekle() {
    const bookname = sec("bookName").value; // Kitap adı
    const authorname = sec("authorName").value; // Yazar adı
    const booksubject = sec("bookSubject").value; // Kitap Konusu
    const publicationyear = sec("publicationYear").value; // Kitap Basım Yılı
    const coverımage = sec("linkAddress").value; // Fotoğraf Linki


    List.push({
        id: List.length + 1,
        kitabadi: bookname,
        yazaradi: authorname,
        konusu: booksubject,
        basimyili: publicationyear,
        link: coverımage,

    });
    getAll();
    setLocalStroge();
    sec("formItem").reset();
}


function getAll() {
    let html = "";
    List.forEach(function(kitab) { // foreach : bir dizideki tüm elemanlara kolaylıkla dolaşabiliriz fonksiyonunu List dizisi üzerinden çağırdık.
        html +=
            "<tr>" +
            "<td>" +
            "<img class='w-25 mr-2' src='" + kitab.link + "' style='height:50px !important' />" +
            kitab.kitabadi +
            "</td>" +
            "<td>" +
            kitab.yazaradi +
            "</td>" +
            "<td>" +
            kitab.konusu +
            "</td>" +
            "<td>" +
            kitab.basimyili +
            "</td>" +
            "<td>" +
            "<button class= 'btn btn-primary mr-1' onClick='elemanDüzenle(" +
            kitab.id +
            ")'>Düzenle</button>" +
            "<button class= 'btn btn-danger ml-1 ' onClick='elemanSil(" +
            kitab.id +
            ")'>Sil</button>" +
            "</td>" +
            "</tr>";
    });
    sec("content").innerHTML = html;
}

function duzenle() {
    const duzen = List.findIndex((list) => list.id === editItem.id);
    // findindex içerisnde bulunan parametrenin dizi içerisinde sırasını veren metoda fındındex denir.
    // findindex içerisine değişken tanımladık ve onu Id ile uyumlu hale getirdik.
    List[duzen].kitabadi = sec("bookName").value;
    List[duzen].yazaradi = sec("authorName").value;
    List[duzen].konusu = sec("bookSubject").value;
    List[duzen].basimyili = sec("publicationYear").value;
    List[duzen].link = sec("linkAddress").value;

    // Yukarıda Push ettiğimiz değerleri burda çağırıp İd le eşleştiriyoruz.
    getAll();
    setLocalStroge();
    editItem = {};
    sec("formItem").reset();
}

function elemanDüzenle(kitabId) {
    editItem = List.find((list) => list.id == kitabId);
    // eleman düzenleyi onclik olarak tetiklediğimiz için burda tanımladık .
    // find elemanın kendisini verir bize.
    sec("bookName").value = editItem.kitabadi;
    sec("authorName").value = editItem.yazaradi;
    sec("bookSubject").value = editItem.konusu;
    sec("publicationYear").value = editItem.basimyili;
    sec("linkAddress").value = editItem.link;
}

// Burdaki mantık veriyi sağdan alıp sola çekiyoruz. Not : Denklem mantığı gibi düşün  Çok Önemli.

function elemanSil(kitabId) {
    if (confirm("Elemanı Silmek İstedğinize Eminmisiniz )")) {
        const elemanıSil = List.findIndex((kitab) => kitab.id == kitabId);
        List.splice(elemanıSil, 1);
        getAll();
        setLocalStroge();
    }

}
// 'splice' metodu ile js'de dizilere eleman ekleyip silebiliyoruz.
// 'confirm' Elemanı gerçekten silmek istediğimizi teyit etmek için kullandık.
// findindex içerisnde bulunan parametrenin dizi içerisnde sırasını veren metoda fındındex denir

function setLocalStroge() {
    localStorage.setItem("List", JSON.stringify(List));
}


function getLocalStroge() {
    if (localStorage.getItem("List"))
        List = JSON.parse(localStorage.getItem("List"));
}



getLocalStroge();
getAll();



sec("formItem").addEventListener(
    "submit",
    () => {
        if (parseInt(editItem.id) > 0) {
            // parseInt veri türü ne olursa türünü number'a çevirir.
            duzenle();
        } else {
            ekle();
        }
    },
    false
);