const closeModal = document.getElementById("close-modal");
const modalOk = document.getElementById("modal-ok");
const showModal = document.getElementById("show-modal");
const resultModal = document.getElementById("result-modal");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const modal = document.getElementById("modal");

showModal.onclick = toggleModal;

closeModal.onclick = toggleModal;

modalOk.onclick = () => {
  toggleModal();
  if (!nombre.value && !correo.value) {
    resultModal.classList.add("hidden");
    return;
  }
  resultModal.innerHTML = `
        <p>Nombre: ${nombre.value}</p>   
        <p>Correo: ${correo.value}</p>   
    `;
  resultModal.classList.remove("hidden");
};

function toggleModal() {
  modal.classList.toggle("hidden");
}
