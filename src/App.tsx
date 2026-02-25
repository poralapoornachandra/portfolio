/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Award, 
  GraduationCap, 
  Briefcase,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Phone
} from 'lucide-react';

// --- Constants & Data ---

const RESUME_URL = "/Gem_poorna_resume.pdf";
const PROFILE_IMAGE = "formal.jpeg";

const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'RESUME', href: '#resume' },
  { name: 'CONTACT', href: '#contact' },
];

const PROJECTS = [
  {
    title: "Automated Defected System",
    description: "Developed an automated system for anomaly detection in industrial carpet images using the MVTech Carpet Dataset. Utilized ResNet50 and CNN architectures.",
    tech: ["Python", "ResNet50", "CNN", "Pandas", "NumPy"],
    date: "April 2025"
  },
  {
    title: "Dog Breed Classification using DeiT",
    description: "Fine-tuned a DeiT transformer model for 120-class dog breed classification, performing preprocessing, augmentation, and optimizing training workflows.",
    tech: ["Python", "DeiT Model", "Deep Learning", "Pandas"],
    date: "November 2025"
  },
  {
    title: "Energy Demand Forecasting",
    description: "Developed a short-term electricity demand forecasting model using LSTM to analyze 5-minute interval time-series data from the Delhi Electricity Demand dataset.The model predicts future load demand to support efficient grid planning and reduce load imbalance.",
    tech: ["Python", "TensorFlow / Keras (LSTM)", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    date: "2025"
  }
];

const SKILLS = {
  technical: [
    "Java", "Python", "NumPy", "Pandas", "Scikit-learn", "Keras", "SQL (MySQL)", 
    "Machine Learning", "Deep Learning", "CNN", "LSTM", "Transformers", 
    "Natural Language Processing", "Data Visualization", "Statistical Analysis"
  ],
  tools: ["Google Colab", "Jupyter Notebook", "Canva", "Github", "Streamlit", "Excel"]
};

const EDUCATION = [
  {
    degree: "B.Tech in CSE (AI & ML)",
    institution: "Manav Rachna University",
    period: "July 2023 – Present",
    score: "CGPA: 9.13/10"
  },
  {
    degree: "Intermediate Education",
    institution: "Sri Chaitanya Junior College",
    period: "July 2021 – March 2023",
    score: "Percentage: 96%"
  },
  {
    degree: "Secondary Education",
    institution: "Little Flower English Medium",
    period: "April 2021",
    score: "Percentage: 100%"
  }
];

const ACHIEVEMENTS = [
  {
    title: "Dean's List Award",
    description: "Awarded for excellent academic performance at Manav Rachna University.",
    date: "2025",
    icon: <Award className="text-primary" size={32} />
  },
  {
    title: "NPTEL Certification",
    description: "The Joy of Computing using Python.",
    date: "2025",
    icon: <Code2 className="text-primary" size={32} />
  },
  {
    title: "Crash Course on Python",
    description: "Completed certification from Coursera.",
    date: "April 2022",
    icon: <Code2 className="text-primary" size={32} />
  },
  {
    title: "Data Structure using Python",
    description: "Completed certification from Springboard.",
    date: "2024",
    icon: <Database className="text-primary" size={32} />
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          About<span className="text-primary">Me.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-primary transition-colors tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card-dark border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-medium tracking-widest mb-4 block">Hello, Welcome</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I am <span className="text-white">Porala Poorna Chandra</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Data Science enthusiast with a strong interest in Machine Learning and Deep Learning. 
            Skilled in building and deploying predictive models and deriving meaningful insights.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary text-bg-dark font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              Contact me
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/poralapoornachandra" target="_blank" rel="noreferrer" className="p-3 glass-card hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="http://www.linkedin.com/in/poorna-chandra-7ab22829a" target="_blank" rel="noreferrer" className="p-3 glass-card hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
            <img 
              src={PROFILE_IMAGE} 
              alt="Porala Poorna Chandra" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/poorna/800/800";
              }}
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About <span className="text-primary">Me</span></h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I am a dedicated Computer Science student at Manav Rachna University, specializing in Artificial Intelligence and Machine Learning. 
              My journey is driven by a passion for data and its potential to solve complex real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 glass-card">
                <BrainCircuit className="text-primary mb-4" size={32} />
                <h3 className="font-bold mb-2">AI & ML</h3>
                <p className="text-sm text-gray-500">Focus on predictive modeling and deep learning architectures.</p>
              </div>
              <div className="p-6 glass-card">
                <Database className="text-primary mb-4" size={32} />
                <h3 className="font-bold mb-2">Data Science</h3>
                <p className="text-sm text-gray-500">Expertise in data analysis, visualization, and statistical methods.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
            <div className="grid gap-4">
              {[
                { label: "Current Focus", value: "Natural Language Processing" },
                { label: "Education", value: "B.Tech in CSE (AI & ML)" },
                { label: "Location", value: "Tirupati, India" },
                { label: "Interests", value: "Chess, Cricket, Yoga & Mindfulness" }
              ].map((fact, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                  <span className="text-xs text-primary uppercase tracking-widest block mb-1">{fact.label}</span>
                  <span className="text-white font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <p className="text-gray-500">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code2 className="mr-3 text-primary" /> Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.technical.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-primary hover:text-bg-dark transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Cpu className="mr-3 text-primary" /> Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-primary hover:text-bg-dark transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-primary">Projects</span></h2>
          <p className="text-gray-500">A showcase of my research and development work.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 group hover:border-primary/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="text-xs text-gray-500 font-mono">{project.date}</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <button className="flex items-center text-sm font-bold text-primary hover:underline">
                View Details <ChevronRight size={16} className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-primary">Achievements</span></h2>
          <p className="text-gray-500">Certifications and awards I've earned along my journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center hover:border-primary/30 transition-all"
            >
              <div className="mb-4 p-4 bg-white/5 rounded-full">
                {achievement.icon}
              </div>
              <h3 className="font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{achievement.description}</p>
              <span className="text-xs font-mono text-primary mt-auto">{achievement.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-primary">Education</span></h2>
          <p className="text-gray-500">My academic background and qualifications.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l border-white/10 pb-8 last:pb-0"
            >
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-primary rounded-full" />
              <div className="glass-card p-6 ml-4">
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{edu.period}</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-primary font-mono">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">My <span className="text-primary">Resume</span></h2>
            <p className="text-gray-400 mb-8 text-lg">
              I am always looking for new opportunities to learn and grow. 
              Download my full resume to see my complete profile and professional experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={RESUME_URL} 
                download 
                className="inline-flex items-center px-8 py-4 bg-primary text-bg-dark font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-lg shadow-primary/10"
              >
                <Download size={20} className="mr-2" /> Download Resume (PDF)
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8 border-primary/20">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary" /> Professional Summary
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Data Science enthusiast with strong interest in Machine Learning and Deep Learning. 
              Skilled in building and deploying predictive models, analyzing datasets, and deriving meaningful insights.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white/5 rounded-xl">
                <Award className="text-primary mr-4" />
                <div>
                  <h4 className="font-bold">Dean's List Award</h4>
                  <p className="text-xs text-gray-500">Manav Rachna University (2025)</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-xl">
                <Briefcase className="text-primary mr-4" />
                <div>
                  <h4 className="font-bold">Artificial Intelligence Intern</h4>
                  <p className="text-xs text-gray-500">Codec Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-gray-500">Have a question or want to work together?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="p-4 glass-card text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-400">poornacharan11@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="p-4 glass-card text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-400">+91 9014190543</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="p-4 glass-card text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-gray-400">Tirupati, India</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-all" />
              <input type="email" placeholder="Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-all" />
            <textarea placeholder="Message" rows={5} className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-all resize-none"></textarea>
            <button className="w-full py-4 bg-primary text-bg-dark font-bold rounded-lg hover:bg-yellow-500 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-2xl font-bold mb-6">
          About<span className="text-primary">Me.</span>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/poralapoornachandra" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="http://www.linkedin.com/in/poorna-chandra-7ab22829a" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:poornacharan11@gmail.com" className="text-gray-500 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Porala Poorna Chandra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <AchievementsSection />
        <EducationSection />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
