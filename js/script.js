// Smooth scroll on anchor
$(document).ready(function() {
    let image = document.getElementsByClassName('alt-cover');
    let position = 0;

    const changeImage = () => {
        if (position === 1) {
            image[0].style.display = 'inline';
            image[1].style.display = 'none';
            position --;
        }
        else {
            image[0].style.display = 'none';
            image[1].style.display = 'inline';
            position ++;
        }
    };

    setInterval(changeImage, 3000)
});