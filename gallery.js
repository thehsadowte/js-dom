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

  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.href = "#";
  galleryLinkEl.append(galleryImgEl);

  galleryItemEl.append(galleryLinkEl);

  return galleryItemEl;
};

// const galleryItemEl = makeGalleryCard(pictures[0]);
// galleryListEl.append(galleryItemEl);

const galleryItemsEl = pictures.map((el) => makeGalleryCard(el));

galleryListEl.append(...galleryItemsEl);
