import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import project1 from "@assets/generated_images/2.png";
import project2 from "@assets/generated_images/3.png";
import project3 from "@assets/generated_images/1.png";
import project4 from "@assets/generated_images/5.png";
import project5 from "@assets/generated_images/6.png";
import project6 from "@assets/generated_images/4.png";
import project7 from "@assets/generated_images/7.png";
import project8 from "@assets/generated_images/8.png";

// Updated projects with ID for routing
const projects = [
    {
    id: "data-pipelines1",
    title: "Aily - Real Time Intelligence For Employee",
    company: "AI Platform",
    image: project7,
    skills: ["AI/ML","Data Integration", "Node.js","Python", "SQL", "Airflow", "Data Processing Pipelines","Enterprise Data Workflows"]
  
   },
    {
    id: "data-pipelines2",
    title: "QuestDiagnostics",
    company: "Healthcare",
    image: project8,
    skills: ["React", "Node.js", "SQL", "Authentication & Authorization", "Performance optimization", "Deployment & DevOps basics", "Data integration and workflows"]
  },
  {
    id: "enterprise-ai",
    title: "Earth Hero",
    company: "E-Commerce",
    image: project3,
    skills: ["Shopify / Shopify Plus", "Liquid", "JavaScript", "REST / GraphQL API integration", "Responsive design & UI/UX", "SEO (on-page optimization, metadata, structured data)"],
  },
  {
    id: "vehicle-claims",
    title: "BackRoads",
    company: "Traveling",
    image: project1,
    skills: ["Drupal (CMS development)", "PHP", "WordPress", "JavaScript & JS libraries", "SEO optimization", "Analytics"],

  },
  {
    id: "chatbot-system",
    title: "KHealth",
    company: "HealthCare-AI platform",
    image: project2,
    skills:  ["AI/ML integration", "Python", "Django", "React", "React Native","REST API development","Cloud Platforms","AWS", "Docker","Typescript", "PostgreSQL"],
  },
  {
    id: "mobile-arch",
    title: "Just-Eat-Food-Delivery",
    company: "Food Delivery | Restaurant",
    image: project4,
    skills:  ["Swift", "Kotlin", "React Native", "Push Notifications", "GPS", "Payment Gateway Integration","UI/UX Design","Testing / QA",],
  },
  {
    id: "cloud-infra",
    title: "Smith & Real Estate",
    company: "Real Estate",
    image: project5,
    skills: ["AWS", "Kubernetes", "Docker", "Terraform"]
  },
  {
    id: "data-pipelines",
    title: "Monzo",
    company: "Finance",
    image: project6,
    skills: ["Python", "Go (Golang)", "Microservices Architecture","RESTful API Development", "PostgreSQL", "AWS", "Data Consistency & Security", "Financial Systems Security", "High-Performance Backend Systems"],
  },


];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30 dark:bg-secondary/10 transition-colors duration-300">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-card border border-border/50 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay - Always dark for contrast with text */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-lg">{project.company}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-100 border border-blue-500/30 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center gap-2 text-white font-medium border-b border-blue-400 pb-0.5 hover:text-blue-300 transition-colors">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
