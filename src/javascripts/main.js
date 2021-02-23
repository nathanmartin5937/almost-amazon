import checkLoginStatus from './helpers/router';

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const books = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bookBuilder = () => {
  let domString = "";
  books.forEach((item, i) => {
    domString += `<div id="${i}" class="card">
            <div class="card-body">
                  <p class="cardText">${item.bookTitle}</p>
                  <p class="cardText">${item.imageUrl}</p>
                  <p class="cardText">${item.price}</p>
                  <p class="cardText">${item.author}</p>
                  <button type="button" id="${i}" class="btn btn-primary" id="deleteBtn">Delete</button>
            </div>
          </div>`
  });

  printToDom("#bookCard", domString);
};

const pullForm = (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector("#bookTitle").value;
  const imageUrl= document.querySelector('#imageUrl').value;
  const price = document.querySelector("#price").value;
  const author = document.querySelector("#author").value;

  const objects = {
    bookTitle,
    imageUrl,
    price,
    author,
  };

  books.push(objects);
  pinBuilder(books);
  document.querySelector('form').reset();
};

const clickEvents = () => {
  document.querySelector("#infoForm").addEventListener("submit", pullForm);
};

const init = () => {
  clickEvents();
  bookBuilder();
  checkLoginStatus();
};

init();
