import { Code2, Brain, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "SQL", "Data Structures & Algorithms"],
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["TensorFlow / Keras", "LangChain", "RAG Systems", "FAISS", "Probability & Statistics"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["Flask", "Streamlit"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">02.</span> Skills
          </h2>
          <div className="h-px bg-border flex-1 ml-4 inline-block w-48" />
          
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
              >
                <category.icon className="text-primary mb-4" size={24} />
                <h3 className="font-medium text-foreground mb-3">{category.title}</h3>
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

export default Skills;
