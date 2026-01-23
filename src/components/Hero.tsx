import { ArrowDown, Code2, Brain, Globe, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "SQL", "DSA"],
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["TensorFlow", "LangChain", "RAG", "FAISS"],
  },
  {
    icon: Globe,
    title: "Web",
    skills: ["Flask", "Streamlit"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "HuggingFace"],
  },
];

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Afsana Alamgir Rhea
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              RAG systems. Computer vision. Deployed and working.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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

          {/* Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card/50 border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <category.icon className="text-primary mb-3" size={24} />
                <h3 className="font-medium text-foreground text-base mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
