const form = document.querySelector("#application-form");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel-button");
const requiredFields = form.querySelectorAll(
  "input[required], textarea[required]"
);
const allFields = form.querySelectorAll("input, textarea");
const storageKey = "karamozov-app-data";

function checkRequiredFields() {
  let allFilled = Array.from(requiredFields).every((field) => {
    if (field.type === "email") {
      return validateEmail(field.value);
    } else if (field.type === "file") {
      return field.files.length > 0;
    } else if (field.type === "textarea") {
      return field.value.trim().length >= 5000;
    } else {
      return field.value.trim() !== "";
    }
  });
  if (allFilled) {
    submitButton.classList.remove("deactivated");
  } else {
    submitButton.classList.add("deactivated");
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

function saveFormData() {
  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    if (!(value instanceof File)) {
      formDataObject[key] = value;
    }
  });
  sessionStorage.setItem(storageKey, JSON.stringify(formDataObject));
}

function loadFormData() {
  const storedData = sessionStorage.getItem(storageKey);
  if (storedData) {
    const formDataObject = JSON.parse(storedData);
    for (const [key, value] of Object.entries(formDataObject)) {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) {
        input.value = value;
      }
    }
  }
  checkRequiredFields();
}

function clearFormData() {
  sessionStorage.removeItem(storageKey);
}

allFields.forEach((field) => {
  field.addEventListener("keyup", () => {
    checkRequiredFields();
    saveFormData();
  });
  field.addEventListener("change", () => {
    checkRequiredFields();
    saveFormData();
  });
});

cancelButton.addEventListener("click", () => {
  clearFormData();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveFormData();
  window.location.href = "complete.html";
});

window.addEventListener("load", loadFormData);
