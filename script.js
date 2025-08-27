/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["Web Developer", "Problem Solver"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT CARDS -- */
sr.reveal('.project-card', { interval: 200 })

/* -- EXPERIENCE CARDS -- */
sr.reveal('.experience-card', { interval: 200 })

/* -- EDUCATION CARDS -- */
sr.reveal('.education-card', { interval: 200 })

/* -- CERTIFICATION CARDS -- */
// sr.reveal('.certification-card',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ----- PROGRESS BAR FUNCTIONALITY ----- */
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    document.getElementById('progressBar').style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateProgressBar);


// ================= Certificate Section ===================
document.addEventListener('DOMContentLoaded', function () {
    // Data for your certificates. This makes it easy to add or remove items.
    const certificateData = [
        { img: "./certificate/Cisco_CCNA_Enterprise_Networking_Security_and_Automation.jpg", title: "CCNA Enterprise Networking Security and Automation", issuer: "Cisco" },
        { img: "./certificate/Cisco_CCNA_Switching_Routing_and_Wireless _Essentials.jpg", title: "CCNA Switching Routing and Wireless Essentials", issuer: "Cisco" },
        { img: "./certificate/Cisco_CCNA_Introduction_to_Networks.jpg", title: "CCNA Introduction to Networks", issuer: "Cisco" },
        { img: "./certificate/Cisco_Python_Essentials_1.jpg", title: "Python Essentials 1", issuer: "Cisco" },
        { img: "./certificate/Cisco_Python_Essentlals_2.jpg", title: "Python Essentials 2", issuer: "Cisco" },
        { img: "./certificate/Cisco_Cybersecurity_Essentials.jpg", title: "Cybersecurity Essentials", issuer: "Cisco" },
        { img: "./certificate/Cisco-Cybersuraksha_DS-certificate.jpg", title: "Cybersuraksha DS Certificate", issuer: "Cisco" },
        { img: "./certificate/EduNet_Foundation_of_AI_virtual_internship.jpg", title: "Foundation of AI Virtual Internship", issuer: "EduNet" },
        { img: "./certificate/NPTEL_Soft_Skill_Development.jpg", title: "Soft Skill Development", issuer: "NPTEL" },
        { img: "./certificate/SpokenTutorial_PYTHON.jpg", title: "Python", issuer: "Spoken Tutorial" },
        { img: "./certificate/SpokenTutorial_HTML.jpg", title: "HTML", issuer: "Spoken Tutorial" },
        { img: "./certificate/iHubDivyasampark_Fundamental_of_python.jpg", title: "Fundamental Of Python", issuer: "iHUB DivyaSampark" },
        { img: "./certificate/Salesforce_Developer_Virtual_Internship.jpg", title: "Salesforce Developer Virtual Internship", issuer: "Salesforce" },
        { img: "./certificate/Codsoft_C++_virtual_internship.jpg", title: "C++ Virtual Internship", issuer: "Codsoft" },
        { img: "./certificate/EiSystem_Web_Developement_internship.jpg", title: "Web Development Internship", issuer: "EiSystem" },
        { img: "./certificate/TheIotAcademy_Wokshop_on_FullStack_Developement.jpg", title: "Full Stack Development Workshop", issuer: "The IoT Academy" },
        { img: "./certificate/Tata_Imagination_Challange.jpg", title: "Tata Imagination Challenge", issuer: "Tata" },
    ];

    const track = document.getElementById('certificatesTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Populate the track with original certificate cards from the data array
    certificateData.forEach(cert => {
        track.innerHTML += `
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${cert.img}" alt="${cert.title}">
                </div>
                <div class="certification-content">
                    <div class="certification-header">
                        <h3>${cert.title}</h3>
                        <span class="issuer">${cert.issuer}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // --- INFINITE CAROUSEL LOGIC ---

    const cards = Array.from(track.children);
    // Calculate the width of a single card including its margin
    // The margin is set to 1rem on each side, so 2rem total -> 32px
    let cardWidth = cards[0].offsetWidth + 32;

    // Clone the original cards to create the infinite effect
    const clonesStart = cards.map(card => card.cloneNode(true));
    const clonesEnd = cards.map(card => card.cloneNode(true));

    // Add clones to the end of the track
    clonesStart.forEach(clone => track.appendChild(clone));
    // Add clones to the beginning of the track
    clonesEnd.reverse().forEach(clone => track.insertBefore(clone, cards[0]));

    // The starting position should be at the beginning of the *original* cards
    let currentIndex = cards.length;
    const initialTranslateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${initialTranslateX}px)`;

    let isTransitioning = false;

    // Function to handle moving the carousel
    const move = (direction) => {
        if (isTransitioning) return;
        isTransitioning = true;

        // Enable the smooth transition effect
        track.style.transition = 'transform 0.5s ease-in-out';
        currentIndex += direction;
        track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    };

    // Attach event listeners to the navigation buttons
    nextBtn.addEventListener('click', () => move(1));
    prevBtn.addEventListener('click', () => move(-1));

    // This is the magic for the infinite loop.
    // When the transition animation ends, we check if we're on a cloned slide.
    track.addEventListener('transitionend', () => {
        isTransitioning = false;

        // If we've scrolled to the cloned cards at the end, silently jump back to the start
        if (currentIndex >= cards.length * 2) {
            track.style.transition = 'none'; // Disable transition for the jump
            currentIndex = cards.length;
            track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        }

        // If we've scrolled to the cloned cards at the beginning, silently jump to the end
        if (currentIndex <= cards.length - 1) {
            track.style.transition = 'none'; // Disable transition for the jump
            currentIndex = cards.length * 2 - 1;
            track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        }
    });

    // Handle window resizing to keep the carousel working correctly
    const updateWidth = () => {
        cardWidth = cards[0].offsetWidth + 32; // Re-calculate on resize
        track.style.transition = 'none'; // Avoid weird transition on resize
        track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    };
    window.addEventListener('resize', updateWidth);

    // --- AUTO-PLAY LOGIC ---
    let autoPlayInterval;

    const startAutoPlay = () => {
        stopAutoPlay(); // Ensure no multiple intervals are running
        autoPlayInterval = setInterval(() => move(1), 3000); // Change slide every 3 seconds
    };

    const stopAutoPlay = () => {
        clearInterval(autoPlayInterval);
    };

    // Pause auto-play when the user hovers over the carousel
    const carouselContainer = document.querySelector('.certifications-carousel');
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);

    // Initial start of the auto-play
    startAutoPlay();
});