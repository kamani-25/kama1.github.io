// === NAVBAR TOGGLE SCRIPT ===
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navbar_menu");
  const toggle = document.querySelector(".navbar_logo");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Optional: Close menu when clicking a link
  const navLinks = document.querySelectorAll(".navbar_links");
  navLinks.forEach(link =>
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    })
  );
});

// Contact Form Submission with Formspree
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  
    // Send to Formspree
    fetch("https://formspree.io/f/mkgvnzak", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this)
    })
    .then(response => {
      if (response.ok) {
        alert("Thank you, " + name + "! Your message has been sent.");
        this.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Error sending message. Please check your connection.");
    });
  });
  
// Enable zoom effect on mobile tap
document.querySelectorAll('.product').forEach(img => {
  img.addEventListener('touchstart', () => {
      img.classList.add('active');
  });

  img.addEventListener('touchend', () => {
      setTimeout(() => {
          img.classList.remove('active');
      }, 200); // Same 0.2s as hover
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");
  const declineBtn = document.getElementById("declineCookies");
  const starPopup = document.getElementById("starPopup");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieBanner.style.display = "none";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";

    // Reset popup position & show animation
    starPopup.style.opacity = "3";
    starPopup.style.animation = "shootingStar 2s ease-out forwards";

    // Create sparkle trail while moving
    const sparkleInterval = setInterval(() => {
      const rect = starPopup.getBoundingClientRect();
      createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }, 50);

    // Stop sparkles after animation
    setTimeout(() => {
      starPopup.style.opacity = "0";
      clearInterval(sparkleInterval);
    }, 2000);
  });

  declineBtn.addEventListener("click", () => {
    cookieBanner.style.display = "none";
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 80); // Remove after fade
  }
});

document.getElementById("h").addEventListener("click", function(e){
  e.preventDefault();
  const navbar = document.getElementById("navbar");

  navbar.classList.add("hide");

  setInterval(() => {
    navbar.classList.remove("hide");
  }, 200);
});


const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/footer.css",
  "/manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
];

