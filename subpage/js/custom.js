// hamburger
$(".js_hamburger_open").click(function () {
  $(".hamburger").animate(
    {
      right: 0,
    },
    300
  );
});
$(".js_hamburger_close").click(function () {
  $(".hamburger").animate({
    right: "-450px",
  });
});
$(".hamburger_toggle").click(function () {
  $(this).toggleClass("hamburger_rotate1");
  $(this).next().slideToggle().parent().siblings().find("ul").slideUp();
  $(".hamburger_toggle").not(this).removeClass("hamburger_rotate1");
});
$(document).ready(function () {
  window.addEventListener("scroll", function () {});
});
// navigation animation
$(window).on("wheel", function (e) {
  if (e.originalEvent.deltaY >= 0) {
    $("nav").css("top", "-115px");
  } else if (e.originalEvent.deltaY <= 0) {
    $("nav").css("top", "0");
  }
});

// 리사이즈
$(window).on("load resize", function () {
  scr = $(window).width();
  if (scr < 768) {
    $(".flex1").off("mouseover").off("mouseleave");
    $(".flex2").off("mouseover").off("mouseleave");
    $(".flex3").off("mouseover").off("mouseleave");
  } else {
    // 섹션 마우스오버
    var videoTime = $(".videobox_vid").find("video");
    // flex1
    $(".flex1").mouseover(function () {
      $(".videobox_vid video").get(0).play();
      $(".flex1").addClass("videobox_flex");
    });
    $(".flex1").mouseleave(function () {
      $(".flex1").removeClass("videobox_flex");
      $(".videobox_vid video").get(0).pause();
      videoTime.get(0).currentTime = 0;
    });
    // flex2
    $(".flex2").mouseover(function () {
      $(this).find("video").get(0).play();
      $(".flex2").addClass("videobox_flex");
    });
    $(".flex2").mouseleave(function () {
      $(".flex2").removeClass("videobox_flex");
      $(this).find("video").get(0).pause();
      videoTime.get(1).currentTime = 0;
    });
    // flex3
    $(".flex3").mouseover(function () {
      $(this).find("video").get(0).play();
      $(".flex3").addClass("videobox_flex");
    });
    $(".flex3").mouseleave(function () {
      $(".flex3").removeClass("videobox_flex");
      $(this).find("video").get(0).pause();
      videoTime.get(2).currentTime = 0;
    });
  }
});
