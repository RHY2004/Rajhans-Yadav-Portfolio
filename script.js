document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Duplicate slides to create an infinite loop effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;
        track.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    }, 2000);
});

document.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Duplicate slides to create an infinite loop effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;
        track.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    }, 2000);
});

document.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
});