
  window.onload = function() {
    var sample = document.getElementById("myAudio");
    sample.play();
    sample.volume=0.5;
  };

  function closeExperience() {
    var x = parent.document.getElementById(window.name);;
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    var expVideo = document.getElementById("exp-video-1");
    expVideo.load();
    var expVideo = document.getElementById("exp-video-2");
    expVideo.load();
    var expVideo = document.getElementById("exp-video-3");
    expVideo.load();
    var sample = document.getElementById("myAudio");
    sample.pause();
  }

  /*TOUCHPOINT BUTTONS*/
  
  function showTouchpoints() {
    var x = document.getElementById("first-dreamscape");
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
    var x = document.getElementById("second-meditate");
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
    var x = document.getElementById("third-explore");
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
    var x = document.getElementById("fourth-side");
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
  }
  
  $('.infoButton').click(function() {
    var clicks = $(this).data('clicks');
    var x = document.getElementById("infoButton");
  
    if (clicks == 1){
      x.style.borderBottom = "transparent";
    } else{
      x.style.borderBottom = "2px solid white";
    }
    $(this).data("clicks", !clicks);
  });
  
  

  /* AUDIO FUNCTION */
  
  var myAudio = document.getElementById("myAudio");
  
  function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  };
  
  $('#audioStatus').click(function() {
    var clicks = $(this).data('clicks');
    var x = document.getElementById("audioButton");
  
    if (clicks == 1){
      x.style.borderBottom = "2px solid #e3e3e3";
    } else{
      x.style.borderBottom = "transparent";
    }
    $(this).data("clicks", !clicks);
  });
  
  
  
  /* NEW FRAME */
  
  $(document).ready(function(){
    $(".icon-wrapper").click(function(){
        $("#menu").removeClass("animated-up");
    });
  
    $(".logo").click(function(){
      $("#menu").addClass("animated-up");
    });
  });
  
  function mainMenu() {
    var x = document.getElementById('modal-dream');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    }
    var y = document.getElementById('modal-meditation');
    if (y.style.display === 'block') {
        y.style.display = 'none';
    }
    var z = document.getElementById('modal-explore');
    if (z.style.display === 'block') {
        z.style.display = 'none';
    }
    var expVideo = document.getElementById("exp-video-1");
    expVideo.load();
    var expVideo = document.getElementById("exp-video-2");
    expVideo.load();
    var expVideo = document.getElementById("exp-video-3");
    expVideo.load();
    var sample = document.getElementById("myAudio");
    sample.volume=0.5;
  
  }
  
  function openDreamscape() {
    var x = document.getElementById('modal-dream');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
    var sample = document.getElementById("myAudio");
    sample.volume=0;
  }
  
  function openMeditation() {
    var x = document.getElementById('modal-meditation');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
    var sample = document.getElementById("myAudio");
    sample.volume=0;
  }
  
  function openExplore() {
    var x = document.getElementById('modal-explore');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
    var sample = document.getElementById("myAudio");
    sample.volume=0;
  }
  
  
  
  /* VIDEO FUNCTION */
  
  $('.exp-video-1').parent().click(function () {
    if ($(this).children(".exp-video-1").get(0).paused){        
        $(this).children(".exp-video-1").get(0).play();   
        $(this).children(".dreamscape-menu").fadeOut();
      
    }else{
         $(this).children(".exp-video-1").get(0).pause();
        $(this).children(".dreamscape-menu").fadeIn();
      }
  });
  
  $('.exp-video-2').parent().click(function () {
    if ($(this).children(".exp-video-2").get(0).paused){        
        $(this).children(".exp-video-2").get(0).play();   
        $(this).children(".meditation-menu").fadeOut();
      
    }else{
         $(this).children(".exp-video-2").get(0).pause();
        $(this).children(".meditation-menu").fadeIn();
      }
  });
  
  $('.exp-video-3').parent().click(function () {
    if ($(this).children(".exp-video-3").get(0).paused){        
        $(this).children(".exp-video-3").get(0).play();   
        $(this).children(".explore-menu").fadeOut();
      
    }else{
         $(this).children(".exp-video-3").get(0).pause();
        $(this).children(".explore-menu").fadeIn();
      }
  });