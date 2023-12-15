//? task1    1.Створити список з 7 елементів(за допомогою js), динамічно присвоїти їм значення тексту I love JS.
//?          2. кожному елементу присвоїти рандомний колір за допомогою функції.getRandomColor().
//?          3. Вивести по кліку на кнопку кількість елементів списку на екран.
//?          4. Зняти слухача події

// lll

// 5more

const getRandomColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const container = document.querySelector(".container");

const createList = () => {
  const list = document.createElement("ul");
  //   const listItems = [];
  for (let i = 0; i < 7; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "I love JS";
    listItem.style.color = getRandomColor();
    list.append(listItem);
    // list.append(...listItems);
    container.append(list);
  }
};

createList();

const btn = document.createElement("button");
btn.textContent = "Click me";
container.appendChild(btn);

const onClickCount = () => {
  const headerText = document.createElement("h1");

  headerText.textContent = `List items count: ${container.children[0].children.length}`;
  container.appendChild(headerText);
  btn.removeEventListener("click", onClickCount);
};

btn.addEventListener("click", onClickCount);

//task 2

// & 1. Створити форму з інпутом для введення імені та кнопкою для підтвердження.
// & 2. Після натискання на кнопку, вивести на екран текст з введеним іменем.
// & 3. При натисканні на кнопку очистити інпут. inner
// & 4. При фокусі на інпут, змінювати колір бордера на червоний, при втраті фокуса - на синій.
// & 5. При натисканні на текст перекреслювати його . (слухач)

// task 3
// & 1. Є масив користувачів. Вивести їх на екран. id#users
//&    Використати шаблонні рядки та метод insertAdjacentHTML/ innerHtml   (map)
// & 2. При натисканні на кнопку "Add user" додати ще одного користувача в масив.

const users = [
  {
    name: "Alex",
    age: 25,
    eyes: "blue",
    proffession: "computer science",
    id: 1,
  },
  {
    name: "Danik",
    age: 30,
    eyes: "brown",
    proffession: "javascript developer",
    id: 2,
  },
  { name: "Misha", age: 18, eyes: "green", proffession: "python dev", id: 3 },
  { name: "Max", age: 22, eyes: "brown", proffession: "fullstack dev", id: 4 },
  {
    name: "Rostik",
    age: 35,
    eyes: "green",
    proffession: "computer engineer",
    id: 5,
  },
];

///20
// const userList = document.querySelector("#users");

///10

const userList = document.querySelector("#users");
const userItem = users.map((user) => {
  return `<li class="user-item"><h1>name: ${user.name}</h1><p>age: ${user.age}</p></li>`;
});
userList.insertAdjacentHTML("beforeend", userItem.join(""));

const addUserBtn = document.createElement("button");
addUserBtn.textContent = "Add user";
userList.appendChild(addUserBtn);

addUserBtn.addEventListener("click", () => {
  const newUser = {
    name: "Roma",
    age: 25,
    eyes: "blue",
    proffession: "computer science",
    id: 6,
  };
  users.push(newUser);
  const newUserItem = `<li class="user-item"><h1>name: ${newUser.name}</h1><p>age: ${newUser.age}</p></li>`;
  userList.insertAdjacentHTML("beforeend", newUserItem);
});
