//^  Обʼєкти window and document

// DOM - Обєкт для роботи з елементами на сторінці

// window.alert
// window.prompt
// window.confirm

//?  Застарілі / дlідівські методи пошуку елементів getElementById, getElementsByTagName, getElementsByClassName

// const titleEl = document.getElementById('title');
// console.log(titleEl)

// const listLink = document.getElementsByClassName('list__link');
// //& Сучасні методи пошуку елементів

// document.querySelector(".container > h1");

// повертає перший знайдений елемент
// const listItem = document.querySelectorAll(".list__item");

// console.log(listItem);

// сервіс для генерації ДОМ-дерева

// Dom-дерево складається із вузлів(node)

// js-classes
// //*  навігація по DOM-дереву
// const listEl = document.querySelector(".list");

// console.log(listEl.children); // колекція елементів конспект
// img src and alt  .. changing an attributes

//^  доступ до атрибутів
//  el.hasAttribute('name') - перевіряє наявність атрибута
// el.getAttribute('name') - отримує значення атрибута
// el.setAttribute('name', 'value') - встановлює атрибут
// console.dir(imgEl.setAttribute('alt', 'my image'));
// el.removeAttribute('name') - видаляє атрибут
// el.attributes - колекція всіх атрибутів елемента

// titleEl.style.backgroundColor = 'red';
// titleEl.style.fontSize = '30px';
// inline styles

// ? щоб одним рядком додати багато стилів
// titleEl.style.cssText =
//   "background-color: red; font-size: 30px; padding: 20px;";

// we use these inline styles for dynamic changes.. slider for example

//* методи classList (add, remove, toggle, contains)

// titleEl.classList.add('newClass);

//& create new element
// const listItemEl = document.createElement("li");
// поки що в домі його немає

// listItemEl.classList.add("gallery__item");

// методи додавання до Дом
// append, prepend, before, after

// listEl.append(listItemEl);

//?  видалення елементів
// removeChild, remove
// listEl.removeChild(listEl.children[1]);
// listEl.remove();

// дорогі операції

//оптимізація

// task

const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "laptop",
  },
];

// функція для створення карточки makeGalleryCard(cardInfo);

const galleryListEl = document.querySelector(".js-gallery");

const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery-item");

  const galleryImgEl = document.createElement("img");
  galleryImgEl.src = url;
  galleryImgEl.alt = alt;
  galleryImgEl.width = width;
  galleryImgEl.height = height;

  return galleryItemEl;
};

const galleryItemsEl = pictures.map((el) => makeGalleryCard(el));

galleryListEl.append(...galleryItemsEl);
