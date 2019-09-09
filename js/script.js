/* Javascript */
jQuery(window).scroll(function() {    // this will work when your window scrolled.
  var height = jQuery(window).scrollTop();  //getting the scrolling height of window
  if(height  > 100) {
    jQuery(".main-navigation").css({
      "position": "fixed",
      "background": "#fff",
      "padding": "10px 0",
      "margin-top": "0",
      "top": "0",
      "z-index": "999"
  });
  } else{
    jQuery(".main-navigation").css({
      "position": "relative",
      "background": "transparent"
    });
  }
});