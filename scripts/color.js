  var c = ["orange", "#E3D985", "#BCD8C1"];
  var winterc = ["#ffffff","#cdced3","#c9c8bd","#bf874c","#669297","#1b3338","#151a1d"];
  var springc = ["#147f73","#60b520","#c7f473","#edff7a","#ffbb32","#d32c13"];
  var fallc = ["#aba7a5","#f0c866","#c66632","#cc5500","#82291a","#3b3923","#111520"];
  var summerc = ["#fde74c","#ffbb32",  "#fa7921", "#f93416","#ff1654","#f3ffbd","#b2dbbf","#247ba0"];
  var colors = [c,springc,summerc,fallc,winterc];
  var selectedIndex = 2;
  function clearDisplayColors(colorArray){
      console.log("clear")
      for (var i = 1;i <= colorArray.length;i++){
        $("#color" + i).css("background-color","RGB(0,0,0,0)");
      }
    $("#rangeDisplay").css("opacity","0");
    }
$(document).on("ready",function(){
  //Colors to be selected
  
  function randomColor(){
    $(".page").css("background-color",colors[selectedIndex][Math.round(Math.random(0,1) * colors[selectedIndex].length)]);
  }
  
  //Delete old div and append new one with new colors
  function displayRange(colorArray){
    var myNode = document.getElementById("rangeDisplay");
    while (myNode.firstChild) {
      console.log("remove")
        myNode.removeChild(myNode.firstChild);
    }
    for (var i = 1; i <= colorArray.length; i++){
      $("#rangeDisplay").append("<div class=\"dispC\" id=\"color" + i + "\"></div>")
      $("#color" + i).css("left",((i-1) / colorArray.length) * 100 +"%");
      $("#color" + i).css("width",100/colorArray.length + "%");
    }
          
    for (var i = 1; i <= colorArray.length; i++){
      $("#color" + i).css("background-color",colorArray[i-1]);
      $("#rangeDisplay").css("opacity","1");
    }
  }
  
  //Hover over color pallete choices and temporarily display the range of colors
  $("#spring").hover(function(){
    displayRange(springc);
  }, function(){clearDisplayColors(springc)});
  $("#winter").hover(function(){
    displayRange(winterc)
  }, function(){clearDisplayColors(winterc)});
  $("#fall").hover(function(){
    displayRange(fallc)
  }, function(){clearDisplayColors(fallc)});
  $("#summer").hover(function(){
    displayRange(summerc)
  }, function(){clearDisplayColors(summerc)});
  
  //toggle full screen from anywhere
  $(".page").on("click",function(){
    toggleFullScreen();
  });
  
  
  //Select color pallete
  $("#spring").click(function(){
    selectedIndex = 1;
    randomColor();
  });
  $("#summer").click(function(){
    selectedIndex = 2;
    randomColor();
  });
  $("#fall").click(function(){
    selectedIndex = 3;
    randomColor();
  });
  $("#winter").click(function(){
    selectedIndex = 4;
    randomColor();
  });
  
  
  
  //Rotate background colors
  window.setInterval(function(){
    randomColor();
  },3000)
  
  $(".pfooter").hover(
    function(){
      $(".footer").css("transform","translate(0,0px)");
      $("#options").css("border","2px dashed RGBA(50,50,50,1)");
      $("#options").css("color","RGBA(50,50,50,1)");
    },
    function(){
      $(".footer").css("transform","translate(0,30px)");
      $("#options").css("border","2px dashed RGBA(50,50,50,0)");
      $("#options").css("color","RGBA(50,50,50,0)");
    }
  );
  var tst = false;

  $("#options").on("click",function(){
    if (tst == false){
      tst = true;
      $("#optionsPage h4").css("display","inline-block");
      $("#optionsPage h4").css("border","2px dashed RGBA(255,255,255,1)");
      $("#optionsPage h4").css("color","RGBA(255,255,255,1)");
      $("#optionsPage").css("z-index","10");
      window.setTimeout(function(){
        
      }, 1000);
    }
    else {
      tst = false;
      
      $("#optionsPage h4").css("border","2px dashed RGBA(255,255,255,0)");
      $("#optionsPage h4").css("color","RGBA(255,255,255,0)");

      window.setTimeout(function(){
        $("#optionsPage").css("z-index","0");
      }, 1000);
    }
  })
});
function keyEvent(){
  $(".page").css("background-color",colors[selectedIndex][Math.round(Math.random(0,1) * colors[selectedIndex].length)]);
}



function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}