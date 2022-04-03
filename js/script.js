document.addEventListener('DOMContentLoaded', function(){
      
      
    //Banner slider
    const bannerArray = document.querySelectorAll('#gradient > .container');
    const bgImage = document.getElementById('slider');
    const gradient = document.getElementById('gradient');
    const imgages = ['url("img/lady_wolf_ban.jpg")', 'url("img/generation_heros_ban.jpg")', 'url("img/lost_angels_ban.jpg")'];
    bgImage.style.backgroundImage = imgages[0];
    bgImage.style.backgroundPosition = 'right';
    let slidePosition = 0;
    bannerArray[1].style.display = bannerArray[2].style.display = 'none';
    bannerArray[1].style.opacity = bannerArray[2].style.opacity = 0;

    const changeSlide = () => {
        if (slidePosition === 2) {
            bgImage.style.backgroundImage = imgages[0];
            bgImage.style.backgroundPosition = 'right';
            bannerArray[2].style.opacity = 0;
            gradient.classList.add('dark-gradient');
            gradient.classList.remove('white-gradient');
            setTimeout(() => {
                bannerArray[2].style.display = 'none';
                bannerArray[0].style.display = 'flex';
            }, 500);
            setTimeout(() => {bannerArray[0].style.opacity = 1;}, 600);
            slidePosition = 0;
        } else if (slidePosition === 0) {
            bgImage.style.backgroundImage = imgages[1];
            bgImage.style.backgroundPosition = 'left';
            bannerArray[0].style.opacity = 0;
            bannerArray[1].style.display = 'flex';
            setTimeout(() => {
                bannerArray[0].style.display = 'none';
                bannerArray[1].style.opacity = 1;
            }, 500);
            slidePosition = 1;
        } else { // if (slidePosition === 1)
            bgImage.style.backgroundImage = imgages[2];
            bgImage.style.backgroundPosition = 'center';
            bannerArray[1].style.opacity = 0;
            bannerArray[2].style.display = 'flex';
            gradient.classList.remove('dark-gradient');
            gradient.classList.add('white-gradient');
            setTimeout(() => {
                bannerArray[1].style.display = 'none';
                bannerArray[2].style.opacity = 1;
            }, 500);
            slidePosition = 2;
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