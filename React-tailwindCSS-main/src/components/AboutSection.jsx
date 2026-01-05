// 




import { Briefcase, Code, User, Download, Mail } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Get to know more about my journey, skills, and what drives my passion for development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Passionate Web Developer & <span className="text-primary">AI Enthusiast</span>
              </h3>

              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              As a student and Web Enthusiast, I specialize in creating
              responsive, accessible and fast web applications 
              using modern technologies. My journey in tech is driven by curiosity 
              and a desire to build meaningful solutions.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              I'm passionate about creating elegant solutions to complex 
              problems, and I'm constantly learning new technologies and techniques to 
              stay at the forefront of the ever-evolving web landscape. Every project 
              is an opportunity to grow and innovate.
            </p>

            {/* Stats or Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center card-hover">
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button inline-flex items-center justify-center gap-2">
                <Mail size={18} />
                Get In Touch
              </a>

              <a 
                href="/path-to-your-cv.pdf" 
                download
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium inline-flex items-center justify-center gap-2 hover:scale-105"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="group relative bg-card border border-border rounded-xl p-6 card-hover overflow-hidden transition-all duration-300 hover:border-primary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Code className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Web Development</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Using modern and up-to-date tools to build responsive websites 
                    and efficient web applications with focus on performance and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-card border border-border rounded-xl p-6 card-hover overflow-hidden transition-all duration-300 hover:border-primary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <User className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Team Collaboration</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Experienced in working with teams on software engineering projects, 
                    utilizing version control and agile methodologies for efficient delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-card border border-border rounded-xl p-6 card-hover overflow-hidden transition-all duration-300 hover:border-primary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    As a dedicated student, I build projects to enhance my skills and explore 
                    new technologies, turning learning into practical applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}