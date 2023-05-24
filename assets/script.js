// Mendapatkan referensi elemen <main> dengan id "blog"
var blogMain = document.getElementById("blog");

// Fungsi untuk menampilkan blog utama dan menyembunyikan blog "Achievement" dan portfolio
function showBlog() {
  blogMain.style.display = "block";
  achievMain.style.display = "none";
  portoMain.style.display = "none";
}

// Mendapatkan referensi elemen <main> dengan id "Achiev"
var achievMain = document.getElementById("Achiev");

// Fungsi untuk menampilkan blog "Achievement" dan menyembunyikan blog utama dan portfolio
function showAchiev() {
  achievMain.style.display = "block";
  blogMain.style.display = "none";
  portoMain.style.display = "none";
}

// Mendapatkan referensi elemen <main> dengan id "Porto"
var portoMain = document.getElementById("Porto");

// Fungsi untuk menampilkan portfolio dan menyembunyikan blog dan achievement
function showPorto() {
  portoMain.style.display = "block";
  blogMain.style.display = "none";
  achievMain.style.display = "none";
}

// Menyembunyikan blog "Achievement" dan portfolio saat halaman dimuat
achievMain.style.display = "none";
portoMain.style.display = "none";
