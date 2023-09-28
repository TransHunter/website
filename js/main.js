$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 500) {
        $('.header').addClass('fixed');
        $('.backtotop').addClass('show');
        $('.logo-image').attr('src', 'img/logo.png');
    } else {
        $('.header').removeClass('fixed');
        $('.backtotop').removeClass('show');
        $('.logo-image').attr('src', 'img/logo-branco-2.png');
    }
});


function backtotop(){
    window.scrollTo(0,0);
}

function openModal(){
    $('.orcamento-modal').addClass('active');
    $('.modal-control').addClass('active');
}
function closeModal(){
    $('.orcamento-modal').removeClass('active');
    $('.modal-control').removeClass('active');
}

/* MObile */

let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav'),
    html = document.querySelector('.modal-control');



burger.addEventListener('click', function () {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    html.classList.toggle('active');
    
});

function offMenu(){
    burger.classList.remove('is-open');
    nav.classList.remove('is-open');
    html.classList.remove('active');

}