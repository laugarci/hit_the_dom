class Circle {
  constructor() {
    this.centerx = -1;
    this.centery = -1;
    this.radius = -1;
    this.audio = null;
  }

  isIn(x, y) {
    const distance = Math.sqrt((this.centerx-x) ** 2 + (this.centery-y) ** 2);
    if (distance > this.radius)
      return false;
    return true;
  }
}

function getcircles(imageWidth, imageHeight) {
  let circles = [];

  tmp_circle = new Circle();

  // Circulo 1
  tmp_circle.centerx = 9.83 * imageWidth / 100;
  tmp_circle.centery = 16.19 * imageHeight / 100;
  tmp_circle.radius = 7 * imageWidth / 100;
  circles.push(tmp_circle);

  //Circulo 2
  tmp_circle = new Circle();
  tmp_circle.centerx = 16.88 * imageWidth / 100;
  tmp_circle.centery = 39.28 * imageHeight / 100;
  tmp_circle.radius = 7.5 * imageWidth / 100;
  circles.push(tmp_circle);

  // //Circulo 3
  tmp_circle = new Circle();
  tmp_circle.centerx = 25.24 * imageWidth / 100;
  tmp_circle.centery = 66.66 * imageHeight / 100;
  tmp_circle.radius =  10.8 * imageWidth / 100;
  circles.push(tmp_circle);

  //Circulo 4
  tmp_circle = new Circle();
  tmp_circle.centerx = 37.21 * imageWidth / 100;
  tmp_circle.centery = 29.76 * imageHeight / 100;
  tmp_circle.radius =  10.8 * imageWidth / 100;
  circles.push(tmp_circle);

  //Circulo 5
  tmp_circle = new Circle();
  tmp_circle.centerx = 61.63 * imageWidth / 100;
  tmp_circle.centery = 30.47 * imageHeight / 100;
  tmp_circle.radius =  10.1 * imageWidth / 100;
  circles.push(tmp_circle);

  //Circulo 6
  tmp_circle = new Circle();
  tmp_circle.centerx = 89.34 * imageWidth / 100;
  tmp_circle.centery = 15.47 * imageHeight / 100;
  tmp_circle.radius = 8 * imageWidth / 100;
  circles.push(tmp_circle);
    
  //Circulo 7
  tmp_circle = new Circle();
  tmp_circle.centerx = 81.80 * imageWidth / 100;
  tmp_circle.centery = 38.8 * imageHeight / 100;
  tmp_circle.radius = 7.8 * imageWidth / 100;
  circles.push(tmp_circle);

  //Circulo 8
  tmp_circle = new Circle();
  tmp_circle.centerx = 73.77 * imageWidth / 100;
  tmp_circle.centery = 66.9 * imageHeight / 100;
  tmp_circle.radius = 10.1 * imageWidth / 100;
  circles.push(tmp_circle);
  
  return circles
}

window.addEventListener('load', function() {
  const imageContainer = document.getElementById('image-container');
  const audios = document.getElementsByClassName('sound');
  const image = document.getElementById('image');
  const imageWidth = image.clientWidth;
  const imageHeight = image.clientHeight;
  const circles = getcircles(imageWidth, imageHeight);

  for (let i = 0; i < circles.length; i++) {
    circles[i].audio = audios[i];
  }

  //desktop
  imageContainer.addEventListener('mousemove', function(event) {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    let isCursorInsideCircle = false;

    for (let i = 0; i < circles.length; i++) {
      if (circles[i].isIn(mouseX, mouseY)) {
        isCursorInsideCircle = true;
        break;
      }
    }

    if (isCursorInsideCircle) {
      imageContainer.classList.add('hand-cursor');
    } else {
      imageContainer.classList.remove('hand-cursor');
    }
  });

  imageContainer.addEventListener('click', function(event) {
    const clickX = event.offsetX;
    const clickY = event.offsetY;

    for (let i = 0; i < circles.length; i++) {
      const audio = circles[i].audio;
      audio.pause();
      audio.currentTime = 0;
      if (circles[i].isIn(clickX, clickY))
        circles[i].audio.play();
    }
  });

  //movil
  imageContainer.addEventListener('touchstart', function(event) {
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    for (let i = 0; i < circles.length; i++) {
      const audio = circles[i].audio;
      audio.pause();
      audio.currentTime = 0;
      if (circles[i].isIn(touchX, touchY))
        circles[i].audio.play();
    }
  });
});



function toggleMenu() {
  var menu = document.getElementById("menu");
  var menuToggle = document.querySelector(".menu-toggle");
  menu.classList.toggle("show");
  menu.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("show");
}
