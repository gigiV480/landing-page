import Header from "./layout/Header"
import Hero from "./components/hero/Hero"
import Packages from "./components/packages/Packages"
import Testimonials from "./components/testimonials/Testimonials"
import Faq from "./components/FAQ/Faq"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <div>
      <Header />
  
      <div id="hero">
        <Hero />
      </div>
  
      <div id="packages">
        <Packages />
      </div>
  
      <div id="testimonials">
        <Testimonials />
      </div>
  
      <div id="faq">
        <Faq />
      </div>
  
      <Footer />
    </div>
  );
  
}

export default App
