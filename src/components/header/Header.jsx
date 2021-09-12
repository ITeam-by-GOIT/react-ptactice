import React from 'react';
import Navigation from '../navigation/navigation';
import style from './header.module.css';
function Header(props) {
  return (
    <header>
      <a href="tel:+78124016495">+7 (812) 401-64-95</a>
      <button>Обратный звонок</button>
      <div className={style.navigation}>
        <Navigation />
      </div>
    </header>
  );
}
export default Header;
