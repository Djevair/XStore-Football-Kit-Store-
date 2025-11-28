function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.endsWith("img/manCityJerseys/backside.jpg")) {
    image.src = "img/Products/mci.jpg";
  } else {
    image.src = "img/manCityJerseys/backside.jpg";
  }
  image.removeAttribute("onclick");
}
// Get the image element and its container
var image = document.getElementById("myImage");
var container = document.querySelector(".zoom-img");

// Set the initial zoom level and position
var zoomLevel = 1;
var posX = 0;
var posY = 0;

// Add event listener for mouseover to zoom in
container.addEventListener("mouseover", function (event) {
  zoomLevel = 2; // Increase the zoom level (adjust as needed)
  updateImagePosition();
});

// Add event listener for mouseout to zoom out
container.addEventListener("mouseout", function (event) {
  zoomLevel = 1; // Reset the zoom level
  posX = 0; // Reset the X position
  posY = 0; // Reset the Y position
  updateImagePosition();
});

// Add event listener for mousemove to handle panning
container.addEventListener("mousemove", function (event) {
  // Calculate the position of the mouse within the container
  var rect = container.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  // Calculate the new image position based on the mouse position
  posX = (container.offsetWidth / 2 - x) * (zoomLevel - 1);
  posY = (container.offsetHeight / 2 - y) * (zoomLevel - 1);

  // Update the image position
  updateImagePosition();
});

// Function to update the image position and zoom level
function updateImagePosition() {
  image.style.transform =
    "scale(" + zoomLevel + ") translate(" + posX + "px, " + posY + "px)";
}
