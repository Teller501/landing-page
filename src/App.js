import './App.css';
import NavbarE from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <section id="navbar">
        <NavbarE />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default App;
