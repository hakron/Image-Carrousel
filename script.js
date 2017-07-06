(function() {
    var moveTime; //setTimeout
    var slideIndex = 0; // keep track of current slide
    var dogs = document.getElementsByClassName('img');
    var dots = document.getElementsByClassName('dot');
    moveTime = setTimeout(slide, 5000);

    function slide(newIndex) {
        //getting the imgs
        var firstDog = dogs[slideIndex];
        var nextDog;

        if (typeof newIndex === 'number') {
            nextDog = dogs[newIndex];
        } else if (slideIndex + 1 >= dogs.length) {
            nextDog = dogs[0];
        } else {
            nextDog = dogs[slideIndex + 1];
        }
        //removes dogs from screen
        firstDog.classList.add('exit-left');
        firstDog.classList.remove('on-screen');
        // dots[slideIndex].classList.remove('dot-active');
        // dots[slideIndex].classList.add('dot-inactive');

        //moves the dogs to the screen
        nextDog.classList.add('on-screen');
        nextDog.classList.remove('back-right');
        // dots[slideIndex].classList.add('dot-inactive');
        // dots[slideIndex].classList.remove('dot-active');

        slideIndex += 1;
        if (typeof newIndex === 'number') {
            slideIndex = newIndex;
        } else if (slideIndex === dogs.length) {
            slideIndex = 0;
        }
    }
    document.addEventListener('transitionend', function(e) {
        if (e.target.classList.contains('exit-left')) {
            e.target.classList.add('back-right');
            e.target.classList.remove('exit-left');
            moveTime = setTimeout(slide, 5000);
        }
    });
    document.addEventListener('click', function(e) {

        if (e.target.classList.contains('dot')) {
            for (var i = 0; i < dots.length; i++) {
                if (e.target === dots[i]) {
                    // dots[slideIndex].classList.remove('dot-active');
                    // dots[slideIndex].classList.add('dot');
                    clearTimeout(moveTime);
                    slide(i);
                }
            }
        }
    });
})();
