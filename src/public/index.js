$(window).scroll(function () {
  $('.intro-section').css('opacity', 1 - $(window).scrollTop() / 650)
})
