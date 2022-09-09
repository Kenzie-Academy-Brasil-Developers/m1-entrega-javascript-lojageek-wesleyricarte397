let listPaintings = [];
let listActions = [];

function separateItems(arr, listP, listA) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type == "paintings") {
      listP.push(arr[i]);
    } else if (arr[i].type == "actions") {
      listA.push(arr[i]);
    }
  }
}

separateItems(items, listPaintings, listActions);
// console.log(listPaintings);
// console.log(listActions);

const tagUlPaintings = document.querySelector(".menuPaintings");
// console.log(tagUlPaintings);
const tagUlActions = document.querySelector(".menuActions");
// console.log(tagUlActions);

function createCard(list, ul) {
  const li = document.createElement("li");
  li.classList.add("productCard");
  li.innerHTML = `
      <div class="divImg">
        <img
        class="itemImg"
        src= "${list.image}"
        alt="${list.name}">
      </div>
      <section class="itemDescription">
        <h3 class="itemName">${list.name}</h3>
        <p class="itemValue">${list.price}</p>
      </section>`;
  ul.appendChild(li);
}

function searchMenu(arr, ul) {
  for (let i = 0; i < arr.length; i++) {
    createCard(arr[i], ul);
  }
}

searchMenu(listPaintings, tagUlPaintings);
searchMenu(listActions, tagUlActions);