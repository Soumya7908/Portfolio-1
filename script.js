            // Toggle icon navbar
  $(document).ready(function(){
        $('#menu-icon').click(function(){
            $('.navbar').toggleClass('active')
        });
    });


// Scroll section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


        // Scroll reveal
        ScrollReveal({ 
            reset: true,
            distance: '120px',
            duration: 2000,
            delay: 200
        });
        ScrollReveal().reveal(' .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-image, #services2, .portfolio-box, .contact-form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img, .about-content h3, #services1', { origin: 'left' });
        ScrollReveal().reveal('.home-content p,.home-content h3, .about-content p, #services3', { origin: 'right' });


        // Typed js
        const typed = new Typed('.multiple-text',{
            strings: ['Potrait Photographer', 'Wedding Photographer', 'Event Photographer', 'videographer', 'Widlife Photographer'],
            typeSpeed: 120,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });