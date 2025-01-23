const editNameBtn = document.getElementById("edit-name-btn");
const saveNameBtn = document.getElementById("save-name-btn");
const profileName = document.getElementById("profile-name");
const uploadPhotoBtn = document.getElementById("upload-photo-btn");
const fileInput = document.getElementById("file-input");
const profilePhoto = document.getElementById("profile-photo");

editNameBtn.addEventListener("click", () => {
  profileName.setAttribute("contenteditable", "true");
  profileName.classList.add("editable");
  profileName.focus();
  editNameBtn.classList.add("hidden");
  saveNameBtn.classList.remove("hidden");
});

saveNameBtn.addEventListener("click", () => {
  profileName.setAttribute("contenteditable", "false");
  profileName.classList.remove("editable");
  saveNameBtn.classList.add("hidden");
  editNameBtn.classList.remove("hidden");
});

uploadPhotoBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePhoto.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
