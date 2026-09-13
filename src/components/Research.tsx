import { Github, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchItems = [
  {
    title: "Remote Sensing & Geospatial ML",
    description:
      "Applied research on Sentinel-2 and Google Earth Engine workflows for land cover and environmental monitoring in Kazakhstan, with QGIS-based validation and spatial analysis at the Artificial Intelligence and Robotics Laboratory, Al-Farabi KazNU.",
    builtWith: ["Google Earth Engine", "Sentinel-2", "QGIS", "Python"],
    howItWorks: [
      "Collect and preprocess multispectral imagery for study regions",
      "Derive spectral indices and classification features in Earth Engine",
      "Validate outputs and produce interpretable maps in QGIS",
    ],
    performance: [
      "Supports lab work on fire-prone regions, land use change, and environmental monitoring",
    ],
    status: "completed",
  },
  {
    title: "LLM Systems — RAG, Agents, and Security",
    description:
      "Research on retrieval-augmented generation, agentic tool use, and LLM security—including a five-platform observability comparison on EcoBot and multi-layer prompt-injection defenses for Digital Farabi 2026.",
    builtWith: ["LangChain", "LangGraph", "RAG", "FAISS", "prompt engineering", "LLM evaluation"],
    howItWorks: [
      "Design and evaluate RAG pipelines with vector retrieval and hosted LLMs",
      "Instrument agents with tool calling and trace logging for operational scenarios",
      "Test layered defenses across OWASP LLM risk categories (injection, disclosure, prompt leakage)",
    ],
    performance: [
      "Observability study across LangSmith, Langfuse, PromptFoo, DeepEval, and Arize Phoenix",
      "Perceptron.0 CTF: 41/41 live score; 18/18 attacks blocked; hook time 7.3 ms (100 ms limit)",
    ],
    github: "https://github.com/afsanarhea/Perceptron.0",
    status: "completed",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Research
          </h2>

          <div className="mt-10 space-y-8">
            {researchItems.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.status === "upcoming" && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                        Upcoming
                      </span>
                      <Clock className="text-primary" size={16} />
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{item.description}</p>

                {item.builtWith && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Built with:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.builtWith.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.howItWorks && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">How it works:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {item.howItWorks.map((bullet, index) => (
                        <li key={index}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.performance && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Performance:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {item.performance.map((bullet, index) => (
                        <li key={index}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(item.github || item.liveDemo) && (
                  <div className="flex gap-4">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-primary gap-2"
                        >
                          <Github size={16} />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {item.liveDemo && (
                      <a
                        href={item.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:text-primary gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      </a>
                    )}
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

export default Research;
