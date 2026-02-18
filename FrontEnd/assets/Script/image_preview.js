export function imgUrl(imageDiv, image, imageIcon, limits, addProject) {
  const previewImg = document.createElement("img");
  previewImg.classList.add("preview-img");
  previewImg.style.display = "none";
  imageDiv.appendChild(previewImg);
  image.addEventListener("change", () => {
    const file = image.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImg.src = e.target.result;
        previewImg.style.display = "block";
        previewImg.style.maxHeight = "193px";
        previewImg.style.maxWidth = "auto";
        previewImg.style.overflow = "hidden";
        imageIcon.style.display = "none";
        addProject.style.display = "none";
        limits.style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  });
}
