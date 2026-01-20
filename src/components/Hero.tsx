import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Afsana Alamgir Rhea
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Computer Engineering Student | AI/ML
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Exploring GenAI and deep learning through real-world projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              onClick={scrollToProjects}
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 gap-2"
            >
              View Projects
              <ArrowDown size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
