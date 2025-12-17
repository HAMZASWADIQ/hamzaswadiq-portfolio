import { GraduationCap, Book, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Education = () => {
  const academicEducation = [
    { level: "KG", institution: "Al Irshad English Medium School", location: "Manalippuzha, Malappuram, Kerala" },
    { level: "Class 1-2", institution: "Panakkathayam LP School", location: "Kodinji, Malappuram, Kerala" },
    { level: "Class 3-7", institution: "Seethi Sahib Memorial English Medium School", location: "Theyyalingal, Malappuram, Kerala" },
    { level: "Class 8-10", institution: "Markaz Public School", location: "Aikarappady, Malappuram, Kerala" },
    { level: "Class 11-12", institution: "GHSS Koduvally", location: "Calicut, Kerala" },
    { level: "JEE Coaching", institution: "Carbon Gurukulam", location: "Calicut, Kerala" },
    { level: "B.Tech", institution: "IIST — Indian Institute of Space Science and Technology", location: "Thiruvananthapuram, Kerala" },
  ];

  const islamicEducation = [
    { level: "Class 1-8", institution: "Shamsul Huda Sunni Madrasa", location: "East-Nannambra, Malappuram, Kerala" },
    { level: "Graduation", institution: "Jamia Madeenathunnoor, Poonoor", program: "Islamic Science & Modern Arabic", location: "Poonoor, Kerala" },
  ];

  return (
    <Layout>
      <section className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            icon={GraduationCap}
            title="Education"
            subtitle="My academic journey from foundational years to specialized aerospace engineering"
          />

          {/* Academic Education */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Academic Education</h2>
            </div>

            <div className="relative pl-8">
              <div className="timeline-line" />
              <div className="space-y-8">
                {academicEducation.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="timeline-dot" />
                    <div className="glass-card p-6 ml-4 card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="text-primary font-display text-sm font-semibold">{edu.level}</span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                      <h3 className="text-foreground font-medium">{edu.institution}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Islamic/Moral Education */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Book className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">Moral / Islamic Education</h2>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary to-secondary/30" />
              <div className="space-y-8">
                {islamicEducation.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="w-3 h-3 rounded-full bg-secondary absolute left-[10px] top-2" style={{ boxShadow: "0 0 10px hsl(var(--secondary))" }} />
                    <div className="glass-card p-6 ml-4 card-hover border-secondary/20">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="text-secondary font-display text-sm font-semibold">{edu.level}</span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      </div>
                      <h3 className="text-foreground font-medium">{edu.institution}</h3>
                      {edu.program && (
                        <p className="text-muted-foreground text-sm mt-1">{edu.program}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
