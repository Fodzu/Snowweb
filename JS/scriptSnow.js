const totalSnowflakes = 200;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createSnowflake(i) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snow';

    const opacity = random(0.1, 1);
    const initialX = random(0, window.innerWidth); // Use window.innerWidth for X coordinate
    const scale = random(0.5, 1.5); // Adjust scale range
    const duration = random(10, 30);
    const delay = random(-30, 0);
    const endY = window.innerHeight + 20; // Ensure snowflake falls below viewport
    const offsetX = random(-10, 10);
    const endX = initialX + offsetX;

    snowflake.style.opacity = opacity;
    snowflake.style.transform = `translate(${initialX}px, -10px) scale(${scale})`;
    snowflake.style.animation = `fall-${i} ${duration}s ${delay}s linear infinite`;

    const keyframes = `
      @keyframes fall-${i} {
        0% {
          transform: translate(${initialX}px, -10px) scale(${scale});
        }
        100% {
          transform: translate(${endX}px, ${endY}px) scale(${scale});
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    document.body.appendChild(snowflake);
}

for (let i = 1; i <= totalSnowflakes; i++) {
    createSnowflake(i);
}
