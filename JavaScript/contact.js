$(document).ready(function () {
    var targetDate = new Date(2024, 11, 11, 19, 59, 59);
  
    startCountdown(targetDate);
  
    function startCountdown(targetDate) {
      var countdownInterval = setInterval(function () {
        var currentDate = new Date();
  
        var timeRemaining = targetDate - currentDate;
  
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
  
        if (timeRemaining < 0) {
          clearInterval(countdownInterval);
          $("#countdown").html('<span class="expired">Süre Doldu!</span>');
        }
      }, 1000);
    }
  });

  /****************/
  $(document).ready(function () {
    var ratings = [];
  
    $(".star").click(function () {
      var rating = $(this).data("value");
      var name = prompt("Adınızı girin:");
      if (name) {
        ratings.push({ name: name, rating: rating });
        $("#result").text("Puanınız: " + rating);
        updateLastRatings();
      }
    });
  
    function updateLastRatings() {
      $("#lastRatings").empty();
      $("#lastRatings").append("<h2>Son Puanlar</h2>");
      for (var i = 0; i < ratings.length; i++) {
        $("#lastRatings").append(
          "<p>" + ratings[i].name + " - " + ratings[i].rating + "</p>"
        );
      }
    }
  });


  /***************** */

 //Sayaç


  $(document).ready(function(){
    $("#gonderButton").click(function(){
        var metin = $("#girisKutusu").val();
        alert("Girilen metin: " + metin);
    });
});
/******************* */

$(document).ready(function(){
    $("#tersCevirButton").click(function(){
        var metin = $("#girisMetni").val();
        var tersMetin = metin.split("").reverse().join("");
        $("#tersMetinAlani").text(tersMetin);
    });
});

/********************* */

//Slayt

$(document).ready(function () {
    var sliderHeight = $(".containe").height();
    var slideCount = $(".slider img").length;
    var totalHeight = sliderHeight * slideCount;
  
    $(".slider").css("height", totalHeight);
  
    var currentSlide = 0;
  
    function slideDown() {
      currentSlide++;
      if (currentSlide >= slideCount) {
        currentSlide = 0;
      }
      var newPosition = currentSlide * sliderHeight * -1;
      $(".slider").css("transform", "translateY(" + newPosition + "px)");
    }
  
    setInterval(slideDown, 3000);
  });

  /********************** */

  $(document).ready(function(){
    $("button").click(function(){
      $("p").css("color", "red");
    });
  });

  /****************** */
  $(document).ready(function(){
    $(".accordion").click(function(){
      $(this).next().slideToggle();
      $(".panel").not($(this).next()).slideUp();
    });
  });