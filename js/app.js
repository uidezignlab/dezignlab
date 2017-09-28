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
    $('.side-menu-toggle').click(function () {
        $('.side-menu').toggleClass('tgg')
    });
    $(window).resize(function () {
        if((window.innerWidth > 1080) && $('.side-menu').hasClass('tgg')){
            $('.side-menu').removeClass('tgg')
        }
    });
})

