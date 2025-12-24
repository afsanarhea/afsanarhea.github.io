import { Github, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EcoBot",
    label: "Team Project",
    description:
      "AI-powered greenhouse monitoring system combining computer vision and NLP for plant health inspection.",
    role: "Built the RAG-powered chatbot using FAISS and GROQ's Llama 3.3 70B model, designed the Streamlit dashboard, created custom knowledge base, and integrated video analysis with chatbot interface.",
    techStack: ["Python", "Streamlit", "FAISS", "GROQ API", "LangChain"],
    github: "#",
    status: "completed",
  },
  {
    title: "Forest Fire Detection System",
    label: "Upcoming",
    description:
      "AI-powered forest fire detection system for Kazakhstan using satellite/camera imagery and RAG system.",
    role: "Planning phase - Currently learning required AI/ML skills to build this project.",
    vision:
      "Early fire detection to save forests and lives in Kazakhstan's vulnerable regions.",
    techStack: ["Python", "PyTorch", "Computer Vision", "RAG"],
    status: "upcoming",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">03.</span> Projects
          </h2>
          <div className="h-px bg-border flex-1 ml-4 inline-block w-48" />

          <div className="mt-10 space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      project.status === "upcoming"
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {project.label}
                  </span>
                  {project.status === "upcoming" && (
                    <Clock className="text-primary" size={16} />
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    {project.status === "upcoming" ? "Current Status:" : "My Role:"}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>

                {project.vision && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Vision:</h4>
                    <p className="text-sm text-muted-foreground italic">{project.vision}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.status === "completed" && (
                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary gap-2"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
