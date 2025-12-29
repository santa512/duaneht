import { motion } from "framer-motion";

const experiences = [
  {
    period: "Nov 2023 - Present",
    role: "Senior Software Developer | Full Stack & AI Development",
    company: "Horizon AI & Cloud Services",
    location: "Houston, Texas, United States",
    description: "At Horizon AI & Cloud Services, I lead the development of enterprise software using Python, Node.js, React, and Next.js while focusing on scalable backend architecture and clean engineering practices. I design and implement advanced AI solutions such as LLM applications, RAG pipelines, vector search systems, and automated AI workflows. I also architect and optimize SQL and NoSQL databases, ensuring high-performance querying, data pipelines, reliable cloud-based storage, and robust Android and mobile experience.",
    skills: ["Python", "Node.js", "React", "Next.js", "FastAPI", "Express.js", "LLMs", "RAG Pipelines", "Vector Databases", "AWS", "Docker", "DevOps", "PostgreSQL"]
  },
  {
    period: "Mar 2020 - Oct 2023",
    role: "Senior .NET, C# Developer | Backend & Cloud Specialist",
    company: "Tesla",
    location: "Fremont, California, United States · Remote",
    description: "I’m a .NET C# full-stack developer with solid experience building enterprise systems, working with cloud services, and integrating databases. I’ve led the customization and rollout of Auda Enterprise Gold, a distributed vehicle-claims platform, adapting it for the Latin American market using ASP.NET, ASMX web services, Oracle, VistaDB, and .NET Framework 2.0/3.5. I also worked on the MySQL Connector/NET team, where I helped design new features, fix core issues, and write unit tests across .NET Framework versions 2.0 - 4.0.",
    skills: ["C#", ".NET", "ASP.NET", "Oracle", "VistaDB", "MySQL", "Cloud Services", "Distributed Systems"]
  },
  {
    period: "Mar 2017 - Nov 2019",
    role: "Python & Node Expert | Backend Development",
    company: "StarTechPC.com",
    location: "Austin, Texas, United States · On-site",
    description: "At StarTechPC, I worked on building scalable backend systems using Python, Node.js, Express, and microservice architectures. I developed AI-driven features like NLP chatbots, classification models, recommendation systems, and automated data-processing pipelines. I connected these backend services with React, Vue, and Angular frontends to deliver smart, production-ready full-stack applications.",
    skills: ["Python", "Node.js", "Express", "NLP", "Machine Learning", "Microservices", "React", "Vue.js", "Angular"]
  },
  {
    period: "Jan 2014 - Dec 2016",
    role: "Junior Full Stack Developer | Frontend Expert",
    company: "Paycom",
    location: "Oklahoma City, Oklahoma, United States · Remote",
    description: "At Paycom, I worked as a full-stack developer using C#/.NET, Java, JavaScript, Node.js, and MongoDB on both client-facing and internal systems. I built modern user interfaces with Angular and Nuxt, and also created websites and custom components using WordPress and Shopify. Much of my focus was on improving UI/UX, optimizing performance, and delivering clean, efficient front-end features.",
    skills: ["C#/.NET", "Java", "JavaScript", "Node.js", "MongoDB", "Angular", "Nuxt.js", "WordPress", "Shopify"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">My Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="grid md:grid-cols-[300px_1fr] gap-6 md:gap-12 pb-12 border-b border-border/40 last:border-0 last:pb-0"
            >
              <div>
                <h4 className="text-lg font-bold text-primary mb-1">{exp.period}</h4>
                <p className="text-base font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.location}</p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{exp.role}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium border border-border/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
