import React from 'react';
import './footer.scss';
import Logo from './restaurant.png'

function Footer(){
return(
  <footer>
    <div id="footer-image-container" >
      <img src={Logo} alt="Podgląd niedostępny"></img>
    </div>
    <div id="footer-text">
      <p>© 2020 lunchapp.pl</p>
      <p>Wszystkie prawa zastrzeżone</p>
      <p>Kopiowanie i rozpowszechnianie bez zgody autora niniejszej strony jest zabronione</p>
    </div>
  </footer>
)
}

export default Footer;