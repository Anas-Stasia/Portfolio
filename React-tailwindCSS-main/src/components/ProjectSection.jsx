import { ArrowRight, ExternalLink } from "lucide-react"
import { Github } from "lucide-react"


const projects = [
  {id: 1,
    title: "Akuafo Complaint Management System",
    description: "The Akuafo Management System is a software application designed to streamline how Akuafo Hall handles resident issues and service requests. It lets students (residents) submit complaints and reviews, enables the admin to assign those tasks to artisans, and allows artisans to update the status of their work and submit completion reports. The system improves transparency, accountability, and the speed of resolving maintenance and facility problems within the hall.",
    image: "/projects/ACMS.png",
    tags: ["React", "TailwindCSS"],
    demoURL: "https://ahcms1.netlify.app/",
    githubURL: "",
  },
   {id: 1,
    title: "Cookie-Consent",
    description: "The cookie consent feature allows users to provide their username and email address before accepting cookies. After consent is granted, the system responds by displaying a funny meme GIF, creating a light-hearted and engaging user experience. This approach ensures user consent is clearly recorded while making the interaction more enjoyable and less intrusive.",
    image: "/projects/cookie.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://cookie-consent10.netlify.app/",
    githubURL: "#",
  },
   {id: 1,
    title: "Portfolio",
    description: "A beautiful portfolio website using ReactJs and TailwindCSS",
    image: "/projects/proj3.jpg",
    tags: ["React", "TailwindCSS"],
    demoURL: "#",
    githubURL: "#",
  },
  {id: 1,
    title: "Tabs-Saver",
    description: "A beautiful portfolio website using ReactJs and TailwindCSS",
    image: "/projects/Tabsaver.png",
    tags: ["Javascript","HTML", "CSS"],
    demoURL: "https://tabssaver-chrome.netlify.app/",
    githubURL: "#",
  }

]



export const ProjectSection = () => {

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. 
          Each project was carefully crafted with attention to detail, 
          performance, and user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div 
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48  overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transtion-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2d mb-4">
                    {project.tags.map((tag, key) => (
                      <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a 
                          href={project.demoURL}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <ExternalLink />
                      </a>
                      <a 
                          href={project.githubURL}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <Github />
                      </a>
                  </div>
                </div>
                </div>
              </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/Anas-Stasia"
            >
            Check My Github < ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}