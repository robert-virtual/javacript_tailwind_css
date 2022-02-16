const previous = document.getElementById("previous");
const next = document.getElementById("next");
const imgs = document.getElementById("imgs");
const img = document.getElementById("img");
const dropzone = document.getElementById("dropzone");
const items = document.getElementById("items");
let filesList = [];
let current = 0;
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("dropping");
  const { files } = e.dataTransfer;
  imgs.classList.remove("hidden");
  filesList = [...filesList, ...Array.from(files)];
  let url = URL.createObjectURL(filesList[0]);
  img.src = url;
  items.textContent = `${current + 1}/${filesList.length}`;
  console.log("current:", current);
});

previous.onclick = () => {
  current--;
  if (current < 0) {
    current = filesList.length - 1;
  }
  let url = URL.createObjectURL(filesList[current]);
  img.src = url;
  items.textContent = `${current + 1}/${filesList.length}`;
};

next.onclick = () => {
  current++;
  if (current == filesList.length) {
    current = 0;
  }
  let url = URL.createObjectURL(filesList[current]);
  img.src = url;
  items.textContent = `${current + 1}/${filesList.length}`;
  console.log("current:", current);
};
