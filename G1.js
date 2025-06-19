document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.advertisement ul img');
    const prev_btn = document.querySelector('.control_prev');
    const next_btn = document.querySelector('.control_next');

   
    let n = 0;

    function changeSlide() {
        // Hide all images
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
        }
        // Show the current image
        imgs[n].style.display = 'block';
    }

    changeSlide();

    next_btn.addEventListener('click', () => {
        if (n < imgs.length - 1) {
            n = n + 1; // Move to the next image
        } else {
            n = 0; // Loop back to the first image
        }
        changeSlide();
    });
    

    prev_btn.addEventListener('click', () => {
        if (n > 0) {
            n = n - 1; // Move to the previous image
        } else {
            n = imgs.length - 1; // Loop back to the last image
        }
        changeSlide();
    });
    

    
});
