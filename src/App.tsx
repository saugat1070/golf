import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Operations from "./components/Operations";
import About from "./components/About";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-full bg-navy-950 font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Operations />
        <About />
        <Services />
        <Fleet />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
