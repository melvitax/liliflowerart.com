"use strict";
jQuery(function() { 
  
})



/*************************

**************************/


// Fade animation on scroll
function fadeOnScroll() {
  console.log("fadeOnScroll()")
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
  const obsvItem = document.querySelectorAll('.fadeup');
  //IntersectionObserver.prototype.POLL_INTERVAL = 400
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.classList.add('in-view')
      } 
    })
    return entries
  }, observerOptions)
  obsvItem.forEach(item => { observer.observe(item); });
}

// Modal Video Window
function enableVideoModal(){
  $("body").find('[data-bs-toggle="modal"]').on( "click", function() {
    var theModal = $(this).data( "bs-target" );
    var videoSRC = $(this).attr( "data-theVideo" );
    $(theModal+' iframe').attr('src', videoSRC);
    $(theModal).on('hidden.bs.modal', function () {
        $(theModal+' iframe').attr('src', $(theModal+' iframe').attr("src"));
    }); 
  });
}

// Set Cookie
function setCookie(c_name, value, exdays) {
  'use strict';
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

// Get Cookie
function getCookie(c_name) {
  'use strict';
  var i, x, y, ARRcookies = document.cookie.split(";");
  for (let i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
          return unescape(y);
      }
  }
  return undefined
}
