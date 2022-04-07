// select video element
var vid;
//var time = $('#time');
//var scroll = $('#scroll');
var windowheight;
//var scrollpos = window.pageYOffset / 400;
//var targetscrollpos = scrollpos;//OLD
//var accel = 0;

function init(){
  windowheight = $(window).height() - 20;
  vid = document.getElementById('v0');
  
  // pause video on load
  vid.pause();
	setInterval("processFrame()", 33);//33
}

//set pixel height base on video lenght
//var setHeight = document.getElementById("set-height");
//vid.addEventListener('loadedmetadata', function() {
//  setHeight.style.height = Math.floor(vid.duration) * 400 + "px";
//});

// ---- Values you can tweak: ----
//var accelamount = 0.1; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.//0.1

function jumpScroll() {
  window.scrollTo(0, 0);
  pageScroll(); //for REPLAY
  //window.scroll(0,-10000); // horizontal and vertical scroll targets
  //scrolldelay = setTimeout('pageScroll()', 20); // scrolls every 100 milliseconds//20
}

function pageScroll() {
    window.scrollBy(0, 50); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()', 20); // scrolls every 100 milliseconds
    //   window.scrollBy(0,1);
    //   scrolldelay = setTimeout(pageScroll(),10);
  }
  /*
  function scrolled(e) {
    if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
      scrolledToBottom(e);
    }
    clearTimeout(scrolldelay);
  }
  */
window.onscroll = function() {
  //Consider setting vid.currentTime inside of the window.onscroll event instead the setInterval.
  vid.currentTime = window.pageYOffset / 400;
  //Set the video position that we want to end up at:

  //targetscrollpos = window.pageYOffset / 400;//OLD

  //move the red dot to a position across the side of the screen
  //that indicates how far we've scrolled.
  //scroll.css('top', 10 + (window.pageYOffset / 13500 * windowheight));
};
/*
setInterval(function() {

  //Accelerate towards the target:
  scrollpos += (targetscrollpos - scrollpos) * accelamount;

  //move the blue dot to a position across the side of the screen
  //that indicates where the current video scroll pos is.  
  time.css('top', 10 + (scrollpos / 13500 * 400 * windowheight));

  //update video playback
  vid.currentTime = scrollpos;
  vid.pause();

}, 40);
*/

/*OVERLAY ROTATION*/
const overlays = document.querySelectorAll(".overlay");
overlays.forEach((overlay) => {
  const height = overlay.clientHeight;
  const width = overlay.clientWidth;

  const mouseMoveHandler = (evt) => {
    evt.preventDefault();

    requestAnimationFrame(() => {
      const xRotation = -30 * ((evt.layerY - height / 2) / height);
      const yRotation = 20 * ((evt.layerX - width / 2) / width);

      overlay.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
  };

  overlay.addEventListener("mousemove", mouseMoveHandler);

  overlay.addEventListener("mouseenter", (evt) => {
    evt.preventDefault();
    overlay.addEventListener("mousemove", mouseMoveHandler);
  });

  overlay.addEventListener("mouseout", (evt) => {
    evt.preventDefault();
    overlay.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
    overlay.removeEventListener("mousemove", mouseMoveHandler);
  });
  
  overlay.addEventListener("click", (evt) => {
    evt.preventDefault();
    overlay.style.animation = "spin 1s ease-in-out";
    setTimeout(() => {      
      overlay.style.animation = '';
    }, 1000);
  });
});


/*POPUP ELEMENT*/

function openNewExperience() {
  var x = document.getElementById('newExp');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
  } else {
    x.style.display = 'flex';
  }
  var iframe = document.getElementById('newExp');
  iframe.src = './nouroexp.html';
}


/***CLOCK***/
setInterval(function() {
  //Accelerate towards the target:
  //scrollpos += (targetscrollpos - scrollpos) * accelamount;

  //move the blue dot to a position across the side of the screen
  //that indicates where the current video scroll pos is.  
  //time.css('top', 10 + (scrollpos / 13500 * 400 * windowheight));

  function r(el, deg) {
    el.setAttribute('transform', 'rotate(' + deg + ' 50 50)')
  }
  var d = new Date()
  r(sec, 6 * d.getSeconds())
  r(min, 6 * d.getMinutes())
  r(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2)
}, 1000);
