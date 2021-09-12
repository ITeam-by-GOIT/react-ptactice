import React from 'react';
import s from './homePage.module.css';
import Header from '../../components/header/Header';
import heroData from '../../components/hero/hero.json';
import Hero from '../../components/hero/Hero.jsx';
import principlesData from '../../components/principles/principles.json';
import Principles from '../../components/principles/Principles.jsx';
import Contacts from '../../components/contacts/Contacts.jsx';
import Klient from '../../components/klients/Klient.jsx';
import klientData from '../../components/klients/klient-data.json';
// import logo from '../../logo.svg';

function HomePage() {
  return (
    <div className={s.homePage}>
      <Header />
      <Hero props={heroData} />
      <Principles props={principlesData} />
      <Contacts />
      <Klient props={klientData} />
    </div>
  );
}

export default HomePage;
