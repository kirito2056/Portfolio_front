const checkElement = document.getElementById("check");

let isDragging = false;
let startX, startY;

checkElement.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const currentX = e.clientX;
    const currentY = e.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;


    console.log(`드래그 중 - X: ${deltaX}, Y: ${deltaY}`);

    startX = currentX;
    startY = currentY;
  }
});

window.addEventListener("mouseup", () => {
  isDragging = false;
    
  console.log("드래그 종료");
});
