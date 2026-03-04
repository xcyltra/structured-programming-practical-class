let randomFact;
const facts = [
  "Gurita memiliki tiga jantung dan darah berwarna biru.",
  "Madu tidak akan pernah basi meskipun disimpan ribuan tahun.",
  "Semut dapat mengangkat beban 50 kali berat tubuhnya sendiri.",
  "Sidik jari koala hampir identik dengan sidik jari manusia.",
  "Pohon pisang secara teknis adalah tanaman herba, bukan pohon."
];

const randomIndex = Math.floor(Math.random() * facts.length);
randomFact = facts[randomIndex];
console.log("Fakta unik: " + randomFact);
console.log("Nomor fakta: " + (randomIndex + 1));