import { FolderKanban, Code, Rocket, Shield, Globe, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Projects = () => {
  const technicalProjects = [
    {
      title: "Personal Portfolio Website",
      status: "Ongoing",
      icon: Globe,
      description: "Full-stack design with HTML, CSS, JS. Responsive, modern UI, deployable. Will serve as base for future projects.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
  ];

  const aerospaceProjects = [
    {
      title: "Active Plasma Magnetic Shielding System",
      status: "Conference Project",
      icon: Shield,
      description: "Theoretical concept for spacecraft radiation shielding. Explores plasma behavior, electromagnetic shielding principles, and feasibility study for protecting astronauts during deep space missions.",
      technologies: ["Plasma Physics", "Electromagnetic Shielding", "Radiation Protection", "Feasibility Analysis"],
    },
  ];

  const ProjectCard = ({ project, index }: { project: typeof technicalProjects[0]; index: number }) => (
    <div className="glass-card p-6 card-hover group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <project.icon className="w-6 h-6 text-primary" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-display ${
          project.status === "Ongoing"
            ? "bg-primary/10 text-primary"
            : "bg-secondary/10 text-secondary"
        }`}>
          {project.status}
        </span>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-3">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground border border-border/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={FolderKanban}
            title="Projects"
            subtitle="Technical and aerospace projects showcasing innovation and learning"
          />

          {/* Technical Projects */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">Technical Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Aerospace Projects */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">Aerospace & Science Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {aerospaceProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="glass-card p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Future Project Ideas</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Experimental Rockets",
                  "Telemetry Modules",
                  "Propulsion Analysis",
                  "Flight Simulations",
                  "Campus E-commerce Website",
                  "Plasma Shielding Concepts",
                ].map((idea, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground border border-primary/20"
                  >
                    {idea}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
