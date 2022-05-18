// import {comments} from "./comments.js"

// Объявить переменную модального окна в текущей области видимости
let modal = document.getElementById('myModal');
// Переменная кнопки, открывающей модальное окно
let btn = document.getElementById('myBtn');
// Получение элемента <span>, который закрывает модальное окно
let span = document.getElementsByClassName('close')[0];
// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.addEventListener('click', btnBlock);
function btnBlock() {
  modal.style.display = 'block';
  }

// btn.onclick = function() {
// modal.style.display = 'block';
// }
// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.addEventListener('click', spanNone);
function spanNone() {
  modal.style.display = 'none';
  }
// span.onclick = function() {
// modal.style.display = 'none';
// }
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.addEventListener('click', function(event) {
  if (event.target == modal) {
  modal.style.display = 'none';
  }
  })

// window.onclick = function(event) {
// if (event.target == modal) {
// modal.style.display = 'none';
// }
// }



// let url ='https://jsonplaceholder.typicode.com/comments/1';
// async function comments(){
//   return await fetch(url)
//   .then(response => response.json())
//   .then(json => console.log(json.email))
// }
// comments();

/* ------------------------------------- */
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('clients');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let div = createNode('div');
    let img = createNode('img');
    let p = createNode('p');
    img.src = author.picture.medium;
    p.innerHTML = `${author.name.first} ${author.name.last}`;
    append(div, img);
    append(div, p);
    append(ul, div);
  })
})
.catch(function(error) {
  console.log(error);
});

/* ----------------------------------------  */