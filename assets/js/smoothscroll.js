$(document).ready(function() {
    var scrollLink = $('.scroll');

    // smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body, html').animate({ scrollTop: $(this.hash).offset().top
      }, 1000);
    })

// active link switching
    // $(window).scroll(function() {
    //     var scrollBarLocation = $(this).scrollTop();
    //     // console.log(scrollBarLocation);
    //     scrollLink.each(function() {
    //         var sectionOffSet = $(this.hash).offset().top - 20;
    //         if (sectionOffSet <= scrollBarLocation) {
    //           $(this).parent().addClass('active');
    //           $(this).parent().siblings().removeClass('active');
    //         }
    //     })
    // })
})
