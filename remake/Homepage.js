let docTitle = document.title;
window.addEventListener("blur", () => {document.title = "Comeback :(";})
window.addEventListener("focus", () => {document.title = docTitle;})
