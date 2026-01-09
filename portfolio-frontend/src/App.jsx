import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Database, Cloud } from 'lucide-react'; // Run: npm install lucide-react

// --- MOCK DATA (Your Resume Data as Fallback) ---
const FALLBACK_DATA = {
  profile: {
    name: "Pulkit Joshi",
    title: "Senior Applications Engineer",
    bio: "Full-stack engineer specializing in AI Agents, Oracle Fusion Cloud, and Scalable Backend Systems.",
    location: "Bengaluru, KA, India",
    email: "pulkitthegameioshi@gmail.com"
  },
  experience: [
    {
      company: "Oracle India",
      role: "Senior Applications Engineer - Fusion Cloud",
      duration: "Aug 2023 - Present",
      achievements: [
        "Leading development of AI agents for Oracle HCM Fusion for 6,000+ enterprise clients.",
        "Spearheaded backend for Talent Goals using JAVA/ADF.",
        "Designed UI for Touchpoints Dashboard using Oracle Visual Builder (30% efficiency gain).",
        "Optimized REST API performance, slashing page load times by 42%."
      ]
    },
    {
      company: "Infrrd",
      role: "Software Developer",
      duration: "July 2019 - April 2020",
      achievements: [
        "Engineered REST APIs in Python for OCR automation (10k+ docs/month).",
        "Increased data extraction accuracy by 15% via dynamic OCR engine selection.",
        "Reduced character error rate by 25% using OpenCV preprocessing."
      ]
    }
  ],
  projects: [
    {
      title: "Visual Question Answering on Chart Images",
      type: "IEEE Research Publication",
      duration: "Aug 2021 - June 2023",
      details: [
        "Achieved 95.04% bar detection accuracy using Mask-RCNN.",
        "Boosted QA accuracy from 55.1% to 67.2% by enhancing Google TAPAS model.",
        "Published in IEEE Open Journal of the Computer Society (Vol 4)."
      ],
      link: "#"
    },
    {
      title: "Cryptographic Hash (SHA-256)",
      type: "Systems Engineering",
      duration: "Jan 2022",
      details: [
        "Implemented SHA-256 from scratch in C++ without external libraries.",
        "Validated against standard test vectors for collision resistance."
      ],
      link: "#"
    }
  ],
  skills: {
    "Languages": ["Java", "C++", "Python", "JavaScript"],
    "Cloud & DevOps": ["AWS (EC2, S3)", "Docker", "CI/CD"],
    "Core": ["Algorithms", "Data Structures", "System Design"],
    "Tools": ["Spring Boot", "MySQL", "Elasticsearch", "JMeter"]
  }
};

function App() {
  const [data, setData] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  // FETCH DATA FROM JAVA BACKEND
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your Render Backend URL
        const baseUrl = "https://your-java-app.onrender.com/api/v1"; 
        
        const [profile, exp, proj, skills] = await Promise.all([
          fetch(`${baseUrl}/profile`).then(res => res.json()),
          fetch(`${baseUrl}/experience`).then(res => res.json()),
          fetch(`${baseUrl}/projects`).then(res => res.json()),
          fetch(`${baseUrl}/skills`).then(res => res.json())
        ]);

        setData({ profile, experience: exp, projects: proj, skills });
      } catch (error) {
        console.log("Backend not connected yet. Using fallback data.");
        // Keep fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 selection:bg-emerald-500/30">
      
      {/* --- HERO SECTION --- */}
      <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 animate-fade-in">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold text-slate-100 mb-4 tracking-tight">
              {data.profile.name}
            </h1>
            <h2 className="text-xl text-emerald-400 font-medium mb-6">
              {data.profile.title}
            </h2>
            <p className="max-w-lg text-slate-400 leading-relaxed text-lg mb-8">
              {data.profile.bio}
            </p>
            
            <div className="flex gap-4">
              <SocialBtn icon={<Mail size={20} />} label="Email Me" href={`mailto:${data.profile.email}`} />
              <SocialBtn icon={<Linkedin size={20} />} label="LinkedIn" href="#" />
              <SocialBtn icon={<Github size={20} />} label="GitHub" href="#" />
            </div>
          </div>
        </div>
      </header>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-12 animate-slide-up" style={{animationDelay: '0.1s'}}>
        <SectionTitle title="Experience" />
        <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8 relative">
          {data.experience.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-emerald-500 group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-100">{job.company}</h3>
                <span className="text-sm font-mono text-slate-500">{job.duration}</span>
              </div>
              <div className="text-emerald-400 mb-4 font-medium">{job.role}</div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 marker:text-emerald-500/50">
                {job.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <SectionTitle title="Featured Projects & Research" />
        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-900 rounded-lg text-emerald-400">
                  {idx === 0 ? <Terminal size={24} /> : <Code size={24} />}
                </div>
                <a href={proj.link} className="text-slate-500 hover:text-emerald-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono mb-4">{proj.type}</p>
              <ul className="space-y-2">
                {proj.details.slice(0, 2).map((detail, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-500 shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-24 animate-slide-up" style={{animationDelay: '0.3s'}}>
        <SectionTitle title="Technical Arsenal" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-slate-100 font-medium mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-emerald-500/50"></span> {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-sm text-slate-300 rounded-full border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// --- SUB-COMPONENTS ---

function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
      <span className="text-emerald-400 font-mono text-lg">01.</span> 
      {title}
      <span className="h-px bg-slate-800 flex-grow ml-4"></span>
    </h2>
  );
}

function SocialBtn({ icon, label, href }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium hover:bg-emerald-500/10 hover:text-emerald-400 border border-transparent hover:border-emerald-500/20 transition-all"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default App;