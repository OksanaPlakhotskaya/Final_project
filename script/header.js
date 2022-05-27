// function myHeader() {
let header = document.querySelector('header');
header.innerHTML = `<div class="nav">
<div class="logo"><i class="ico ico-logo_header"></i></div>
<nav class="burger-nav">
    <ul>
        <li><a class='line' href="index.html">HOME</a></li>
        <li><a class='line' href="hut.html">THE HUT</a></li>
        <li><a class='line' href="area.html">THE AREA</a></li>
        <li><a class='line' href="about.html">ABOUT US</a></li>
    </ul>
</nav>
<div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">MENU</button>
    <div id="myDropdown" class="dropdown-content">
      <a href="index.html">HOME</a>
      <a href="hut.html">THE HUT</a>
      <a href="area.html">THE AREA</a>
      <a href="about.html">ABOUT US</a>
    </div>
  </div>

<button id='myBtn' class="button button_header">BOOK NOW</button>
</div>


<div id="myModal" class="modal">
<div class="modal-content">
<span class="close">&times;</span>
<form class="decor">
    <div class="form-left-decoration"></div>
    <div class="form-right-decoration"></div>
    <div class="circle"></div>
    <div class="form-inner">
    <h3>BOOK NOW</h3>
    <input type="text" name='FirstName' placeholder="FirstName">
    <input type="text" name='LastName' placeholder="LastName">
    <input type="phone" name='tel' placeholder="+375 44 7851189">
    <input type="email" name='mail1' placeholder="Email">
    <div class="book_date">
        <div>
            <label for="date">Arrival date </label>
            <input type="date" name='arrival' class="date" name="date"/>
        </div>
        <div>
            <label for="date">Departure date </label>
            <input type="date" name='departure' class="date" name="date"/>
        </div> 
    </div>
    <div class="book_guests">
        <div>
            <label for="date">Number of guests </label>
            <input type="number" name='num' placeholder="1">
        </div>
        <div>
            <label for="date">Children </label>
            <input type="number" name='numCh' placeholder="1">
        </div>
    </div>
    <textarea name='area' placeholder="Comments..." rows="3"></textarea>
    <input type="submit"  name='send' value="SEND">
    </div>
    </form>
</div>
</div>`;
let slider = document.getElementsByClassName('slider');
slider.insertAdjacentHTML('beforeBegin', 'header');
// }
// export default {myHeader};