// JavaScript for handling the button click event
const buyNowButtons = document.querySelectorAll(".buy-now");

buyNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    window.location.href = `productInfo.html?id=${productId}`;
  });
});
