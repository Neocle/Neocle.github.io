const texts = [
    "Aspiring Game and Software Developer",
    "Passionate about Coding and Gaming",
    "Experienced in Minecraft Plugin Development and Server Administration"
  ];

  let i = 0;
  let j = 0;
  const subtitle = document.getElementById("typing");
  const speed = 60;
  const eraseSpeed = 30;
  const pauseTime = 1000;
  
  function typeWriter() {
    if (i < texts[j].length) {
      subtitle.innerHTML = texts[j].substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, pauseTime);
    }
  }

  function eraseText() {
    if (i > 0) {
      subtitle.innerHTML = texts[j].substring(0, i - 1) + '<span class="cursor">|</span>';
      i--;
      setTimeout(eraseText, eraseSpeed);
    } else {
      j = (j + 1) % texts.length;
      setTimeout(typeWriter, pauseTime);
    }
  }

  document.addEventListener("DOMContentLoaded", typeWriter);