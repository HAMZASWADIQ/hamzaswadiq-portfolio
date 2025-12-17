import { Briefcase, Building, FlaskConical, PenTool, Users, Microscope } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Internships = () => {
  const internships = [
    {
      title: "IIT Palakkad Summer Internship",
      organization: "Indian Institute of Technology Palakkad",
      icon: FlaskConical,
      highlights: [
        "Exposure to research methodology and lab experiments",
        "Hands-on learning in aerospace tools and sensors",
        "Data analysis and scientific experimentation",
        "Understanding of academic research environment",
      ],
      skills: ["Research Methodology", "Lab Experiments", "Data Analysis", "Scientific Tools"],
    },
    {
      title: "Resonance Journal Outreach Program",
      organization: "ISA Bangalore + IISER Thiruvananthapuram",
      icon: PenTool,
      highlights: [
        "Scientific content creation and research communication",
        "Mentorship from national-level researchers",
        "Writing and summarization skills development",
        "Science outreach and public engagement",
      ],
      skills: ["Science Communication", "Writing", "Research", "Outreach", "Summarization"],
    },
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={Briefcase}
            title="Internships"
            subtitle="Professional experiences that shaped my journey in aerospace and research"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="glass-card p-8 card-hover group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <internship.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {internship.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      {internship.organization}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-primary font-display text-sm mb-3 flex items-center gap-2">
                    <Microscope className="w-4 h-4" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {internship.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-primary font-display text-sm mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Internships;
