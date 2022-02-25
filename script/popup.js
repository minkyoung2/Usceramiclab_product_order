$(function(){
  $(".wrap").click(function(){
    $(".none1").show();
    $(".none2, .none3").hide();
  });
  $(".wrap2").click(function(){
    $(".none2").show();
    $(".none, .none3").hide();
  });
  $(".wrap3").click(function(){
    $(".none3").show();
    $(".none, .none2").hide();
  });
});