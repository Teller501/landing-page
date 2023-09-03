import './App.css';
import NavbarE from './Navbar';
import Hero from './Hero';
import About from './About';

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
