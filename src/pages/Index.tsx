import { useState, useRef } from "react";
import { ArrowRight, Rocket, Satellite, Cpu, User, Heart, Code, BookOpen, Moon, Dumbbell, GraduationCap, Book, MapPin, Trophy, Star, Award, Target, Briefcase, Building, FlaskConical, PenTool, Users, Microscope, FolderKanban, Shield, Globe, Zap, HelpCircle, Image, X, ChevronLeft, ChevronRight, Mail, Phone, Send, Github, Linkedin, Instagram, ExternalLink, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import heroImage from "@/assets/hero-portrait.png";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // About data
  const interests = [
    {
      category: "Aerospace & Space Engineering",
      icon: Rocket,
      items: ["Rocket design & fabrication", "Rocket propulsion", "Aero-thermodynamics", "Telemetry", "Spacecraft systems & controls", "Satellite tech", "Orbital mechanics", "Human spaceflight", "Space robotics"],
    },
    {
      category: "Computing & Technology",
      icon: Code,
      items: ["Web development", "HTML, CSS, JS", "Backend basics", "Git/GitHub", "Cloud deployment", "Vibe coding"],
    },
    {
      category: "Science & Learning",
      icon: BookOpen,
      items: ["Physics", "Mathematics", "Cosmology", "Universe studies", "Ethical and philosophical studies"],
    },
    {
      category: "Islamic Science & Modern Arabic",
      icon: Moon,
      items: ["Qur'anic cosmology", "Classical Islamic scholarship", "Fiqh fundamentals", "Arabic grammar (Nahw/Sarf)", "Modern Arabic communication", "Comparative studies of Islamic & modern science"],
    },
    {
      category: "Personal Development & Hobbies",
      icon: Dumbbell,
      items: ["Writing", "Journaling", "Reading", "Fitness", "Mentoring"],
    },
  ];

  // Education data
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

  // Achievements data
  const achievements = [
    { icon: Star, title: "Class 10 (SSLC)", description: "Full A+ Grade", highlight: "Perfect Score", color: "primary" },
    { icon: Award, title: "Class 12", description: "99.6% Marks", highlight: "Outstanding Performance", color: "secondary" },
    { icon: Target, title: "JEE Main", description: "99.1 Percentile", highlight: "Top 1%", color: "primary" },
    { icon: Trophy, title: "JEE Advanced", description: "OBC-NCL Rank 1659", highlight: "Elite Achievement", color: "secondary" },
    { icon: Rocket, title: "IIST Admission", description: "B.Tech Aerospace Engineering", highlight: "Dream Realized", color: "primary" },
  ];

  // Internships data
  const internships = [
    {
      title: "IIT Palakkad Summer Internship",
      organization: "Indian Institute of Technology Palakkad",
      icon: FlaskConical,
      highlights: ["Exposure to research methodology and lab experiments", "Hands-on learning in aerospace tools and sensors", "Data analysis and scientific experimentation", "Understanding of academic research environment"],
      skills: ["Research Methodology", "Lab Experiments", "Data Analysis", "Scientific Tools"],
    },
  ];

  // Projects data
  const technicalProjects = [
    { title: "Personal Portfolio Website", status: "Ongoing", icon: Globe, description: "Full-stack design with HTML, CSS, JS. Responsive, modern UI, deployable. Will serve as base for future projects.", technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"] },
  ];
  const aerospaceProjects = [
    { title: "Active Plasma Magnetic Shielding System", status: "Conference Project", icon: Shield, description: "Theoretical concept for spacecraft radiation shielding. Explores plasma behavior, electromagnetic shielding principles, and feasibility study for protecting astronauts during deep space missions.", technologies: ["Plasma Physics", "Electromagnetic Shielding", "Radiation Protection", "Feasibility Analysis"] },
  ];

  // FAQ data
  const faqs = [
    { question: "Why did you choose Aerospace Engineering?", answer: "Fascinated by space, rockets, and physics; wanted a field where curiosity and engineering meet. Aerospace is my purpose and allows contribution to human space exploration." },
    { question: "Why did you choose IIST even though you had opportunities in IITs?", answer: "IIST is India's premier space institute, directly linked with ISRO. It provides labs, curriculum, and opportunities aligned with my dream to work in India's space missions." },
    { question: "What are your long-term goals?", answer: "Contribute to ISRO missions in propulsion, telemetry, shielding, and spacecraft systems. Develop impactful technologies and grow as an engineer." },
    { question: "What motivates you the most?", answer: "Growth through consistent effort, contributing to space exploration, and balancing engineering with Islamic studies." },
    { question: "What subjects or topics are you most passionate about?", answer: "Rocket propulsion, spacecraft systems, telemetry, plasma physics, orbital mechanics, Islamic science, Modern Arabic." },
    { question: "What kind of projects do you want to build in the future?", answer: "Experimental rockets, telemetry modules, propulsion analysis, simulations, campus e-commerce website, plasma shielding concepts." },
    { question: "How do you balance engineering studies and Islamic studies?", answer: "Treat both as essential; engineering for scientific understanding, Islamic studies for meaning. Proper time management and intention ensures progress in both." },
  ];

  // Gallery data
  const categories = ["All", "Academics", "Internships", "Projects"];
  const galleryItems = [
    { id: 1, category: "All", title: "IIST Campus Photo", image: "https://i.ibb.co/dJjN3SCS/IIST-campus.jpg" },
    { id: 2, category: "Academics", title: "Plus Two Certificate", image: "https://i.ibb.co/mVThrhbq/plus-two-certificate.jpg" },
    { id: 3, category: "Internships", title: "IIT Palakkad Internship", image: "https://i.ibb.co/gFJzYFfw/IIT-Palakkad-internship.jpg" },
    { id: 4, category: "Projects", title: "Symposium Presentation", image: "https://i.ibb.co/PsGvv1Fr/symposium-presentation.jpg" },
  ];
  const filteredItems = selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);
  const openLightbox = (index: number) => setLightboxImage(index);
  const closeLightbox = () => setLightboxImage(null);
  const nextImage = () => setLightboxImage((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
  const prevImage = () => setLightboxImage((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));

  // Contact data
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hamzaswadiq007@gmail.com", href: "mailto:hamzaswadiq007@gmail.com" },
    { icon: Phone, label: "WhatsApp", value: "+91 8590480546", href: "https://wa.me/918590480546" },
    { icon: MapPin, label: "Location", value: "Painatt Kodassery House, Kodinji, Malappuram, Kerala", href: "https://goo.gl/maps/cSJsapPa1h8DzPU28?g_st=aw" },
  ];
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hamza-swadiq-pk-886712372" },
    { icon: Github, label: "GitHub", href: "https://github.com/HAMZASWADIQ" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/918590480546" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hxmza_swxdiq?igsh=MWo2MHFzNHNteTNpdQ==" },
  ];

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_qbnc0we",
        "template_qr9wazn",
        formRef.current!,
        "4auWXzKnHoeX2dDn-"
      );
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  const ProjectCard = ({ project }: { project: typeof technicalProjects[0] }) => (
    <div className="glass-card p-6 card-hover group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <project.icon className="w-6 h-6 text-primary" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Ongoing" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>{project.status}</span>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground border border-border/50">{tech}</span>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 stars-bg opacity-50" />
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <Rocket className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float opacity-30" style={{ animationDelay: "2s" }}>
          <Satellite className="w-12 h-12 text-secondary" />
        </div>
        <div className="absolute top-40 right-1/4 animate-float opacity-30" style={{ animationDelay: "4s" }}>
          <Cpu className="w-10 h-10 text-primary" />
        </div>
        
        {/* Decorative circles and shapes linking to hero image */}
        <div className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-48 h-48 rounded-full bg-gradient-to-tl from-secondary/20 to-transparent blur-2xl" />
        <div className="absolute top-1/2 right-[20%] w-32 h-32 border border-primary/20 rounded-full animate-pulse-glow" />
        <div className="absolute top-[40%] right-[5%] w-20 h-20 border border-secondary/30 rounded-full" />
        <div className="absolute bottom-[30%] right-[25%] w-16 h-16 bg-primary/10 rotate-45" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
            <div className="animate-slide-up order-2 lg:order-first">
              <p className="text-primary text-sm tracking-widest mb-4 italic">Hello, Assalamu Alaikum !!!</p>
              <p className="text-muted-foreground text-sm sm:text-base mb-2">I am</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                HAMZA SWADIQ
              </h1>
              
              {/* Hero Image - Mobile only (appears after name) */}
              <div className="relative animate-fade-in flex items-center justify-center my-6 lg:hidden">
                <div className="relative group animate-float-3d" style={{ perspective: '1000px' }}>
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/50 via-secondary/40 to-primary/50 rounded-[1.5rem] blur-2xl animate-pulse opacity-60" />
                  <div className="relative p-1 rounded-[1.5rem] bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-shift shadow-2xl shadow-primary/30">
                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-md" />
                    <div className="relative aspect-[4/5] h-[45vh] max-h-[400px] rounded-[1.3rem] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 z-10 pointer-events-none" />
                      <img
                        src={heroImage}
                        alt="Hamza Swadiq - Aerospace Engineering Student"
                        className="relative w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="absolute -right-4 top-1/4 w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDuration: '2s' }} />
                  <div className="absolute -left-4 bottom-1/3 w-2 h-2 bg-gradient-to-br from-secondary to-primary rounded-full animate-bounce shadow-lg shadow-secondary/50" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                </div>
              </div>

              <div className="inline-block bg-primary px-4 py-2 mb-6">
                <p className="text-xs sm:text-sm tracking-wider text-primary-foreground uppercase font-semibold">
                  Aerospace Engineering Student
                </p>
              </div>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                B.Tech Aerospace Engineering student at IIST, passionate about rocket propulsion, 
                telemetry, spacecraft systems, and Islamic science. Aspiring to contribute to ISRO 
                and human space exploration.
              </p>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Explore My Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Image - Desktop only */}
            <div className="relative animate-fade-in hidden lg:flex items-center justify-center lg:justify-end">
              <div className="relative group animate-float-3d" style={{ perspective: '1000px' }}>
                {/* Outer animated glow */}
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-primary/50 via-secondary/40 to-primary/50 rounded-[2rem] blur-3xl animate-pulse opacity-60" />
                
                {/* Main gradient border container */}
                <div className="relative p-1 rounded-[1.5rem] bg-gradient-to-br from-primary via-secondary to-primary animate-gradient-shift shadow-2xl shadow-primary/30">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-md" />
                  
                  {/* Main image container */}
                  <div className="relative aspect-[4/5] h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] max-h-[600px] rounded-[1.3rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 z-10 pointer-events-none" />
                    <img
                      src={heroImage}
                      alt="Hamza Swadiq - Aerospace Engineering Student"
                      className="relative w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Floating animated accents */}
                <div className="absolute -right-6 top-1/4 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full animate-bounce shadow-lg shadow-primary/50" style={{ animationDuration: '2s' }} />
                <div className="absolute -left-6 bottom-1/3 w-3 h-3 bg-gradient-to-br from-secondary to-primary rounded-full animate-bounce shadow-lg shadow-secondary/50" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                <div className="absolute -right-4 bottom-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
                <div className="absolute -left-4 top-1/3 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 px-4 z-20">
          <div className="container mx-auto flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <div className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Role Labels Section */}
      <section className="py-20 bg-space-deep">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Rocket, label: "Aerospace Engineering Student" },
              { icon: Satellite, label: "Cosmic Researcher" },
              { icon: Moon, label: "Islamic Science Graduate" },
              { icon: Cpu, label: "AI/ML & Logical Programmer" },
            ].map((role, index) => (
              <div key={index} className="glass-card p-6 text-center card-hover group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <role.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">{role.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={User} title="About Me" subtitle="Aerospace enthusiast, aspiring space technologist, and lifelong learner" />
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card p-8">
              <h2 className="text-xl text-primary mb-4 font-bold">Biography</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">Hamza Swadiq.PK</span> — Aerospace Engineering 
                student at IIST (Indian Institute of Space Science and Technology), aspiring space technologist, 
                student of Islamic Science & Modern Arabic, and early-stage developer.
              </p>
              <h3 className="text-lg text-primary mb-3 font-bold">Family Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">Father:</span> Abdullah PK, <span className="text-foreground">Mother:</span> Maimoona P, 
                <span className="text-foreground"> Sisters:</span> Hafsa, Asma PK, <span className="text-foreground">Brother:</span> Muhammed Swalih PK. 
                Living in Manalippuzha, Malappuram, Kerala, India.
              </p>
            </div>
          </div>

          <h2 className="section-title text-center gradient-text mb-12">Areas of Interest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="glass-card p-6 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <interest.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{interest.category}</h3>
                </div>
                <ul className="space-y-2">
                  {interest.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
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

      {/* Education Section */}
      <section id="education" className="py-20 relative bg-space-deep">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={GraduationCap} title="Education" subtitle="My academic journey from foundational years to specialized aerospace engineering" />

          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Academic Education</h2>
            </div>
            <div className="relative pl-8">
              <div className="timeline-line" />
              <div className="space-y-8">
                {academicEducation.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="timeline-dot" />
                    <div className="glass-card p-6 ml-4 card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="text-primary text-sm font-semibold">{edu.level}</span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{edu.location}
                        </span>
                      </div>
                      <h3 className="text-foreground font-medium">{edu.institution}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Book className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Moral / Islamic Education</h2>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary to-secondary/30" />
              <div className="space-y-8">
                {islamicEducation.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="w-3 h-3 rounded-full bg-secondary absolute left-[10px] top-2" style={{ boxShadow: "0 0 10px hsl(var(--secondary))" }} />
                    <div className="glass-card p-6 ml-4 card-hover border-secondary/20">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <span className="text-secondary text-sm font-semibold">{edu.level}</span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{edu.location}
                        </span>
                      </div>
                      <h3 className="text-foreground font-medium">{edu.institution}</h3>
                      {edu.program && <p className="text-muted-foreground text-sm mt-1">{edu.program}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={Trophy} title="Achievements" subtitle="Milestones and accomplishments throughout my academic journey" />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 hidden md:block" />
              <div className="space-y-8 md:space-y-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="glass-card p-6 card-hover inline-block w-full">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${achievement.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>{achievement.highlight}</span>
                        <h3 className="text-lg font-bold text-foreground mb-1">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${achievement.color === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"} animate-glow`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 relative bg-space-deep">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={Briefcase} title="Internships" subtitle="Professional experiences that shaped my journey in aerospace and research" />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {internships.map((internship, index) => (
              <div key={index} className="glass-card p-8 card-hover group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <internship.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{internship.title}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <Building className="w-4 h-4" />{internship.organization}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-primary text-sm mb-3 flex items-center gap-2 font-semibold">
                    <Microscope className="w-4 h-4" />Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {internship.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />{highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary text-sm mb-3 flex items-center gap-2 font-semibold">
                    <Users className="w-4 h-4" />Skills Gained
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground border border-border/50">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={FolderKanban} title="Projects" subtitle="Technical and aerospace projects showcasing innovation and learning" />

          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Technical Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Aerospace & Science Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {aerospaceProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <div className="glass-card p-8 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Future Project Ideas</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Experimental Rockets", "Telemetry Modules", "Propulsion Analysis", "Flight Simulations", "Campus E-commerce Website", "Plasma Shielding Concepts"].map((idea, index) => (
                  <span key={index} className="px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground border border-primary/20">{idea}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative bg-space-deep">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={HelpCircle} title="Frequently Asked Questions" subtitle="Common questions about my journey, choices, and aspirations" />

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card border border-border/30 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
                    <span className="text-sm sm:text-base text-left text-foreground font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 relative">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={Image} title="Gallery" subtitle="Visual moments from my academic journey, projects, and personal life" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-xs transition-all font-semibold ${selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/30"}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div key={item.id} onClick={() => openLightbox(index)} className="glass-card aspect-square overflow-hidden cursor-pointer card-hover group relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4">
                  <p className="text-foreground text-sm font-semibold">{item.title}</p>
                  <span className="text-primary text-xs">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-space-deep">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader icon={Mail} title="Contact Me" subtitle="Let's connect! Feel free to reach out for collaborations, opportunities, or just a chat." />

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a key={index} href={info.href} target={info.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 card-hover group block">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                    {info.href !== "#" && <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />}
                  </a>
                ))}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-4">Connect on Social</h3>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group" title={social.label}>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-muted/60 to-muted/30 flex items-center justify-center border border-border/40 hover:from-primary/20 hover:to-secondary/20 hover:border-primary/60 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                      <social.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Your Name</label>
                  <input type="text" id="name" name="from_name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required maxLength={100} className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Your Email</label>
                  <input type="email" id="email" name="from_email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required maxLength={255} className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required maxLength={200} className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Subject of your message" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required maxLength={1000} rows={5} className="w-full bg-muted/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message here..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-3 text-foreground hover:text-primary transition-colors z-10 bg-muted/50 rounded-full">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 p-3 text-foreground hover:text-primary transition-colors z-10 bg-muted/50 rounded-full">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredItems[lightboxImage].image} 
              alt={filteredItems[lightboxImage].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl shadow-primary/20"
            />
            <div className="mt-4 text-center">
              <p className="text-foreground text-lg font-semibold">{filteredItems[lightboxImage].title}</p>
              <span className="text-primary text-sm">{filteredItems[lightboxImage].category}</span>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 p-3 text-foreground hover:text-primary transition-colors z-10 bg-muted/50 rounded-full">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Index;