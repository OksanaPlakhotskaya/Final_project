// Объявить переменную модального окна в текущей области видимости
let modal = document.getElementById('myModal');
// Переменная кнопки, открывающей модальное окно
let btn = document.getElementById('myBtn');
// Получение элемента <span>, который закрывает модальное окно
let span = document.getElementsByClassName('close')[0];
// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
modal.style.display = 'block';
}
// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.onclick = function() {
modal.style.display = 'none';
}
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
}