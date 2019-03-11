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

$('.support-button').on('click', function() {
    
    window.bboxInit = function () {
        bbox.showForm('bff30535-9ed6-42d9-94cc-1741c334b5c6')
    }
    (function () {
        var e = document.createElement('script'); e.async = true
        e.src = 'https://bbox.blackbaudhosting.com/webforms/bbox-min.js'
        document.getElementsByTagName('head')[0].appendChild(e)
    } ())
})

// Test
// window.bboxInit = function () {
//     bbox.showForm('bff30535-9ed6-42d9-94cc-1741c334b5c6');
// };
// (function () {
//     var e = document.createElement('script'); e.async = true;
//     e.src = 'https://bbox.blackbaudhosting.com/webforms/bbox-min.js';
//     document.getElementsByTagName('head')[0].appendChild(e);
// } ());
