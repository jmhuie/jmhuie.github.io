const images = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let imageIndex = 0; // Keep track of current image globally

// Open modal when image clicked
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    imageIndex = index;
    showImage(imageIndex);
    modal.classList.add("appear");
  });
});

function showImage(index) {
  if (index >= images.length) imageIndex = 0;
  if (index < 0) imageIndex = images.length - 1;
  modalImg.src = images[imageIndex].src;
  modalTxt.innerHTML = images[imageIndex].alt;
}

// Navigation buttons
nextBtn.addEventListener("click", () => {
  imageIndex++;
  showImage(imageIndex);
});

prevBtn.addEventListener("click", () => {
  imageIndex--;
  showImage(imageIndex);
});

// Keyboard navigation
window.addEventListener("keyup", (e) => {
  if (!modal.classList.contains("appear")) return;

  if (e.key === "ArrowRight") {
    imageIndex++;
    showImage(imageIndex);
  } else if (e.key === "ArrowLeft") {
    imageIndex--;
    showImage(imageIndex);
  } else if (e.key === "Escape") {
    modal.classList.remove("appear");
  }
});

// Close modal
close.addEventListener("click", () => {
  modal.classList.remove("appear");
});
