$('.nav-scroll').on('click', function(e) {
    e.preventDefault()
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000)
})

$('#dropdown').hover(
    function() {
        $(this).find('ul').slideDown()
    },
    function() {
        $(this).find('ul').slideUp()
    }
)
