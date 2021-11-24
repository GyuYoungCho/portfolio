function exec() {
  //   var imgWidth = 3000;
  //   var imgHeight = 300;
  //   var odrag = document.getElementById("project-container");
  //   var ospin = document.getElementById("project-carousel");
  //   ospin.style.width = imgWidth + "px";
  //   ospin.style.height = imgHeight + "px";
  //   function applyTranform(obj) {
  //     if (tY > 70) tY = 70;
  //     if (tY < 0) tY = 0;
  //     // Apply the angle
  //     obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
  //   }
  //   function playSpin(yes) {
  //     ospin.style.animationPlayState = yes ? "running" : "paused";
  //   }
  //   var desX = 0,
  //     desY = 0,
  //     tX = 0,
  //     tY = 10;
  //   document.onpointerdown = function (e) {
  //     clearInterval(odrag.timer);
  //     e = e || window.event;
  //     var sX = e.clientX,
  //       sY = e.clientY;
  //     this.onpointermove = function (e) {
  //       e = e || window.event;
  //       var nX = e.clientX,
  //         nY = e.clientY;
  //       desX = nX - sX;
  //       desY = nY - sY;
  //       tX += desX * 0.1;
  //       tY += desY * 0.1;
  //       applyTranform(odrag);
  //       sX = nX;
  //       sY = nY;
  //     };
  //     this.onpointerup = function () {
  //       odrag.timer = setInterval(function () {
  //         desX *= 0.95;
  //         desY *= 0.95;
  //         tX += desX * 0.1;
  //         tY += desY * 0.1;
  //         applyTranform(odrag);
  //         playSpin(false);
  //         if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
  //           clearInterval(odrag.timer);
  //           playSpin(true);
  //         }
  //       }, 20);
  //       this.onpointermove = this.onpointerup = null;
  //     };
  //     return false;
  //   };
}

export { exec };
