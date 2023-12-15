// task 4 Todo list (change, submit preventDefault, form)
// Ісунує форма з інпутом, куди вводиться текст. І є чекбокс.
// Поки чекбокс не відмічений, кнопка "Add" не активна.
// Натисканням ентер в інпуті або кнопкою в список додається нотатка
// Очистити інпут
// Прибрати перезавантаження
// При натисканні на замітку вона стає перекресленою
// Чекбокс при додаванні нотатки має стати не вибраним, а кнопка знову недоступною.

const refs = {
  checkbox: document.querySelector("input[name='confirm']"),
  addBtn: document.querySelector("button[type='submit']"),
  input: document.querySelector("input[name='todoInput']"),
  form: document.querySelector("form"),
  list: document.querySelector("ol"),
};

const handleCheckboxChange = (event) => {
  refs.addBtn.disabled = !refs.checkbox.checked;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = refs.input.value;
  const listItem = document.createElement("li");
  listItem.textContent = inputValue;
  refs.list.append(listItem);
  refs.input.value = "";
  refs.checkbox.checked = false;
  refs.addBtn.disabled = true;
  refs.form.reset();

  listItem.addEventListener("click", () => {
    listItem.style.textDecoration =
      listItem.style.textDecoration !== "line-through"
        ? "line-through"
        : "none";
  });
};

refs.checkbox.addEventListener("change", handleCheckboxChange);
refs.form.addEventListener("submit", handleSubmit);
