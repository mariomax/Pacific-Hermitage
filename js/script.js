/* Javascript */
jQuery(window).scroll(function() {    // this will work when your window scrolled.
  var height = jQuery(window).scrollTop();  //getting the scrolling height of window
  if(height  > 100) {
    jQuery(".main-navigation").css({"position": "fixed"});
  } else{
    jQuery(".main-navigation").css({"position": "relative"});
  }
});