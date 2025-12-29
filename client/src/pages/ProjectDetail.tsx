import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import project1 from "@assets/generated_images/2.png";
import project2 from "@assets/generated_images/3.png";
import project3 from "@assets/generated_images/1.png";
import project4 from "@assets/generated_images/5.png";
import project5 from "@assets/generated_images/6.png";
import project6 from "@assets/generated_images/4.png";
import project7 from "@assets/generated_images/7.png";
import project8 from "@assets/generated_images/8.png";

// Project data store - typically this would be in a separate data file or fetched
const projectsData = {
  "enterprise-ai": {
    title: "Earth Hero",
    company: "E-Commerce",
    date: "",
    image: project3,
    description: "EarthHero is an online marketplace dedicated to making sustainable shopping simple and accessible. The platform curates a wide range of eco-friendly and ethically sourced products, providing detailed information on environmental impact, packaging, and sourcing practices. By partnering with brands committed to sustainability, EarthHero helps consumers make conscious purchasing decisions while reducing their ecological footprint.",
    role: "Senior Full Stack Developer",
    technologies: ["Shopify / Shopify Plus", "Liquid", "JavaScript", "REST / GraphQL API integration", "Responsive design & UI/UX", "SEO (on-page optimization, metadata, structured data)"],
    features: [
      "In this project, I was primarily responsible for customizing and developing the Shopify storefront. This included modifying Shopify themes with Liquid, TailwinCSS JavaScript features, and implementing SEO best practices to improve search engine visibility, optimize page load speed, and enhance metadata for products and categories.",
      "One of the key features I worked on was the product filtering and discovery system, which allowed users to search and sort products based on sustainability attributes, categories, and environmental certifications. I also integrated Shopify APIs to fetch product data and ensure smooth functionality across the site.",
      "Overall, working on EarthHero strengthened my skills in Shopify theme development, frontend interactivity, API integration, responsive design, and SEO optimization, creating a user-friendly and discoverable e-commerce experience.",

    ],
    links: { demo: "https://earthhero.com/", github: "#" }
  },
  "vehicle-claims": {
    title: "BackRoads",
    company: "Traveling",
    date: "",
    image: project1,
    description: "Backroads is an active travel website specializing in biking, hiking, walking, and multi-adventure tours across the globe. The platform provides detailed travel itineraries, booking capabilities, and rich content to help users plan and enjoy immersive adventure experiences while ensuring seamless access to travel information and services.",
    role: "Senior Wordpress Developer",
    technologies: ["Drupal (CMS development)", "PHP", "WordPress", "JavaScript & JS libraries", "SEO optimization", "Analytics"],
    features: [
      "In this project, I was primarily responsible for enhancing and customizing the Backroads digital platform. This included developing and modifying Drupal and WordPress templates, implementing interactive features with JavaScript, and integrating analytics tools to track user behavior and engagement. I also focused on SEO optimization and responsive design, ensuring the site delivered a fast, accessible, and discoverable experience across devices.",
      "One of the key features I worked on was the interactive trip search and filtering system, which allowed users to explore trips based on destination, activity type, and travel dates. I also integrated analytics tools such as Google Analytics and Facebook Pixel to provide insights into user interactions and conversion metrics.",
      "Overall, working on Backroads strengthened my skills in CMS customization, full-stack web enhancements, interactive UI development, SEO optimization, and analytics integration, enabling a scalable and engaging platform for adventure travelers worldwide.",
      
    ],
    links: { demo: "https://www.backroads.com/", github: "#" }
  },
  "chatbot-system": {
    title: "KHealth",
    company: "HealthCare",
    date: "",
    image: project2,
    description: "K Health is a clinical artificial intelligence (AI) platform that provides personalized virtual primary care and health insights. It combines AI‑driven symptom analysis with real medical data and licensed clinicians to deliver 24/7 access to medical guidance, diagnoses, treatment options, and ongoing care plans via mobile and web applications. The AI system leverages large datasets of anonymized patient records to generate data‑driven insights and support both patients and physicians in delivering high‑quality healthcare.",
    role: "Full Stack Developer",
    technologies: ["AI/ML integration", "Python", "Django", "React", "React Native","REST API development","Cloud Platforms","AWS", "Docker","Typescript", "PostgreSQL"],
    features: [
      "In this project, I was primarily responsible for integrating AI-driven features and backend data workflows that powered the clinical intelligence of the platform. I implemented machine learning model integration, built robust data pipelines to process patient information securely, and developed backend services to deliver real-time predictions and personalized health guidance.",
      "One of the key features I worked on was the AI symptom analysis and recommendation system, which required processing large datasets and connecting predictive outputs to both web and mobile interfaces. I also ensured the system adhered to HIPAA-compliant security standards, allowing safe handling of sensitive health data.",
      "Overall, working on K Health strengthened my skills in AI/ML integration, Python backend development, React frontend interfaces, database management, API development, cloud deployment, and secure handling of sensitive healthcare data. This experience gave me deep insight into building scalable, intelligent healthcare platforms that combine machine learning with user-facing applications.",
      "Multi-channel support (Web, Messenger, WhatsApp)",
      "Automated ticket creation in CRM"
    ],
    links: { demo: "https://www.khealth.com/", github: "#" }
  },
  "mobile-arch": {
    title: "Just-Eat-Food-Delivery",
    company: "Food Delivery | Restaurant",
    date: "",
    image: project4,
    description: "Just Eat is a leading food and grocery delivery platform that enables users to browse menus from thousands of local restaurants, supermarkets, and stores, place orders for food or essentials, and have them delivered directly to their doorstep. The app provides a seamless on‑demand ordering experience with restaurant discovery, personalized offers, real‑time tracking, and multiple payment options for users in numerous markets. ",
    role: "Senior Android & Mobile Developer",
    technologies: ["Swift", "Kotlin", "React Native",  "JavaScript / TypeScript", "Push Notifications", "GPS / Location Services", "Payment Gateway Integration","UI/UX Design","Testing / QA","Clean Architecture"],
    features: [
      "In this project, I was responsible for developing the entire mobile application from start to finish, including both frontend and backend components. I implemented the restaurant discovery and search interface, integrated real-time order tracking with GPS services, and developed push notification workflows to update users on order status, driver assignments, and delivery progress.",
      "I also handled secure payment processing, supporting multiple payment methods, and optimized the checkout and ordering flow for seamless user experience. From UI/UX design to API integration and backend services, I built the app end-to-end to ensure smooth performance, responsiveness, and scalability.",
      "One of the key features I implemented was the real-time order tracking system, providing users with accurate ETAs and live updates from order confirmation to delivery. I also designed and developed the app’s intuitive navigation and responsive UI, ensuring high user engagement and satisfaction.",
      "Overall, building Just Eat from the ground up strengthened my expertise in full-stack mobile development, real-time systems, API integration, geolocation services, secure payment workflows, and user-centric design, delivering a high-scale, consumer-facing delivery platform.",
    
    ],
    links: { demo: "https://apps.apple.com/us/app/just-eat-food-delivery/id566347057", github: "#" }
  },
  "cloud-infra": {
    title: "Smith & Real Estate",
    company: "Real Estate",
    date: "",
    image: project5,
    description: "Smith & Associates is a real estate brokerage serving clients with personalized property services, market insights, and client‑focused real estate solutions. The company embraces digital tools and advertising platforms to showcase properties, support agents with automated marketing campaigns, and strengthen its online presence in a competitive market.",
    role: "Full Stack & AI developer",
    technologies: ["AI Chatbot", "Google Cloud CDN", "PHP", "Bootstrap", "Python"],
    features: [
      "In this project, I was responsible for developing and enhancing the company website from start to finish. I built a responsive, user‑friendly web interface using modern web technologies and ensured the site delivered strong performance, cross‑device compatibility, and integrated analytics to support marketing and business goals.",
      "One of the key focuses was implementing interactive UI components and layouts with Bootstrap to ensure the site scaled well across desktop and mobile. I also integrated Google Analytics and Google Ads tracking to measure user behavior and support targeted marketing campaigns. In addition, I implemented real‑time live chat support using Tawk.to and ensured the site was served through a fast CDN (Google Cloud CDN) for optimal performance.",
      "Security and performance were integral parts of the project, including implementing HSTS for HTTPS enforcement and optimizing assets with Webpack and lazy loading strategies (e.g., LazySizes) to improve load times.",
      "Overall, working on Smith & Associates’ website strengthened my skills in modern frontend development, third‑party integration, responsive design, performance optimization, and analytics implementation, resulting in a professional, scalable web presence for a client‑focused real estate firm.",
    ],
    links: { demo: "https://www.smithandassociates.com/", github: "#" }
  },
  "data-pipelines": {
    title: "Monzo",
    company: "Finance",
    date: "2017",
    image: project6,
    description: "Monzo is a British digital bank (neobank) that operates entirely online, offering mobile-first banking services including current accounts, payments, savings, and advanced financial tools. It stands out for its intuitive app experience, real-time transaction processing, savings features, budgeting tools, and transparency in financial services all without physical branch infrastructure. ",
    role: "Backend & API Developer (Golang) – Fintech / Banking Platform",
    technologies: ["Python", "Go (Golang)", "Microservices Architecture","RESTful API Development", "PostgreSQL", "AWS", "Data Consistency & Security", "Financial Systems Security", "High-Performance Backend Systems"],
    features: [
      "In this project, I was responsible for contributing to both backend and API development for Monzo’s banking platform. I worked on building and scaling microservices using Go (Golang) to handle high-volume real-time transactions and banking operations. These services were designed to be highly available, reliable, and compliant with financial regulations, running on cloud infrastructure (AWS) for scalability and operational resilience. ",
      "In addition, I collaborated with cross-functional teams to build and maintain RESTful APIs that power both the mobile applications (iOS/Android) and internal services. I ensured strict security, compliance (including banking regulations), and performance standards were met throughout the system.",
      "One of the core systems I helped develop was the transaction processing and event streaming pipeline, which used Apache Kafka to ensure real-time updates across the platform  such as instantaneous balance changes, notifications, and analytics tracking. I also contributed to database design and integration using PostgreSQL to support consistent and secure financial data storage.",
      "Overall, working on Monzo strengthened my skills in building secure, scalable backend systems, real-time distributed services, cloud infrastructure, and high-performance APIs for a production-grade fintech platform used by millions of customers."
    ],
    links: { demo: "https://monzo.com", github: "#" }
  },

  "data-pipelines1": {
    title: "Aily - Real Time Intelligence For Employee",
    company: "AI Platform",
    date: "",
    image: project7,
    description: "Aily Labs is an AI-powered Decision Intelligence platform designed to help enterprises turn complex data into actionable insights, optimize resources, and make smarter decisions across multiple business functions.",
    role: "AI & Full Stack Engineer",
    technologies: ["AI/ML model integration, data processing pipelines","Data Integration", "Real-time insights dashboards, data visualization", "Node.js, backend integration","Python", "SQL", "Airflow", "Data Processing Pipelines","Enterprise Data Workflows"],
    features: [
    
      "In this project, I was primarily responsible for implementing AI-driven features and data processing workflows. This involved integrating machine learning models, designing data pipelines, and building systems to deliver real-time, actionable insights to decision-makers.",
      "One of the key features I worked on was the real-time insights dashboard, which processed complex datasets using AI algorithms and presented the results through intuitive visualizations. I also contributed to optimizing model integration and ensuring reliable data flow between the backend and the interface.",
      "Overall, working on this project strengthened my skills in AI/ML integration, data workflow design, and building intelligent systems for enterprise-scale decision-making.",
      
    ],
    links: { demo: "https://www.ailylabs.com/", github: "#" }
  },
   "data-pipelines2": {
    title: "QuestDiagnostics",
    company: "HealthCare",
    date: "",
    image: project8,
    description: "Quest Diagnostics offers a wide range of diagnostic testing services and healthcare IT solutions, helping patients, clinicians, and healthcare providers make informed health decisions through reliable lab results and digital tools.",
    role: "Full-Stack Developer",
    technologies: ["React", "Node.js", "SQL", "Authentication & Authorization", "Performance optimization", "Deployment & DevOps basics", "Data integration and workflows"],
    features: [
      "In this project, I was responsible for implementing both frontend and backend components to support key features of the Quest Diagnostics web platform. On the frontend, I used React to build responsive user interfaces that allow users to search for tests, view educational content, and interact with tools that support healthcare providers and patients.",
      "On the backend, I utilized Node.js to develop scalable APIs and server logic that handle data requests, integrate with secured healthcare services, and support efficient data workflows. I collaborated closely with the design and data teams to ensure seamless communication between the frontend and backend, optimized for performance and usability.",
      "One of the primary features I worked on was the interactive test directory and patient information portal, which required real‑time data fetching, dynamic routing, and secure handling of healthcare content. This involved implementing API endpoints, managing state efficiently, and ensuring accessibility across devices.",
      "Overall, working on Quest Diagnostics strengthened my skills in full‑stack development, building modern frontend experiences with React, and designing backend services with Node.js to support high‑traffic, enterprise‑scale healthcare applications.",
     
    ],
    links: { demo: "https://www.questdiagnostics.com/", github: "#" }
  }
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link href="/">
            <a className="text-primary hover:underline">Return Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container-width">
          <Link href="/#projects">
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </a>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-heading">{project.title}</h1>
                <div className="hidden md:block w-px h-8 bg-border"></div>
                <div className="text-xl text-primary font-medium">{project.company}</div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">Role:</span> {project.role}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl mb-12 bg-secondary/20 aspect-video relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid lg:grid-cols-[1fr_350px] gap-12">
              {/* Main Content */}
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <div className="grid gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 p-4 rounded-lg bg-secondary/20 border border-border/50">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                  <h3 className="font-bold mb-4 text-lg">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                  <h3 className="font-bold mb-4 text-lg">Project Links</h3>
                  <div className="space-y-3">
                    <a href={project.links.demo} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors group">
                      <span className="font-medium">Live Demo</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a href={project.links.github} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors group">
                      <span className="font-medium">Source Code</span>
                      <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
