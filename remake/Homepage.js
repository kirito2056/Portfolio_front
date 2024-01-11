document.addEventListener("DOMContentLoaded", (event) => {
  const circle = document.querySelector(".circle");
  const squares = document.querySelectorAll(".square");

  let isDragging = false;
  let initialMouseAngle, initialCircleRotation;

  circle.addEventListener("mousedown", (e) => {
    isDragging = true;
    const circleRect = circle.getBoundingClientRect();
    const circleCenterX = circleRect.left + circleRect.width / 2;
    const circleCenterY = circleRect.top + circleRect.height / 2;

    initialMouseAngle = Math.atan2(e.clientY - circleCenterY, e.clientX - circleCenterX) * (180 / Math.PI);
    initialCircleRotation = circle.style.transform ? parseInt(circle.style.transform.replace("rotate(", "").replace("deg)", "")) : 0;

    document.addEventListener("mousemove", onDrag);
  });

  document.addEventListener("mouseup", (e) => {
    isDragging = false;
    document.removeEventListener("mousemove", onDrag);
  });

  function onDrag(e) {
    if (!isDragging) return;
    const circleRect = circle.getBoundingClientRect();
    const circleCenterX = circleRect.left + circleRect.width / 2;
    const circleCenterY = circleRect.top + circleRect.height / 2;
    const currentMouseAngle = Math.atan2(e.clientY - circleCenterY, e.clientX - circleCenterX) * (180 / Math.PI);
    const newCircleRotation = initialCircleRotation + (currentMouseAngle - initialMouseAngle);

    circle.style.transform = `rotate(${newCircleRotation}deg)`;
  }
});
