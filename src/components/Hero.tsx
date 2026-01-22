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
        <div className="max-w-2xl mx-auto text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Afsana Alamgir Rhea
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            RAG systems. Computer vision. Deployed and working.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Exploring GenAI and deep learning through real-world projects.
          </p>
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="sm"
              className="text-primary border-primary/50 hover:bg-primary/10 gap-2"
            >
              View Projects
              <ArrowDown size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
