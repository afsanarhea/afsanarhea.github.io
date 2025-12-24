import { GraduationCap, MapPin, Languages } from "lucide-react";

const About = () => {
  const languages = ["English", "Bengali", "Hindi"];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="h-px bg-border flex-1 ml-4 inline-block w-48" />
          
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a 2nd year Computer Engineering student passionate about AI/ML and 
                building solutions that contribute to mankind. My journey into tech 
                started with curiosity about how intelligent systems work, and now 
                I'm diving deep into machine learning and RAG systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm preparing for FAANG internships while strengthening 
                my skills in Data Structures & Algorithms and machine learning. I believe 
                in learning by building, which is why I focus on practical projects 
                that solve real problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Bangladeshi international student on scholarship in Kazakhstan, 
                I've learned to adapt quickly and thrive in diverse environments.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="text-primary" size={20} />
                  <h3 className="font-medium text-foreground">Education</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Al-Farabi Kazakh National University
                </p>
                <p className="text-sm text-muted-foreground">
                  Computer Engineering
                </p>
                <p className="text-sm text-primary mt-1">2024 - 2028</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-primary" size={20} />
                  <h3 className="font-medium text-foreground">Location</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Almaty, Kazakhstan
                </p>
                <p className="text-sm text-muted-foreground">
                  From Bangladesh
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Languages className="text-primary" size={20} />
                  <h3 className="font-medium text-foreground">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
