import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
