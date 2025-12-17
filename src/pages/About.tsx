import { User, Heart, Rocket, Code, BookOpen, Moon, Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  const interests = [
    {
      category: "Aerospace & Space Engineering",
      icon: Rocket,
      items: [
        "Rocket design & fabrication",
        "Rocket propulsion",
        "Aero-thermodynamics",
        "Telemetry",
        "Spacecraft systems & controls",
        "Satellite tech",
        "Orbital mechanics",
        "Human spaceflight",
        "Space robotics",
      ],
    },
    {
      category: "Computing & Technology",
      icon: Code,
      items: [
        "Web development",
        "HTML, CSS, JS",
        "Backend basics",
        "Git/GitHub",
        "Cloud deployment",
        "Vibe coding",
      ],
    },
    {
      category: "Science & Learning",
      icon: BookOpen,
      items: [
        "Physics",
        "Mathematics",
        "Cosmology",
        "Universe studies",
        "Ethical and philosophical studies",
      ],
    },
    {
      category: "Islamic Science & Modern Arabic",
      icon: Moon,
      items: [
        "Qur'anic cosmology",
        "Classical Islamic scholarship",
        "Fiqh fundamentals",
        "Arabic grammar (Nahw/Sarf)",
        "Modern Arabic communication",
        "Comparative studies of Islamic & modern science",
      ],
    },
    {
      category: "Personal Development & Hobbies",
      icon: Dumbbell,
      items: [
        "Writing",
        "Journaling",
        "Reading",
        "Fitness",
        "Mentoring",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={User}
            title="About Me"
            subtitle="Aerospace enthusiast, aspiring space technologist, and lifelong learner"
          />

          {/* Bio */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card p-8">
              <h2 className="font-display text-xl text-primary mb-4">Biography</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">Hamza Swadiq.PK</span> — Aerospace Engineering 
                student at IIST (Indian Institute of Space Science and Technology), aspiring space technologist, 
                student of Islamic Science & Modern Arabic, and early-stage developer. Passionate about contributing 
                to India's space missions and human space exploration.
              </p>
              
              <h3 className="font-display text-lg text-primary mb-3">Family Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">Father:</span> Abdullah PK, <span className="text-foreground">Mother:</span> Maimoona P, 
                <span className="text-foreground"> Sisters:</span> Hafsa, Asma PK, <span className="text-foreground">Brother:</span> Muhammed Swalih PK. 
                Living in Kodinji, Malappuram, Kerala, India.
              </p>
            </div>
          </div>

          {/* Interests */}
          <h2 className="section-title text-center gradient-text mb-12">Areas of Interest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="glass-card p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <interest.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {interest.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {interest.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
