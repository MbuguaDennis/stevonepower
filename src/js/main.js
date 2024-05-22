const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.header__nav'); // Changed to '.header__nav'
// close menu button
const closeMenuButton= document.getElementById("close-menu-btn");
menuIcon.addEventListener('click', () => {
    navBar.classList.add("active");
});
closeMenuButton.addEventListener('click', ()=>{
    navBar.classList.remove("active");
})
// sliding  hero images
const images = document.querySelectorAll('.hero-image');
let currentIndex = 0;

function changeBackgroundImage() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 10000); // Change image every 10 seconds

// Initialize the first background image
changeBackgroundImage();
const options = {
    threshold: 0.2 // Adjust threshold as needed
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(document.querySelector('.statistics'));

function animateCounters() {
    const counters = document.querySelectorAll('.statistic-item h3');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 50); // Adjust speed here

        const updateCount = () => {
            count += increment;
            counter.textContent = count;
            if (count < target) {
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });
}
// JavaScript for Go to Top Button
const goToTopButton = document.getElementById("go-to-top");

// Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
});

// Smooth scroll to top
goToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// JavaScript for FAQ Section Functionality
const faqItems = document.querySelectorAll(".faq-item");

// Toggle answer visibility when clicking on question
faqItems.forEach(function (item) {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");

    question.addEventListener("click", function () {
        answer.classList.toggle("show-answer");
    });
});
function callSteve() {
    window.location.href = 'tel:+254758225198'; // Replace with Steve's actual phone number
}


// /// JavaScript
// document.querySelectorAll('.product').forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.classList.add('product-hovered'); // Add class on mouse enter
//     });
//     item.addEventListener('mouseleave', () => {
//         item.classList.remove('product-hovered'); // Remove class on mouse leave
//     });
// });









