let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "Comeback :(";})
window.addEventListener("focus", () => {document.title = docTitle;})

var wheel = document.getElementById("wheel");
var boxes = document.querySelectorAll(".box");

var center = 250;
var radius = 200;
var total = boxes.length;
var slice = (2 * Math.PI) / total;

boxes.forEach(function (box, i) {
    var angle = i * slice;
    var x = center + radius * Math.sin(angle);
    var y = center - radius * Math.cos(angle);

    TweenLite.set(box, {
        rotation: angle + "_rad",
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y,
    });
});

Draggable.create(wheel, {
    type: "rotation",
    throwProps: true,
    minimumMovement: 10,
    dragClickables: true,
});
