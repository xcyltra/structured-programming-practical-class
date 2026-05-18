let produk = {
    spesifikasi: "blabla",
    harga: [100000, 20000],
    stock: 10
}

console.log(produk.spesifikasi);
console.log(produk.harga[0]);
console.log(produk.stock);

produk.harga[1] = 15000;
produk.warna = "merah";
produk.stock = 5;
console.log(produk.warna);
delete produk.spesifikasi;


