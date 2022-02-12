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
            "<button class='btn btn-warning' onClick='ıtemDüzenle'(" + car.id + ")>Düzenle</button>" +
            "<button class='btn btn-danger' onClick='ıtemSil'(" + car.id + ") >Sil</button>" +
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

    getAll();
    editCar = {};
    sec("form").reset();


}

function ıtemDüzenle(carId) {
    editCar = List.find((list) => list.id === carId);
    // find elemanın kendisini verir bize.
    // (ıtemDüzenle) Oncliği tetiklememiz için tanımlıyoruz burda
    sec("carBrand").value = editCar.marka;
    sec("typeOfCar").value = editCar.türü;
    sec("carModel").value = editCar.model;
    sec("carValue").value = editCar.degeri;
}

function ıtemSil(carId) {
    if (confirm("Elemanı Silmek İstediğinize Eminmisiniz ?")) {
        const sil = List.findIndex((list) => list.id === carId.id)
        List.splice(sil, 1);
        getAll();
    }
}