import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import avatarImage from "@assets/generated_images/professional_headshot_of_software_developer.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 dark:from-background dark:via-background dark:to-primary/5 transition-colors duration-500">
      {/* Dynamic Background Elements - softer and more blended */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3 animate-pulse duration-[8000ms] delay-1000" />
      
      {/* Grid pattern overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

      <div className="container-width grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 md:text-left text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium text-xl mb-4 flex md:justify-start justify-center items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-primary/60 inline-block"></span> Hello!
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            My name is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-blue-400 dark:from-primary dark:via-blue-400 dark:to-blue-300 animate-gradient-x bg-[length:200%_auto]">
              Duane Horton
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8">
            Senior Software Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 md:text-left text-center"
        >
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          I’m a senior software developer with 10+ years of experience building scalable web applications, designing robust backend systems, and delivering intuitive frontend interfaces. I specialize in technologies like Python, Node.js, C#, .NET, .NET Core, PhP, React.js, Angular, Vue.js, Laravel, CMS and more. I also have strong DevOps and AWS cloud experience. I have extensive experience developing mobile applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:justify-start justifyBuilt robust ETL pipelines to process large volumes of transactional data. The system aggregates data from multiple sources for business intelligence reporting.Built robust ETL pipelines to process large volumes of transactional data. The system aggregates data from multiple sources for business intelligence reporting.Built robust ETL pipelines to process large volumes of transactional data. The system aggregates data from multiple sources for business intelligence reporting.-center">
            <a 
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 text-center"
            >
              Contact Me
            </a>
            <a 
              href="./../public/DuaneHorton.pdf"
              className="px-8 py-3 border border-border/60 bg-background/50 backdrop-blur-sm hover:bg-secondary/80 rounded-full font-medium transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>

          <div className="flex items-center md:justify-start justify-center gap-6">
            <a href="https://www.linkedin.com/in/duane-horton-8ab528234/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/DuaneHorten" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:duanehorton.jobstar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
