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
//스크롤 효과
$(window).scroll(function () {
  var scr = $(window).scrollTop();
  // console.log(scr);
  if (scr > 900) {
    $(".slogan").css("position", "fixed");
    $(".sec_1").css("position", "absolute");
    $(".text_scale").css("transform", "scale(1.2)");
  } else {
    $(".slogan").css("position", "relative");
    $(".text_scale").css("transform", "scale(1)");
  }
  if (scr > 1000) {
    $(".text_scale").css("transform", "scale(2)");
  }
  if (scr > 1100) {
    $(".text_scale").css("transform", "scale(8)");
  }
  if (scr > 1150) {
    $(".text_scale").css("transform", "scale(10)");
  }
  if (scr > 1200) {
    $(".text_scale").css("transform", "scale(12)");
    $(".text_scale").css("opacity", "1");
  }
  if (scr > 1250) {
    $(".text_scale").css("transform", "scale(14)");
  }
  if (scr > 1300) {
    $(".text_scale").css("transform", "scale(16)");
    $(".text_scale").css("opacity", "0.5");
    $(".sec_2").css("opacity", "0");
  }
  if (scr > 1300) {
    $(".text_scale").css("transform", "scale(18)");
  }
  if (scr > 1400) {
    $(".text_scale").css("transform", "scale(20)");
    $(".text_scale").css("opacity", "0.3");
    $(".text_scale").css("display", "block");
    $(".sec_2").css("opacity", "0.3");
  }
  if (scr > 1500) {
    $(".text_scale").css("transform", "scale(20)");
    $(".text_scale").css("opacity", "0");
    $(".text_scale").css("display", "none");
    $(".sec_2").css("opacity", "0.6");
    $(".sec_2_imgbox img").css("opacity", "0");
    $(".sec_2_imgbox img:nth-child(1)").css("opacity", "0.5");
  }
  if (scr > 1600) {
    $(".sec_2").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(1)").css("opacity", "0.7");
  }
  if (scr > 1700) {
    $(".sec_2_imgbox img:nth-child(1)").css("opacity", "1");
  }
  if (scr > 1800) {
    $(".sec_2_imgbox img:nth-child(2)").css("opacity", "0.5");
    $(".sec_2_imgbox img:nth-child(3)").css("opacity", "0.5");
  }
  if (scr > 1900) {
    $(".sec_2_imgbox img:nth-child(2)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(3)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(4)").css("opacity", "0.5");
    $(".sec_2_imgbox img:nth-child(5)").css("opacity", "0.5");
  }
  if (scr > 2000) {
    $(".sec_2_imgbox img:nth-child(4)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(5)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(6)").css("opacity", "0.5");
    $(".sec_2_imgbox img:nth-child(7)").css("opacity", "0.5");
    $(".sec_2_textbox").css("opacity", "0");
  }
  if (scr > 2100) {
    $(".sec_2_imgbox img:nth-child(6)").css("opacity", "0.8");
    $(".sec_2_imgbox img:nth-child(7)").css("opacity", "0.8");
    $(".sec_2_imgbox img:nth-child(8)").css("opacity", "0.5");
    $(".sec_2_imgbox img:nth-child(9)").css("opacity", "0.5");
    $(".sec_2_textbox").css("opacity", "0.5");
  }
  if (scr > 2200) {
    $(".sec_2_imgbox img:nth-child(6)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(7)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(8)").css("opacity", "0.8");
    $(".sec_2_imgbox img:nth-child(9)").css("opacity", "0.8");
    $(".sec_2_textbox").css("opacity", "0.8");
  }
  if (scr > 2300) {
    $(".sec_2_imgbox img:nth-child(8)").css("opacity", "1");
    $(".sec_2_imgbox img:nth-child(9)").css("opacity", "1");
    $(".sec_2_textbox").css("opacity", "1");
  }
  if (scr > 2700) {
    $(".sec_2_imgbox img").css("opacity", "0.6");
  }
  if (scr > 2800) {
    $(".slogan")
      .css("position", "relative")
      .css("transform", "translate(0px, 1800px)");
  } else {
    $(".slogan").css("transform", "translate(0)");
  }
  if (scr > 3400) {
    $(".sec_3_bg").css("width", "85%");
  }
  if (scr > 3430) {
    $(".sec_3_bg").css("width", "86.5%");
  }
  if (scr > 3450) {
    $(".sec_3_bg").css("width", "88%");
  }
  if (scr > 3470) {
    $(".sec_3_bg").css("width", "90%");
  }
  if (scr > 3500) {
    $(".sec_3_bg").css("width", "93%");
  }
  if (scr > 3550) {
    $(".sec_3_bg").css("width", "95%");
  }
  if (scr > 3600) {
    $(".sec_3_bg").css("width", "96.5%");
  }
  if (scr > 3650) {
    $(".sec_3_bg").css("width", "98%");
  }
  if (scr > 3700) {
    $(".sec_3_bg").css("width", "100%");
  }
});
