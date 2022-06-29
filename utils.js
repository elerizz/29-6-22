const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = c("div");
  const titleEl = c("h3");
  const priceEl = c("p");
  const imgEl = c("img");
  const yearEl = c("p");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";
  yearEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;
  yearEl.textContent = year;

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(wrapperEl);
};

export { c, createCard, q };
