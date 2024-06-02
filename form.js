const form = document.querySelector("#application-form");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel-button");
const allFields = form.querySelectorAll("input, textarea");
const storageKey = "karamozov-app-data";

function checkRequiredFields() {
  let textAreaFilled = Array.from(allFields).some((field) => {
    if (field.tagName.toLowerCase() === "textarea") {
      return field.value.length >= 1;
    }
    return false;
  });

  if (textAreaFilled) {
    submitButton.classList.remove("deactivated");
  } else {
    submitButton.classList.add("deactivated");
  }
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
  field.addEventListener("input", () => {
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
