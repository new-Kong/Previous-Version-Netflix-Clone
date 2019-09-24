// jshint esversion:6

$("#tab-2").click(function(){
  $("#tab-1").removeClass("tab-border");
  $("#tab-3").removeClass("tab-border");
  $("#tab-2").addClass("tab-border");
  $(".tab-content-item-2").addClass("tab-content-item-show-2");
  $(".tab-content-item-1").removeClass("show");
  $(".tab-content-item-3").removeClass("tab-content-item-show-3");
});

$("#tab-1").click(function(){
  $("#tab-2").removeClass("tab-border");
  $("#tab-3").removeClass("tab-border");
  $("#tab-1").addClass("tab-border");
  $(".tab-content-item-1").addClass("show");
  $(".tab-content-item-2").removeClass("tab-content-item-show-2");
  $(".tab-content-item-3").removeClass("tab-content-item-show-3");
});

$("#tab-3").click(function(){
  $("#tab-1").removeClass("tab-border");
  $("#tab-2").removeClass("tab-border");
  $("#tab-3").addClass("tab-border");
  $(".tab-content-item-3").addClass("tab-content-item-show-3");
  $(".tab-content-item-1").removeClass("show");
  $(".tab-content-item-2").removeClass("tab-content-item-show-2");
});
