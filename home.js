document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carrossel").forEach((carrossel) => {
    let currentIndex = 0;
    const images = carrossel.querySelectorAll(".slide");
    const totalImages = images.length;

    function showNextImage() {
      currentIndex++;

      if (currentIndex >= totalImages) {
        currentIndex = 0;
        carrossel.style.transition = "none";
        carrossel.style.transform = `translateX(0)`;
        setTimeout(() => {
          carrossel.style.transition = "transform 1s ease";
          carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
      } else {
        const newTransformValue = `-${currentIndex * 100}%`;
        carrossel.style.transform = `translateX(${newTransformValue})`;
      }
    }

    setInterval(showNextImage, 1000);
  });
});
