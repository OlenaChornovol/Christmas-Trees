const buttonsConsultation = document.querySelectorAll(".header__consultation");
const overlayConsultation = document.querySelector(".overlay_consultation");
const consultation = document.querySelector(".modal__consultation");
buttonsConsultation.forEach((buttonConsultation) => {
  buttonConsultation.addEventListener("click", () => {
    overlayConsultation.classList.add("overlay_active");
    consultation.value = buttonConsultation.dataset.consultation;
  });
});

overlayConsultation.addEventListener("click", (event) => {
  const target = event.target;

  if (target === overlayConsultation || target.closest(".modal__close")) {
    overlayConsultation.classList.remove("overlay_active");
  }
});
