$(document).ready(function () {
  $("#animateButton").click(function () {
    $("#elementToAnimate").animate(
      {
        opacity: 0.25,
        left: "+=50",
        height: "toggle",
      },
      1000
    );
  });
});
/******************** */

$(document).ready(function () {
  $("#fadeOutButton").click(function () {
    $("#elementToFadeOut").fadeOut();
  });

  $("#fadeInButton").click(function () {
    $("#elementToFadeOut").fadeIn();
  });
});

/*****************/
$("#myButton").click(function () {
  alert("Düğmeye tıklandı!");
});

/***********/
$(document).ready(function () {
  // Sayfa yüklendiğinde çalışacak jQuery kodları
  $("#myDiv").append("<p>Yeni bir paragraf</p>");
});

/***************/

var date = new Date();
var hour = date.getHours();
if (hour < 12) {
  document.body.style.backgroundColor = "rgb(235, 186, 167)";
} else if (hour < 18) {
  document.body.style.backgroundColor = "#e5bea1";
} else {
  document.body.style.backgroundColor = "rgb(122, 81, 65)";
}
/************ */

/**********/

// galeri

var resimler = [
  "Images/galeri1.jpg",
  "Images/galeri2.jpg",
  "Images/galeri3.jpg",
];
var galeri = document.getElementById("resimGalerisi");
var resim = document.getElementById("resim");
var nextButton = document.getElementById("nextButton");
var index = 0;

function gosterResim() {
  resim.src = resimler[index];
}

function sonrakiResim() {
  index++;
  if (index >= resimler.length) {
    index = 0; // Son resme geldiysek başa dön
  }
  gosterResim();
}

nextButton.addEventListener("click", sonrakiResim);

// İlk resmi göster
gosterResim();

/**************/
function resimDegistir() {
  var resimElementi = document.getElementById("resim2");
  if (resimElementi.src.match("Images/hakkımda2.jpg")) {
    resimElementi.src = "Images/hakkmda.jpg";
  } else {
    resimElementi.src = "Images/hakkımda.jpg";
  }
}

/**********************************/
function hoşGeldiniz() {
  var ad = prompt("Adınız nedir?");
  alert("Tabiki lütfen kendinize uygun olan seçeneği ekleyin, " + ad + "!");
}

/****************************/

var oy = 0;

function oyVer(deger) {
  oy = deger;
  document.getElementById("oy").innerHTML = "Oyunuz: " + oy + " yıldız.";
}

/**************************/

function anketiGonder() {
  var isim = document.getElementById("isim").value;
  var memnuniyet = document.getElementById("memnuniyet").value;
  console.log("İsim: " + isim + ", Memnuniyet Derecesi: " + memnuniyet);
  // Anketi sunucuya gönderme işlemi burada gerçekleştirilebilir
}

/************************************/

function zamanGoster() {
  var simdikiZaman = new Date();
  var saat = simdikiZaman.getHours();
  var dakika = simdikiZaman.getMinutes();
  var saniye = simdikiZaman.getSeconds();
  var zamanMetni =
    saat +
    ":" +
    (dakika < 10 ? "0" + dakika : dakika) +
    ":" +
    (saniye < 10 ? "0" + saniye : saniye);
  document.getElementById("zaman").innerHTML = zamanMetni;
}

/*********************************/

/************************************/

setInterval(zamanGoster, 1000); // Her saniye güncelle
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

/*************************************************/
// Kullanıcıya günaydın, iyi günler veya iyi akşamlar mesajı gösterme
var saat = new Date().getHours();
var mesaj;
if (saat < 12) {
  mesaj = "Günaydın!";
} else if (saat < 18) {
  mesaj = "İyi günler!";
} else {
  mesaj = "İyi akşamlar!";
}
document.getElementById("mesajjj").textContent = mesaj;

/******************************/

function goToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
document.getElementById("goToTopBtn").addEventListener("click", goToTop);
/***********/

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      menuBtn.classList.remove("active");
    }
  });
});
cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Sepete ekle butonları
  var addToCartButtons = document.querySelectorAll(".btn");

  // Bildirim kutusu
  var notification = document.createElement("div");
  notification.classList.add("notification");

  // Bildirim metni
  var notificationText = document.createElement("p");
  notificationText.textContent = "Ürün sepete eklendi.";
  notification.appendChild(notificationText);

  // Bildirimi sayfaya ekleme fonksiyonu
  function showNotification() {
    document.body.appendChild(notification);
    setTimeout(function () {
      notification.remove();
    }, 2000);
  }

  // Sepete ekle butonlarına tıklama olayı ekleme
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showNotification();
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Sepete ekle butonu
  var addToCartButton = document.querySelector(".btn");

  // Sepete ekle butonuna tıklama olayı ekleme
  addToCartButton.addEventListener("click", function (event) {
    event.preventDefault(); // Butonun varsayılan davranışını engelle

    // Uyarı mesajı gösterme
    alert("Henüz alışveriş yapılamıyor.");
  });
});

/********************************/

window.onload = function () {
  setInterval(anaFonksiyon, 5000); // Her 5 saniyede bir mesaj değiştir
};

function anaFonksiyon() {
  var yeniMesaj = animeKarakteriSozu(); // Rastgele bir anime karakteri sözü al
  document.getElementById("mesaj").innerHTML = yeniMesaj; // Yeni mesajı güncelle
}

function animeKarakteriSozu() {
  // Rastgele bir anime karakteri sözü döndür
  var sozler = [
    "Belki dünü yasamıyoruz, ama yarını tasarlayabiliriz.",
    "Benim için güç, korumak istediklerim uğruna savaşmak demek.",
    "Kendine güven, hiçbir şey imkansız değildir.",
    "Zayıflığını kabullenmek, güçlü olmak için bir adımdır.",
    "Geçmişi düşünerek yaşayıp geleceği düşleyenler, bugünü yaşayamazlar.",
  ];
  var randomIndex = Math.floor(Math.random() * sozler.length);
  return sozler[randomIndex];
}

/*****************/
function toggleVisibility() {
  var content = document.getElementById("content");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

/****************** */

function increaseFontSize() {
  var textElement = document.getElementById("yazı");
  var currentSize = window.getComputedStyle(textElement).fontSize;
  var newSize = parseInt(currentSize) + 8;
  textElement.style.fontSize = newSize + "px";
}

function decreaseFontSize() {
  var textElement = document.getElementById("yazı");
  var currentSize = window.getComputedStyle(textElement).fontSize;
  var newSize = parseInt(currentSize) - 8;
  textElement.style.fontSize = newSize + "px";
}

/********** */

/************ */
