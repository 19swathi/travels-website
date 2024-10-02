// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // Get the href attribute of the clicked link
    const targetPage = link.getAttribute("href");

    // Navigate to the target page
    window.location.href = targetPage;

    // Prevent default link behavior
    event.preventDefault();
  });
});

// Other parts of your JavaScript code remain unchanged...
const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
function bookNow() {
    // Redirect to the payment page
    window.location.href = 'payment.html'; // Replace 'payment.html' with the actual URL of your payment page
}

function redirectToOffers() {
    // Redirect to the offers page after payment
    window.location.href = 'offers.html'; // Replace 'offers.html' with the actual URL of your offers page
}

// JavaScript code to handle redirection to the payment page
function redirectToPayment() {
    window.location.href = 'payment.html'; // Replace 'payment.html' with the actual URL of your payment page
}
 function handleSubmit(event) {
            event.preventDefault(); // Prevent the default form submission

            // Show the confirmation message
            document.getElementById('confirmationMessage').style.display = 'block';
        }
