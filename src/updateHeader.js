export function updateSectionHeader({ title, icon }) {
  const section = document.querySelector(".container-section");
  const titleEl = section.querySelector(".section-title");
  const iconEl = section.querySelector(".section-icon");

  if (section && titleEl && iconEl) {
    titleEl.textContent = title;
    iconEl.src = icon;
  }
}
