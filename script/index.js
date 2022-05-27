
// Объявить переменную модального окна в текущей области видимости
let modal = document.getElementById('myModal');
// Переменная кнопки, открывающей модальное окно
let btn = document.getElementsByClassName('button');
// Получение элемента <span>, который закрывает модальное окно
let span = document.getElementsByClassName('close')[0];
// Когда пользователь нажимает кнопку, открывается pop-up форма 

function btnBlock() {
  modal.style.display = 'block';
  }
  for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click", btnBlock, false);   
}

// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.addEventListener('click', spanNone);
function spanNone() {
  modal.style.display = 'none';
  }

// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.addEventListener('click', function(event) {
  if (event.target == modal) {
  modal.style.display = 'none';
  }
  })


/* -----------------API-------------------- */
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

/* -------------------END API---------------------  */

/*----------------------Menu--------------------*/

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  let dropdowns = document.getElementsByClassName("dropdown-content");
  let i;
  for (i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

/*----------------------END Menu--------------------*/

/*----------------------LocalStorage--------------------*/
let mailData = [];
const emailAdd = function() {
  let email = this.closest('.email'),
      inputEmail = email.querySelector('input[name="mail"]').value; 

      if ( inputEmail.length == 0 || inputEmail.length == ' ')
      return;

      let base = {
        mail:inputEmail
      };
      console.log(inputEmail);
      mailData.push(base);
      localStorage.setItem('mailData', JSON.stringify(mailData));
}

let buttonAdd = document.querySelector('.email');
if(buttonAdd)buttonAdd.addEventListener('click', emailAdd);
/*----------------------END LocalStorage--------------------*/

document.getElementsByClassName('line').forEach((elem) => {

  elem.onmouseenter =
  elem.onmouseleave = (e) => {

      const tolerance = 5

      const left = 0
      const right = elem.clientWidth

      let x = e.pageX - elem.offsetLeft

      if (x - tolerance < left) x = left
      if (x + tolerance > right) x = right

      elem.style.setProperty('--x', `${ x }px`)

  }

})


// let formData = [];
// const formAdd = function() {
//   let formSend = this.closest('.decor'),
//       firstName = formSend.querySelector('input[name="FirstName"]').value;
//       lastName = formSend.querySelector('input[name="LastName"]').value;
//       tel = formSend.querySelector('input[name="tel"]').value;
//       inputEmail2 = formSend.querySelector('input[name="mail1"]').value; 
//       arrival = formSend.querySelector('input[name="arrival"]').value; 
//       departure = formSend.querySelector('input[name="departure"]').value; 
//       num = formSend.querySelector('input[name="num"]').value; 
//       numCh = formSend.querySelector('input[name="numCh"]').value; 
//       area = formSend.querySelector('input[name="area"]').value; 

//       let baseForm = {
//         firstName1:firstName,
//         lastName1:lastName,
//         phone:tel,
//         Email:inputEmail2,
//         arrival1:arrival,
//         departure1:departure,
//         num1:num,
//         numCh1:numCh,
//         area1: area
//       };

//       console.log(baseForm);
//       formData.push(baseForm);
//       // localStorage.setItem('mailData', JSON.stringify(mailData));
// }
// let buttonSend = document.querySelector('input[name="send"]');
// if(buttonSend)buttonSend.addEventListener('click', formAdd);
