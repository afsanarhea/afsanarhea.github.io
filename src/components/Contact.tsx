import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">04.</span> Get In Touch
          </h2>
          <div className="h-px bg-border w-48 mx-auto mt-2" />

          <p className="mt-8 text-muted-foreground leading-relaxed">
            I'm currently looking for internship opportunities and I'm always open 
            to connecting with fellow developers and researchers. Whether you have 
            a question, want to collaborate on a project, or just want to say hi, 
            feel free to reach out!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-transparent border border-primary text-primary hover:bg-primary/10 gap-2 min-w-[160px]"
              onClick={() => window.open("mailto:your.email@example.com", "_blank")}
            >
              <Mail size={16} />
              Email Me
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary gap-2 min-w-[160px]"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github size={16} />
              GitHub
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary gap-2 min-w-[160px]"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin size={16} />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
