// Contoh Expression
5 + 3                   // hasilnya 8
"Halo" + " " + "Dunia"  // hasilnya "Halo Dunia"
true && false           // hasilnya false

// Contoh Statement
let nilai = 80;         // menyimpan nilai ke variabel
console.log("Halo");    // menampilkan teks
nilai++;                // menambah nilai

// Contoh Compound Statement (Blok)
{
  let x = 10;
  let y = 20;
  console.log(x + y);  // 30
}

// Empty Statement
// for (let i = 0; i < 5; i++);    // SALAH! loop tanpa isi
//   console.log(i);               // ini dijalankan SEKALI saja, bukan 5x
  
for (let i = 0; i < 5; i++) {   // BENAR
  console.log(i);}               // ini dijalankan 5x

// Declaration Statement

// Variabel
let nama = "Andi";
const PI = 3.14;
var umur = 20;

// Function
function sapa(nama) {
  return "Halo " + nama;
}