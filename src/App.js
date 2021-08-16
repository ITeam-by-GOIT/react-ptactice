import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import heroData from './components/hero/hero.json';
import Hero from './components/hero/Hero.jsx';
import principlesData from './components/principles/principles.json';
import Principles from './components/principles/Principles.jsx';
import Klient from './components/klients/Klient.jsx';
import klientData from './components/klients/klient-data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero props={heroData} />
      <Principles props={principlesData} />
      <Klient props ={klientData}/>

    </div>
  );
}

export default App;
