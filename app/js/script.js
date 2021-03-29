const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){ //close Hamburger Menu
        header.classList.remove('open');
    }

    else{//Open Hamburger Menu
        header.classList.add('open');
    }
});