// console.log("\n=== 1. Dasar-dasar Array ===");

// // Contoh dari 1.array_basics.js
// let angka = [1, 2, 3, 4, 5];
// let buah = ["apel", "jeruk", "pisang", "mangga"];
// let campuran = [1, "Hello", true, 3.14, null]; // JavaScript array bersifat untyped

// console.log(buah[0]); // "apel" (elemen pertama)
// console.log(buah[1]); // "jeruk" (elemen kedua)
// console.log(buah[10]); // undefined (index tidak ada)

// console.log(buah.length); // 4
// let kosong = [];
// console.log(kosong.length); // 0

// let sparse = [1, , , 4, 5]; // Lubang di index 1 & 2
// console.log(sparse.length); // 5
// console.log(sparse[1]); // undefined

// console.log("\n=== 2. Cara membuat Array ===");

// let kosong = [];
// let angka = [1, 2, 3];
// let denganKoma = [1, 2, 3,]; // Trailing comma diperbolehkan & aman

// let arr1 = new Array(5);     // [empty × 5]
// let arr2 = new Array(1, 2, 3); // [1, 2, 3]
// let arr3 = new Array('3');   // ['3']

// let arr = Array.of(3);    // [3]
// let arr2 = Array.of(1,2,3); // [1, 2, 3]

// // Dari string
// console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']

// // Membuat array dengan panjang & nilai default
// let nol = Array.from({length: 5}, () => 0); // [0, 0, 0, 0, 0]

// // Dengan mapping index
// let indexArr = Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]

// console.log("\n=== 2.1 Coppying ===");

// const original = [1, 2, 3];
// const salinan = [...original];

// salinan.push(4);
// console.log(original); // [1, 2, 3] (tetap aman)
// console.log(salinan);  // [1, 2, 3, 4]

// console.log("\n=== 2.2 Merging ===");

// const buah = ["apel", "jeruk"];
// const sayur = ["bayam", "wortel"];

// const belanjaan = [...buah, "telur", ...sayur];
// console.log(belanjaan); // ["apel", "jeruk", "telur", "bayam", "wortel"]

// console.log("\n=== 2.3 String to Array ===");

// const kata = "HALO";
// const huruf = [...kata]; 
// console.log(huruf); // ["H", "A", "L", "O"]

// console.log("\n=== 3.1 Mengakses & Mengubah ===");

// let warna = ["merah", "hijau", "biru"];
// warna[1] = "kuning"; // Ubah elemen
// // Elemen terakhir
// let terakhir = warna[warna.length - 1];

// console.log("\n=== 3.2 Menambah & Menghapus Elemen ===");

// let hewan = ["kucing", "anjing"];
// hewan.push("burung"); // ["kucing", "anjing", "burung"]
// hewan.unshift("ikan"); // ["ikan", "kucing", "anjing", "burung"]
// let terakhir = hewan.pop(); // "burung"
// let pertama = hewan.shift(); // "ikan"

// console.log("\n=== 3.3 Operator delete & manipulasi length ===");

// let data = [1, 2, 3, 4, 5];
// delete data[2]; // [1, 2, empty, 4, 5], length tetap 5
// data.length = 3; // [1, 2, empty]
// data.length = 0; // []

// console.log("\n=== 3.4 Mengecek Keberadaan Elemen ===");

// let hobi = ["membaca", "menulis"];
// // Cek index
// console.log(1 in hobi); // true
// // Cek nilai
// console.log(hobi.includes("membaca")); // true
// // Cari posisi
// console.log(hobi.indexOf("menulis")); // 1 (atau -1 jika tidak ada)

// console.log("\n=== 4.2 Pencarian Methods ===");

// let buah = ["apel", "jeruk", "pisang", "jeruk", "mangga"];
// buah.indexOf("jeruk");      // 1 (pertama ditemukan)
// buah.lastIndexOf("jeruk");  // 3 (terakhir ditemukan)
// buah.includes("mangga");    // true
// // includes() bisa mendeteksi NaN, indexOf() tidak
// [NaN].includes(NaN); // true
// [NaN].indexOf(NaN);  // -1

// console.log("\n=== 4.3 join() & split() ===");

// let kata = ["Hello", "World"];
// console.log(kata.join(" ")); // "Hello World"
// let str = "Hello World";
// console.log(str.split(" ")); // ["Hello", "World"]

// console.log("\n=== 4.4 reverse(), concat(), slice() ===");

// let data = ["a", "b", "c", "d", "e"];
// console.log(data.slice(1, 4)); // ["b", "c", "d"]
// console.log(data.slice(-3));   // ["c", "d", "e"] (3 terakhir)
// console.log(data === data.slice()); // false (objek berbeda)

// console.log("\n=== 5.2 Higher-Order Functions ===");

// let angka = [1, 2, 3, 4, 5];

// // 1. map() → Transformasi
// let kuadrat = angka.map(n => n * n); // [1, 4, 9, 16, 25]

// // 2. filter() → Penyaringan
// let genap = angka.filter(n => n % 2 === 0); // [2, 4]

// // 3. reduce() → Reduksi ke satu nilai
// let total = angka.reduce((sum, n) => sum + n, 0); // 15

// // 4. find() & findIndex() → Cari elemen/index pertama
// let obj = [{id: 1, nama: "A"}, {id: 2, nama: "B"}];
// let found = obj.find(x => x.id === 2); // {id: 2, nama: "B"}

// // 5. every() & some() → Cek kondisi
// let nilai = [85, 90, 78];
// console.log(nilai.every(n => n >= 70)); // true (semua)
// console.log(nilai.some(n => n >= 90));  // true (minimal satu)

// console.log("\n=== 5.3 Contoh Kombinasi Praktis ===");

// let students = [
//   {nama: "Andi", nilai: [85, 90]},
//   {nama: "Budi", nilai: [78, 85]}
// ];
// // Hitung rata-rata
// students.forEach(s => {
//   let avg = s.nilai.reduce((sum, n) => sum + n, 0) / s.nilai.length;
//   console.log(`${s.nama}: ${avg.toFixed(2)}`);
// });

console.log("=== 6.1. SORT METHOD ===");

// 1. Sort String (Alphabetical)
let buah = ["pisang", "apel", "jeruk", "mangga"];
console.log("Array awal:", buah);
let sortedBuah = [...buah].sort(); // copy agar array asli tidak berubah
console.log("Setelah sort():", sortedBuah);
console.log("Array asli tetap:", buah, "\n");

// 2. Sort Angka (WAJIB pakai callback)
let angka = [10, 5, 40, 25, 1000, 1];
console.log("Array angka:", angka);
console.log("Sort default (SALAH!):", [...angka].sort()); // string comparison
console.log("Sort ascending (BENAR):", [...angka].sort((a, b) => a - b));
console.log("Sort descending:", [...angka].sort((a, b) => b - a), "\n");

// 3. Sort Object Array
let mahasiswa = [
  {nama: "Dedi", nilai: 85},
  {nama: "Andi", nilai: 92},
  {nama: "Cici", nilai: 78}
];
console.log("Sort by nama:", [...mahasiswa].sort((a, b) => a.nama.localeCompare(b.nama)));
console.log("Sort by nilai (desc):", [...mahasiswa].sort((a, b) => b.nilai - a.nilai));

console.log("\n=== 6.2. FLAT DAN FLATMAP ===");

let nested = [1, [2, 3], [4, [5, 6]], 7];
console.log("Nested array:", nested);
console.log("Flat level 1:", nested.flat());
console.log("Flat level 2:", nested.flat(2));

let deep = [1, [2, [3, [4]]]];
console.log("Deep nested:", deep);
console.log("Flat semua level:", deep.flat(Infinity));

// flatMap vs map+flat
let kalimat = ["Hello world", "How are you"];
console.log("\nmap + flat:", kalimat.map(k => k.split(" ")).flat());
console.log("flatMap (lebih efisien):", kalimat.flatMap(k => k.split(" ")));

// Filter & Map sekaligus
let angka2 = [1, 2, 3, 4, 5];
let genapDuaKali = angka2.flatMap(n => n % 2 === 0 ? [n * 2] : []);
console.log("Genap dikali 2:", genapDuaKali);

console.log("\n=== 6.3. SPLICE METHOD ===");

let data = ["a", "b", "c", "d", "e"];
console.log("Array awal:", data);

// Hapus 2 elemen mulai index 1
let dihapus = data.splice(1, 2);
console.log("Elemen terhapus:", dihapus);
console.log("Sisa array:", data);

// Insert di index 1, hapus 0
data.splice(1, 0, "x", "y");
console.log("Setelah insert:", data);

// Replace 1 elemen di index 2 dengan "z"
data.splice(2, 1, "z");
console.log("Setelah replace:", data);

// Hapus berdasarkan nilai
let buah2 = ["apel", "pisang", "jeruk"];
let idx = buah2.indexOf("pisang");
if (idx > -1) buah2.splice(idx, 1);
console.log("Hapus 'pisang':", buah2);

console.log("\n=== 6.4. FILL & COPYWITHIN ===");

// fill()
let kosong = new Array(5);
kosong.fill(0);
console.log("Array terisi 0:", kosong);

let arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 4); // Isi 9 dari index 1 sampai <4
console.log("Fill index 1-3:", arr);

// copyWithin()
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("\nArray awal:", arr2);
arr2.copyWithin(0, 3, 6); // Salin index 3-5 ke index 0
console.log("Setelah copyWithin:", arr2);

console.log("\n=== 6.5. ARRAY.FROM ADVANCED ===");

// Generate pola kuadrat
let kuadrat = Array.from({length: 5}, (v, i) => i * i);
console.log("Kuadrat 0-4:", kuadrat);

// Dari object array-like
let nodeListPalsu = { 0: "div", 1: "span", 2: "p", length: 3 };
console.log("Dari NodeList palsu:", Array.from(nodeListPalsu));

// Dari Set (hapus duplikat)
let unik = Array.from(new Set([1, 2, 2, 3, 3, 4]));
console.log("Hapus duplikat:", unik);

// console.log("\n=== 6.6. CHAINING METHODS ===");

// let produk = [
//   {nama: "Laptop", harga: 15000000, kategori: "Elektronik", rating: 4.5},
//   {nama: "Buku", harga: 50000, kategori: "Edukasi", rating: 4.8},
//   {nama: "Mouse", harga: 150000, kategori: "Elektronik", rating: 4.2}
// ];

// let elektronikMahal = produk
//   .filter(p => p.kategori === "Elektronik" && p.harga > 200000)
//   .map(p => ({
//     nama: p.nama,
//     harga: `Rp ${p.harga.toLocaleString()}`,
//     rating: p.rating
//   }))
//   .sort((a, b) => b.rating - a.rating);

// console.log("Elektronik >200k (urut rating):");
// elektronikMahal.forEach(p => console.log("-", p.nama, "|", p.harga, "| ⭐", p.rating));

// console.log("\n=== 6.7. DESTRUCTURING & SPREAD ===");

// // Destructuring
// let warna = ["merah", "hijau", "biru", "kuning"];
// let [utama, kedua, ...sisanya] = warna;
// console.log("Utama:", utama, "| Kedua:", kedua, "| Sisa:", sisanya);

// // Swap variabel tanpa temp
// let a = 10, b = 20;
// [a, b] = [b, a];
// console.log(`Swap: a=${a}, b=${b}`);

// // Spread: Clone & Merge
// let asli = [1, 2, {x: 3}];
// let clone = [...asli]; // shallow copy
// console.log("Clone === Asli?", clone === asli); // false

// let gabungan = [...[1,2], ...[3,4]];
// console.log("Gabungan:", gabungan);

// // Spread di Math
// let nums = [3, 7, 2, 9, 1];
// console.log("Max:", Math.max(...nums), "| Min:", Math.min(...nums));

// console.log("\n=== 7.1. KONSEP ARRAY 2D ===");

// let matriks = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log("Matriks 3x3:", matriks);
// console.log("Akses [1][2]:", matriks[1][2]); // Baris 1, Kolom 2

// // Buat matriks dinamis
// function buatMatriks(baris, kolom, isi = 0) {
//   return Array.from({length: baris}, () =>
//     Array.from({length: kolom}, () => isi)
//   );
// }
// console.log("Matriks 3x4 isi 0:", buatMatriks(3, 4, 0));

// console.log("\n=== 7.2. OPERASI & ITERASI 2D ===");

// let skor = [[95, 87], [78, 91], [89, 94]];
// console.log("Skor awal:", skor);

// // Operasi
// skor[1][1] = 100; // Ubah nilai
// skor.push([85, 88]); // Tambah baris
// skor.forEach(row => row.push(0)); // Tambah kolom
// console.log("Setelah modifikasi:", skor);

// // Iterasi modern
// console.log("\nIterasi dengan entries:");
// for (let [rIdx, baris] of skor.entries()) {
//   for (let [cIdx, nilai] of baris.entries()) {
//     console.log(`[${rIdx}][${cIdx}] = ${nilai}`);
//   }
// }

// console.log("\n=== 7.3. MATEMATIKA & TRANSPOSE ===");

// let data = [[10, 20], [30, 40], [50, 60]];
// // Jumlah per baris
// data.forEach((row, i) => console.log(`Baris ${i} total:`, row.reduce((a,b)=>a+b, 0)));

// // Rata-rata per kolom
// let cols = data[0].length;
// for (let c = 0; c < cols; c++) {
//   let sum = 0;
//   for (let r = 0; r < data.length; r++) sum += data[r][c];
//   console.log(`Kolom ${c} rata-rata:`, (sum / data.length).toFixed(2));
// }

// // Transpose
// function transpose(m) {
//   return Array.from({length: m[0].length}, (_, i) =>
//     Array.from({length: m.length}, (_, j) => m[j][i])
//   );
// }
// console.log("\nTranspose (3x2 -> 2x3):", transpose(data));

// console.log("\n=== 7.4. ARRAY 3D & APLIKASI ===");

// // Struktur 3D: Layer -> Baris -> Kolom
// let kubus = [
//   [[1,2],[3,4]], // Layer 0
//   [[5,6],[7,8]]  // Layer 1
// ];
// console.log("Akses 3D [0][1][0]:", kubus[0][1][0]); // 3

// // Aplikasi: Booking Bioskop
// let bioskop = Array.from({length: 3}, () => Array(4).fill(0)); // 3 baris, 4 kursi
// function booking(bioskop, r, c) {
//   if (bioskop[r][c] === 0) { bioskop[r][c] = 1; return "✅ Terbooking"; }
//   return "❌ Sudah terisi";
// }
// console.log("\nBooking [1][2]:", booking(bioskop, 1, 2));
// console.log("Booking [1][2] lagi:", booking(bioskop, 1, 2));
// console.log("Tampilan Bioskop:", bioskop);