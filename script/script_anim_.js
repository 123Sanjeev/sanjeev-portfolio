//// Animation Scripts


window.onscroll = () => {

    if (window.pageYOffset >= 300 && window.pageYOffset <= 310) {
        window.scrollTo({
            top: 700,
            left: 0,
            behavior: 'smooth'
        });
    } else if (window.pageYOffset >= 600 && window.pageYOffset <= 610) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
