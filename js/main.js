import "./modal.js";
import "./slider.js";

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("dropping");
});
dropzone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropzone.classList.remove("dropping");
});
