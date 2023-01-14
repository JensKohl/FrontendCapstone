import Header from './Header';
import Hero from './Hero';
import Specials from './Specials.js';
import About from './About';
import Footer from './Footer';


function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Specials />
      <Footer />
    </div>
  );
}

export default Home;