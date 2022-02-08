// Proje -15 Kitaplık Uygulaması
// kitap bilgileri kitap hakkında bilgiler .

function sec(id) {
    return document.getElementById(id);
}

function ekle() {
    const bookname = sec("bookName").value; // Kitap adı 
    const authorname = sec("authorName").value; // Yazar adı
    const booksubject = sec("bookSubject").value; // Kitap Konusu
    const publicationyear = sec("publicationYear").value; // Kitap Basım Yılı 
    const coverımage = sec("coverImage").value; // Fotoğraf Linki
}






function ekle() {
    const url = document.getElementById("linkAddress").value;
    document.getElementById("priview").setAttribute('src', url);
}

"<image src='+item.url+'"