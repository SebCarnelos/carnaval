$(document).ready(function() {

    //Banner slider
    // let banner = document.getElementsByClassName('banner');
    // let banPosition = 0;
    // const banSlider = () => {
    //     if (banPosition	 === 1) {
    //         banner[0].style.position = 'absolute';
    //         banner[1].style.visibility = 'hidden';
    //         banPosition --;
    //     }
    //     else {
    //         banner[0].style.position = 'relative';
    //         banner[1].style.visibility = 'visible';
    //         banPosition ++;
    //     }
    // };
    // setInterval(banSlider, 1000)


    // Alternate Covers
    let image = document.getElementsByClassName('alt-cover');
    let imgPosition = 0;
    const changeImage = () => {
        if (imgPosition === 1) {
            image[0].style.display = 'inline';
            image[1].style.display = 'none';
            imgPosition --;
        }
        else {
            image[0].style.display = 'none';
            image[1].style.display = 'inline';
            imgPosition ++;
        }
    };
    setInterval(changeImage, 3000)
});