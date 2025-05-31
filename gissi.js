// ❄️ Nieve animada
const nieveContainer = document.getElementById('nieve-container');
for (let i = 0; i < 100; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${2 + Math.random() * 5}s`;
  nieveContainer.appendChild(snowflake);
}

// ✨ Texto flotante
document.querySelectorAll('.animar-texto').forEach(el => {
  el.style.transition = 'all 1s ease';
  el.addEventListener('mouseover', () => {
    el.style.transform = 'scale(1.05)';
    el.style.color = '#fffacd';
  });
  el.addEventListener('mouseout', () => {
    el.style.transform = 'scale(1)';
    el.style.color = '#FF69B4';
  });
});

// 💫 Scroll reveal suave
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animar-entrada').forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// 🎶 Música de fondo
const audio = new Audio('snowman.mp3');
audio.loop = true;
audio.volume = 0.5;
audio.play().catch(error => {
  console.error('Error al reproducir la música:', error);
});

// 🎉 Confeti
const confettiContainer = document.getElementById('confetti-container');
const confettiColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
function crearConfeti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDuration = `${1 + Math.random() * 3}s`;
  confettiContainer.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}
setInterval(crearConfeti, 200);

// 🖼️ Carrusel
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;
function showNextImage() {
  const imgElement = document.querySelector("#carrusel img");
  imgElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}
setInterval(showNextImage, 3000);

// 💬 Mensaje motivacional
const messages = {
  es: [
    "Eres increíble y capaz de lograr todo lo que te propongas.",
    "Cada día es una nueva oportunidad para brillar.",
    "Tu sonrisa ilumina el mundo.",
    "Nunca dejes de soñar en grande."
  ]
};
const lang = "es";
const randomMessage = messages[lang][Math.floor(Math.random() * messages[lang].length)];
const messageElement = document.createElement("div");
messageElement.textContent = randomMessage;
messageElement.style.position = "fixed";
messageElement.style.bottom = "20px";
messageElement.style.left = "50%";
messageElement.style.transform = "translateX(-50%)";
messageElement.style.background = "#FF69B4";
messageElement.style.color = "#000";
messageElement.style.padding = "10px 20px";
messageElement.style.borderRadius = "20px";
messageElement.style.fontWeight = "bold";
document.body.appendChild(messageElement);
