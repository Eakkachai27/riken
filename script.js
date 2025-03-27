// script.js

// เพิ่ม animation เล็กๆ ตอนโหลดหน้า
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 150);
    });
  });
  