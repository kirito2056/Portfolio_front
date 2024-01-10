document.addEventListener("DOMContentLoaded", (event) => {
  const circle = document.querySelector(".circle");
  const numSquares = 16; // 원하는 사각형의 개수 (4의 배수가 아닌 경우)

  // 사각형 생성 및 스타일 설정
  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // 원주의 각을 나누어 사각형을 배치 (360도를 numSquares로 나누기)
    const rotationAngle = (360 / numSquares) * i;

    // 회전 각도를 스타일로 설정
    square.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg) translate(20em)`;

    // 사각형을 원 안에 추가
    circle.appendChild(square);
  }

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
