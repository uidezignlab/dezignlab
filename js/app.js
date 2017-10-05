/**
 * Created by Jose Kim on 9/27/2017.
 */

// if('serviceWorker' in navigator){
//     window.addEventListener('load', function () {
//         navigator.serviceWorker.register('js/sw.js').then(function(registration){
//             console.log('Registerred')
//         }, function (err) {
//             console.log('Failde due to', err)
//         })
//     })
// }

$(document).ready(function(){
    $('select').niceSelect();
    $('.side-menu-toggle').click(function () {
        $('.side-menu').toggleClass('tgg')
    });
    $(window).resize(function () {
        if((window.innerWidth > 1080) && $('.side-menu').hasClass('tgg')){
            $('.side-menu').removeClass('tgg')
        }
    });
    window.addEventListener('scroll', function(){
        if(window.scrollY > 70){
            $('.notification-strip').addClass('remove');
        }else{
            $('.notification-strip').removeClass('remove');
        }
    });

    $('.open').click(function (e) {
        e.preventDefault();
        let overlay = $(this).data('open');
        document.getElementById(overlay).classList.add('overlay-h-s');
        setTimeout(function () {
            $('.ui-spinner').remove();
            $('.modal-wrapper').append('<div style="width: 500px;height: 300px;background: mediumvioletred;"></div>')
        }, 4000)
    });

    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // };
    $(window).click(function (e) {
        if($(e.target).is($('.overlay')) ){
            $('.overlay').removeClass('overlay-h-s');
            $('.modal-wrapper').html('<div class="ui-spinner">\n' +
                '            <div class="ui-spin"><div class="cheater"></div></div>\n' +
                '            <img src="img/launcher-icon-trans.png" alt="">\n' +
                '        </div>');
        }
    })

});

