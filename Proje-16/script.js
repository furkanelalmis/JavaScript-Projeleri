// Araba Tanıtım Sitesi
// markası , türü , model, değer, görsel

let List = [];
let editCar = {
    id: "",
};

function sec(id) {
    return document.getElementById(id);
}

function kaydet() {
    const carbrand = sec("carBrand").value; // Araba Markası
    const typeofcar = sec("typeOfCar").value; // Araba Türü 
    const carmodel = sec("carModel").value; //Araba Modeli 
    const carvalue = sec("carValue").value; // Araba Değeri 
    const carımage = sec("carImage").value; // Araba Fotoğrafı Linki

    List.push({
        id: List.length + 1,
        marka: carbrand,
        türü: typeofcar,
        model: carmodel,
        degeri: carvalue,
        link: carımage,
    });
    getAll();
    sec("form").reset();
    setLocalStroge(); // Listenin güncel halini alıp localstorageye attıyor.

}

function getAll() {
    let html = "";
    List.forEach(function(car) { // bir dizideki tüm elemanlara kolaylıkla ulaşabiliriz.
        html +=
            "<tr>" +
            "<td>" +
            car.marka +
            "</td>" +
            "<td>" +
            car.türü +
            "</td>" +
            "<td>" +
            car.model +
            "</td>" +
            "<td>" +
            car.degeri +
            "</td>" +
            "<td>" +

            "<img class='w-25 mr-2' src='" + car.link + "' style='height:50px !important' />" +

            "<button class='btn btn-warning mr-1 ' onClick='ıtemDüzenle'(" + car.id + ")>Düzenle</button>" +
            "<button class='btn btn-danger ml-1 ' onClick='ıtemSil'(" + car.id + ") >Sil</button>" +
            "</td>" +
            "</tr>";


    });
    sec("items").innerHTML = html;

}

function düzenle() {
    const düzen = List.findIndex((list) => list.id === editCar.id);
    // findindex içerisnde bulunan parametrenin dizi içerisinde sırasını veren metoda fındındex denir.
    List[düzen].marka = sec("carBrand").value;
    List[düzen].türü = sec("typeOfCar").value;
    List[düzen].model = sec("carModel").value;
    List[düzen].degeri = sec("carValue").value;
    List[düzen].link = sec("carImage").value;

    getAll();
    editCar = {};
    sec("form").reset();
    setLocalStroge(); // düzenlemenin güncel halini alıp localstorgaye atıyor.


}

function ıtemDüzenle(carId) {
    editCar = List.find((list) => list.id === carId);
    // find elemanın kendisini verir bize.
    // (ıtemDüzenle) Oncliği tetiklememiz için tanımlıyoruz burda
    sec("carBrand").value = editCar.marka;
    sec("typeOfCar").value = editCar.türü;
    sec("carModel").value = editCar.model;
    sec("carValue").value = editCar.degeri;
    sec("carImage").value = editCar.link;
}

function ıtemSil(carId) {
    if (confirm("Elemanı Silmek İstediğinize Eminmisiniz ?")) {
        const sil = List.findIndex((list) => list.id === carId.id) // confirim ile elemanın teyitini gerçekleştirmek için soru soruyoruz.
        List.splice(sil, 1); // splice metodu ile eleman silebiliyoruz.
        getAll();
        setLocalStroge(); // güncel verinin silinmsiyle local storageye atıyor.
    }
}

function setLocalStroge() { // setlocal locali seçer anlamına gelir.
    localStorage.setItem("List", JSON.stringify(List));
}

function getLocalStroge() { // getlocal locali getir anlamına gelir.
    if (localStorage.getItem("List"))
        List = JSON.parse(localStorage.getItem("List"));
}

getLocalStroge();
getAll();
// getLocalStroge: 
// Stringify : fonksiyonu herhangi bir Javascript nesnesini alır ve onu string formatına çevirir.
// Parse : Bu da tahmin edebileceğiniz gibi string formatındaki veriyi javascript object yapıyor.


sec("form").addEventListener(
    "submit",
    () => {
        if (parseInt(editCar.id) > 0) { // ParseInt string bir ifadeyi numbera çevirir.
            düzenle();
        } else {
            kaydet();
        }
    },
    false
);


// Slide Olayı tablonun üstünde tanımlandı.
// Devam edilecek butonlar eklenecek