document.addEventListener('DOMContentLoaded',function() {

    var prev = document.querySelector('.left');
    var next = document.querySelector('.right');
    var list = document.querySelectorAll('.slid-elem');
    var counter = 0;


    next.addEventListener('click', function (event) {
        list[counter].classList.remove('visible');
        counter++;
        console.log('fff');
        if (counter === list.length) {
            counter = 0
        }

        list[counter].classList.add('visible');
    });

    prev.addEventListener('click', function (event) {
        list[counter].classList.remove('visible');
        counter--;

        if (counter < 0) {
            counter = list.length - 1
        }

        list[counter].classList.add('visible');
    });
})