//Variabel
// var, const, let


var username = "tinapyp";

const nama_depan = "fathin"
const nama_belakang = "afif";

let usia = 23;

let greeting = `nama saya ${nama_depan} ${nama_belakang}, umur sekarang ${usia}`;

let tes = null;


// console.log("nama saya", nama_depan, nama_belakang, "umur saya", usia);
console.log(greeting)
console.log(tes)

//Function

function greeting_friend(nama_depan = "andi", usia){
    let greeting = `Halo guys, nama ku ${nama_depan}, umur ku ${usia}`
    console.log(greeting)
}

greeting_friend(nama_depan, usia);
greeting_friend(); // will output into default value


// Object -> property -> nested variable

// Arrow Function

// const data_saya = {
//     nama : "Fathin",
//     umur : "23",
//     bangun : (nama) => {
//         console.log(`${nama} udah bangun`)
//     }
// }
// data_saya.bangun(data_saya.nama)

// Self retrieve from object

const data_saya = {
    nama: "Fathin",
    umur: "23",
    bangun: function (nama) {
        console.log(`${nama || this.nama} udah bangun`)
    }
}
data_saya.nama = "tinapyp"
data_saya.bangun(data_saya.nama)
  