document.addEventListener('DOMContentLoaded', function(){
      
      
    //Banner slider
    const bannerArray = document.querySelectorAll('#dark-gradient > .container');
    const bgImage = document.getElementById('slider');
    const gradient = 'linear-gradient(79.19deg, #00080A 0%, rgba(0, 8, 10, 0) 86.22%), ';
    const imgages = ['url("img/lady_wolf_ban.jpg")', 'url("img/generation_heros_ban.jpg")'];
    bgImage.style.backgroundImage = imgages[0];
    bgImage.style.backgroundPosition = 'right';
    let slidePosition = 0;
    bannerArray[1].style.display = 'none';
    bannerArray[1].style.opacity = 0;

    const changeSlide = () => {
        if (slidePosition === 1) {
            // bgImage.style.background = gradient + imgages[0];
            bgImage.style.backgroundImage = imgages[0];
            bgImage.style.backgroundPosition = 'right';
            bannerArray[1].style.opacity = 0;
            setTimeout(() => {
                bannerArray[1].style.display = 'none';
                bannerArray[0].style.display = 'flex';
            }, 500);
            setTimeout(() => {bannerArray[0].style.opacity = 1;}, 600);
            slidePosition --;
        } else {
            // bgImage.style.background = gradient + imgages[1];
            bgImage.style.backgroundImage = imgages[1];
            bgImage.style.backgroundPosition = 'left';
            bannerArray[0].style.opacity = 0;
            bannerArray[1].style.display = 'flex';
            setTimeout(() => {
                bannerArray[0].style.display = 'none';
                bannerArray[1].style.opacity = 1;
            }, 500);
            slidePosition ++;
        }
     };
    setInterval(changeSlide, 6000);

    // Alternate Covers
    const image = document.getElementsByClassName('alt-cover');
    let imgPosition = 0;
    const changeImage = () => {
        if (imgPosition === 1) {
            image[0].style.display = 'inline';
            image[1].style.display = 'none';
            imgPosition --;
        } else {
            image[0].style.display = 'none';
            image[1].style.display = 'inline';
            imgPosition ++;
        }
    };
    setInterval(changeImage, 3000);
});