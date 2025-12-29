import { motion } from "framer-motion";

const skillSet = [
  { name: "Python / Django / FastAPI", level: 95 },
  { name: "Node.js / Express", level: 95 },
  { name: "React / Next.js / TypeScript", level: 90 },
  { name: "AI / LLMs / RAG / LangChain", level: 95 },
  { name: "ML Engineering (TensorFlow/PyTorch)", level: 85 },
  { name: "Vector DBs (Pinecone/Weaviate/Milvus)", level: 90 },
  { name: "C# / .NET Core / ASP.NET", level: 90 },
  { name: "Cloud (AWS/Azure/GCP)", level: 85 },
  { name: "SQL (PostgreSQL/MySQL/Oracle)", level: 90 },
  { name: "NoSQL (MongoDB/Redis/Cassandra)", level: 85 },
  { name: "DevOps / CI/CD / Terraform", level: 85 },
  { name: "Containerization (Docker/K8s)", level: 85 },
  { name: "Microservices & Event-Driven Arch", level: 90 },
  { name: "Mobile (React Native/Flutter/iOS/Android)", level: 80 },
  { name: "API Design (REST/GraphQL/gRPC)", level: 90 },
  { name: "WebSockets & Real-time Systems", level: 85 },
  { name: "Testing (Jest/PyTest/Cypress)", level: 85 },
  { name: "System Design & Architecture", level: 90 },
  { name: "GoLang", level: 90 },
  { name: "Wordpress", level: 100 },
  { name: "Shopify", level: 100 },
  { name: "React Native", level: 100 },
  { name: "Java", level: 90 },
  { name: "Kotlin", level: 100 },
  { name: "Swift", level: 93 },
  { name: "Flutter", level: 100 },

];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/10">
      <div className="container-width">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Skillset</h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              In my 10+ years of experience, I have achieved excellence in building enterprise-grade backend systems, distributed services, and AI-driven applications. I am constantly learning and adapting to the latest technologies in the ever-evolving tech landscape.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {skillSet.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold tracking-wide">{skill.name}</span>
                  <span className="text-muted-foreground text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
        </div>

        {/* Education Section moved to bottom of skills to match flow */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
        >
            <h3 className="text-2xl font-bold mb-8 border-b border-border/50 pb-4">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-bold text-lg">Master of Science (M.S.)</h4>
                    <span className="text-sm text-primary font-bold">2010 - 2013</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-1">Computer Science</p>
                    <p className="text-sm text-muted-foreground">University of Houston-Clear Lake</p>
                </div>
                <div className="p-6 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-bold text-lg">Bachelor of Science (B.S.)</h4>
                    <span className="text-sm text-primary font-bold">2006 - 2010</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-1">Computer Software Engineering</p>
                    <p className="text-sm text-muted-foreground">University of Houston-Clear Lake</p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
