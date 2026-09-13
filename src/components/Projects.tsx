import { Github, ExternalLink, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ragPipelineSteps = [
  { title: "User Query", subtitle: "Input" },
  { title: "Embeddings", subtitle: "HuggingFace" },
  { title: "Vector Search", subtitle: "FAISS" },
  { title: "Context", subtitle: "Relevant Docs" },
  { title: "LLM", subtitle: "Gemini 2.5 Flash" },
  { title: "Response", subtitle: "Streamlit" },
];

const cnnPipelineSteps = [
  { title: "Image Input", subtitle: "Upload" },
  { title: "Preprocessing", subtitle: "Resize / Normalize" },
  { title: "CNN Model", subtitle: "TensorFlow / Keras" },
  { title: "Classification", subtitle: "Fire / No Fire" },
  { title: "Result", subtitle: "Flask Web App" },
];

const agentPipelineSteps = [
  { title: "Region Input", subtitle: "User" },
  { title: "Agent Controller", subtitle: "GPT-OSS 120B" },
  { title: "Fire Data", subtitle: "NASA FIRMS" },
  { title: "Weather", subtitle: "Open-Meteo" },
  { title: "Risk + Threat", subtitle: "Scoring" },
  { title: "Response Plan", subtitle: "Adaptive" },
  { title: "Report", subtitle: "EN / RU" },
];

const projects = [
  {
    title: "ORMÁN-Ops",
    description:
      "An autonomous agent for wildfire emergency operations in Kazakhstan. You give it a region; it fetches live satellite fire data and weather, assesses the risk, decides whether the situation needs emergency response or preventive readiness, and writes the operational report itself.",
    architectureType: "agent",
    builtWith: ["Python", "FastAPI", "Groq LPU", "React", "Leaflet", "Docker"],
    howItWorks: [
      "Runs six tools in sequence: fire data, weather, regional risk, threat analysis, response planning, report generation",
      "Adapts its own plan — emergency response when fires are detected, preventive assessment when they are not",
      "Live data from NASA FIRMS VIIRS satellites and the Open-Meteo weather API",
      "Every reasoning step is shown to the user, so no decision is hidden",
    ],
    performance: [
      "Full region assessment in about 60 seconds across six tool calls",
      "Bilingual operational report (English / Russian) with resource allocation and wind-based spread direction",
      "Covers 4 fire-prone forest areas and 13 administrative regions of Kazakhstan",
    ],
    learningSkills: ["Agentic AI", "LangGraph", "Multi-Agent Systems"],
    github: "https://github.com/afsanarhea/orman-ops",
    liveDemo: "https://orman-ops.onrender.com",
    status: "completed",
  },
  {
    title: "EcoBot",
    description:
      "A chatbot that helps users take care of their plants. You ask a question, it searches through plant care guides, finds the most relevant information, and gives you a clear answer.",
    architectureType: "rag",
    builtWith: ["Python", "LangChain", "FAISS", "Gemini API", "Streamlit", "HuggingFace"],
    howItWorks: [
      "Searches plant care documents using FAISS (vector database)",
      "Generates answers using Google Gemini 2.5 Flash",
      "Converts text to embeddings using HuggingFace Sentence Transformers",
      "Web interface built with Streamlit",
      "Migrated the LLM backend from GROQ Llama 3.3 to Gemini 2.5 Flash without changing the retrieval layer",
    ],
    performance: [
      "Retrieval in about 0.05 s; full answer in 2-5 s",
      "Used as the test subject for a five-platform LLM observability study (LangSmith, Langfuse, PromptFoo, DeepEval, Arize Phoenix)",
    ],
    upcoming: [
      "Multi-model fallback — if one free API stops working, another takes over automatically",
      "Premium tier — users can pay for better AI models",
    ],
    learningSkills: ["Agentic AI", "LangGraph", "FastAPI"],
    github: "https://github.com/afsanarhea/EcoBot",
    liveDemo: "https://ecobot-afsanarhea.streamlit.app/",
    status: "completed",
  },
  {
    title: "Fire Detection",
    description:
      "A fire detection system using CNN for binary image classification.",
    architectureType: "cnn",
    builtWith: ["Python", "TensorFlow", "Keras", "Flask"],
    performance: [
      "Training Accuracy: 98.25%",
      "Testing Accuracy: 97.00%",
      "Dataset: 1000 images (Kaggle Fire Dataset)",
    ],
    futureScope: [
      "Model upgrade (ResNet, MobileNet)",
      "Satellite data integration",
      "Kazakhstan-specific dataset",
    ],
    github: "https://github.com/afsanarhea/Fire-Detection",
    liveDemo: "https://huggingface.co/spaces/Afsana01/fire-detection#/",
    status: "completed",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Projects
          </h2>

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
                  {project.status === "upcoming" && (
                    <>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30">
                        Upcoming
                      </span>
                      <Clock className="text-primary" size={16} />
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                {project.architectureType === "rag" && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-2">RAG Architecture</h4>
                    <p className="text-xs text-muted-foreground mb-4">Retrieval-Augmented Generation Pipeline</p>
                    <div className="flex items-center justify-start gap-1.5 overflow-x-auto pb-2">
                      {ragPipelineSteps.map((step, index) => (
                        <div key={step.title} className="flex items-center gap-1.5 flex-shrink-0">
                          <div className="bg-card border border-border rounded px-2 py-1.5 text-center">
                            <p className="text-xs font-medium text-foreground whitespace-nowrap">{step.title}</p>
                            <p className="text-[10px] text-muted-foreground whitespace-nowrap">{step.subtitle}</p>
                          </div>
                          {index < ragPipelineSteps.length - 1 && (
                            <ArrowRight className="text-muted-foreground flex-shrink-0" size={12} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.architectureType === "agent" && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-2">Agent Architecture</h4>
                    <p className="text-xs text-muted-foreground mb-4">Autonomous Tool-Calling Pipeline</p>
                    <div className="flex items-center justify-start gap-1.5 overflow-x-auto pb-2">
                      {agentPipelineSteps.map((step, index) => (
                        <div key={step.title} className="flex items-center gap-1.5 flex-shrink-0">
                          <div className="bg-card border border-border rounded px-2 py-1.5 text-center">
                            <p className="text-xs font-medium text-foreground whitespace-nowrap">{step.title}</p>
                            <p className="text-[10px] text-muted-foreground whitespace-nowrap">{step.subtitle}</p>
                          </div>
                          {index < agentPipelineSteps.length - 1 && (
                            <ArrowRight className="text-muted-foreground flex-shrink-0" size={12} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.architectureType === "cnn" && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-2">CNN Architecture</h4>
                    <p className="text-xs text-muted-foreground mb-4">Image Classification Pipeline</p>
                    <div className="flex items-center justify-start gap-1.5 overflow-x-auto pb-2">
                      {cnnPipelineSteps.map((step, index) => (
                        <div key={step.title} className="flex items-center gap-1.5 flex-shrink-0">
                          <div className="bg-card border border-border rounded px-2 py-1.5 text-center">
                            <p className="text-xs font-medium text-foreground whitespace-nowrap">{step.title}</p>
                            <p className="text-[10px] text-muted-foreground whitespace-nowrap">{step.subtitle}</p>
                          </div>
                          {index < cnnPipelineSteps.length - 1 && (
                            <ArrowRight className="text-muted-foreground flex-shrink-0" size={12} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.builtWith && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Built with:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech) => (
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

                {project.howItWorks && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">How it works:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.howItWorks.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.upcoming && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Upcoming:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.upcoming.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.performance && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Performance:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.performance.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.futureScope && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Upgrades:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.futureScope.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.learningSkills && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Skills I'm learning for this:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.learningSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}



                {(project.github || project.liveDemo) && (
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
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
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
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

export default Projects;