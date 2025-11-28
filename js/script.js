/*Image hover*/
const imageContainer = document.querySelector(".most-sold-item");
imageContainer.addEventListener("mouseout", () => {
  imageContainer.classList.remove("hover");
});
// Get the slideshow elements
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// Function to show a slide
function showSlide(slideIndex) {
  // Hide all slides and remove active class from dots
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  // Show the selected slide and mark the corresponding dot as active
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

// Function to change slide on dot click
function changeSlide(slideIndex) {
  showSlide(slideIndex);
  currentSlide = slideIndex;
}

// Show the initial slide
showSlide(currentSlide);

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index);
  });
});

// Automatic slideshow
setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}, 3000);

// search form
function searchItems(event) {
  event.preventDefault(); // Prevent form submission

  const searchInput = document.getElementById("searchInput");
  const searchText = searchInput.value.trim().toLowerCase();

  // Perform search logic here
  // You can update the UI or redirect to a search results page

  // Example: Log the search text to the console
  console.log("Search Text:", searchText);

  // Clear the search input
  searchInput.value = "";
}
