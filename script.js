$('.nav-scroll').on('click', function(e) {
    e.preventDefault()
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000)
})

// this dropdown found here http://jsfiddle.net/davidThomas/YfjzP/
$('#dropdown').hover(
    function() {
        $(this).find('ul').slideDown()
    },
    function() {
        $(this).find('ul').slideUp()
    }
)
