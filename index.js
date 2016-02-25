
$("#btn1").click(function() {
    changeBackgroundColor("purple");
});

$("#btn2").click(function() {
     changeBackgroundColor("red");
});

$("#btn3").click(function() {
 changeBackgroundColor("yellow");
});

$("#btn4").click(function() {
  changeBackgroundColor("green");
});

function changeBackgroundColor(color){
 $("#fullscreen").css({backgroundImage: "url('')"});  
  $("#fullscreen").css({backgroundColor: color});     
}

$("#btn_theme_betcheg").click(function() {
changeBackgroundColor("black");
loadThemeBetcheg();
});

function loadThemeBetcheg() {
    $("#fullscreen").html(getThemeBetcheg());
    $("#info_theme").html("");
    $("#info_theme").html(getFormBetcheg()); // Send existing form as arg ?
}

