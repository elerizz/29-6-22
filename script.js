import { q, createCard } from "./utils.js";
import { GET, POST, DELETE } from "./api.js";

const BASE_URL = "https://edgemony-backend.herokuapp.com/series";
const addSerieBtnEl = q(".add-serie");
const removeSerieBtnEl = q(".remove-serie");
const deleteInputEl = q(".delete");

const body = {
  favorite: false,
  genres: ["scifi"],
  // id: "a0e2e984-f971-44cf-b033-cd49bfdb965b",
  new: false,
  poster: "https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg",
  rating: 50,
  seasons: 4,
  title: "Rick e Morty",
};

GET(BASE_URL).then((data) => {
  data.map((serie) => {
    const imgOrPlaceholder = serie.poster || "https://picsum.photos/200/300";

    try {
      // if (!serie.description) {
      //   throw new Error('La serie non contiene una descrizione');
      // }
      createCard(document.body, imgOrPlaceholder, serie.title, serie.id);
    } catch (error) {
      console.log(error);
    }
  });
});

addSerieBtnEl.addEventListener("click", () => {
  const titleInputEl = q(".title").value;
  const posterInputEl = q(".poster").value;
  const yearInputEl = q(".year").value;

  const body = {
    title: titleInputEl,
    poster: posterInputEl,
    year: yearInputEl,
  };
  POST(BASE_URL, body).then(() => location.reload());
});

//   POST(BASE_URL, body).then(() => location.reload());

// ------------ il nuovo DELETE tramite funzione async/await, il vecchio sta sopra commentato a riga 43
deleteInputEl.addEventListener("input", (eventInput) => {
  removeSerieBtnEl.addEventListener("click", (eventClick) => {
    DELETE(BASE_URL, eventInput.target.value).then(() => location.reload());
  });
});
