let doc = document;
let footer = doc.querySelector('footer');
footer.innerHTML = `<div>
<p>Newsletter</p>
<div class="email">
     <input type="email" name="mail" placeholder="Email Adrdess">
     <button class="add_email">&xrarr;</button>
</div>
<p>Sign up to our newsletter for special things and receive <br /> 10% off your next order.</p>
<p>© 2021 The Glass Huts</p>
</div>
<div>
<div class="footer_link">
     <a href="#">TERMS AND CONDITIONS</a>
     <a href="#">CENCELLATION POLICY</a>
     <a href="#">PRIVACY POLICY</a>
</div>
<div class="card">
 <a href="#"><i class="ico ico_card1"></i></a>
 <a href="#"><i class="ico ico_card2"></i></a>
 <a href="#"><i class="ico ico_card3"></i></a>
 <a href="#"><i class="ico ico_card4"></i></a>
</div>
</div>`;
let hotel = doc.getElementsByClassName('hotel');
hotel.appendChild('footer');