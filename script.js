// Delivery Counter
let deliveryCount = 0;

function incrementDeliveries() {
  deliveryCount++;
  return deliveryCount;
}

const deliveryDisplay = document.getElementById("deliveryCount");
const countBtn = document.getElementById("countBtn");

if (countBtn && deliveryDisplay) {
  countBtn.addEventListener("click", () => {
    let newValue = incrementDeliveries();
    deliveryDisplay.textContent = newValue;
  });
}

// Booking button (returns calculated cost)
function calculateCost(distance, ratePerKm) {
  return distance * ratePerKm;
}

const bookBtn = document.getElementById("bookBtn");
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    let distance = 120; // Example: Nairobi to Nakuru
    let rate = 50;      // KSH per km
    let cost = calculateCost(distance, rate);
    alert(`Estimated delivery cost: KSH ${cost}`);
  });
}

// Carousel Logic
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

function showSlide(n) {
  index = (n + images.length) % images.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Simple email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}
