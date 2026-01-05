// 




import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Akuafo Complaint Management System",
    description: "A software application designed to streamline how Akuafo Hall handles resident issues and service requests. Students can submit complaints, admins assign tasks, and artisans update work status.",
    image: "/projects/ACMS.png",
    tags: ["React", "TailwindCSS"],
    demoURL: "https://ahcms1.netlify.app/",
    githubURL: "",
  },
  {
    id: 2,
    title: "Cookie-Consent",
    description: "An engaging cookie consent feature that collects user information before granting access. Displays a funny meme GIF after consent, making the interaction enjoyable and less intrusive.",
    image: "/projects/cookie.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://cookie-consent10.netlify.app/",
    githubURL: "#",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A beautiful portfolio website using ReactJs and TailwindCSS",
    image: "/projects/proj3.jpg",
    tags: ["React", "TailwindCSS"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 4,
    title: "Tabs-Saver",
    description: "A Chrome extension that helps you save and manage your browser tabs efficiently. Never lose important tabs again with this handy tool.",
    image: "/projects/Tabsaver.png",
    tags: ["Javascript", "HTML", "CSS"],
    demoURL: "https://tabssaver-chrome.netlify.app/",
    githubURL: "#",
  }
]

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, 
          performance, and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-10px] group-hover:translate-y-0">
                  {project.demoURL && project.demoURL !== "#" && (
                    <a 
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground rounded-full transition-colors duration-300 shadow-lg"
                      title="View Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubURL && project.githubURL !== "#" && project.githubURL !== "" && (
                    <a 
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 text-foreground rounded-full transition-colors duration-300 shadow-lg"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-3">
                    {project.demoURL && project.demoURL !== "#" && (
                      <a 
                        href={project.demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubURL && project.githubURL !== "#" && project.githubURL !== "" && (
                      <a 
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                      >
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                  
                  <ArrowRight 
                    size={20} 
                    className="text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Anas-Stasia"
          >
            View All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}