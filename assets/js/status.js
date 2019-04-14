$(document).ready(function() {
   $(window).scroll(function() {

      var windowHeight = $(window).height();
      var windowScrollTop = $(window).scrollTop();
      var windowScrollBottom = windowHeight + windowScrollTop;
      $('.status').html(windowScrollBottom);

      // var objectOffset = $()

   })

})
