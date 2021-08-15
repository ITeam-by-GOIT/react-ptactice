import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import heroData from './components/hero/hero.json';
import Hero from './components/hero/Hero.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero props={heroData} />
    </div>
  );
}

export default App;
