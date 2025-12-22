
import { ArrowDown, Download, Linkedin, Github, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-visible"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-7xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <p className="text-primary text-sm md:text-base opacity-0 animate-fade-in">
                Welcome to my portfolio!
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                <span className="opacity-0 animate-fade-in-delay-1">
                  Hello, my
                  <br />
                  name's{" "}
                </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2">
                  Anastasia.
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
              I'm a developer with a strong interest in AI and hands-on
              experience building machine learning solutions alongside clean,
              responsive web interfaces. I enjoy turning ideas into real
              products by combining intelligent systems with thoughtful design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#contact"
                className="cosmic-button flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-border hover:border-primary text-foreground rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:bg-primary/10"
              >
                See my work
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image with Decorations */}
          <div className="relative flex items-center justify-center opacity-0 animate-fade-in-delay-2">
            {/* Decorative floating elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg rotate-12 opacity-80 animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full opacity-60 animate-float-delay"></div>

            {/* Main profile frame */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 rounded-[3rem] blur-xl opacity-50 animate-pulse"></div>

              {/* Profile image container */}
              <div className="relative bg-gradient-to-br from-primary/40 to-primary/20 p-1 rounded-[3rem] shadow-2xl">
                <div className="bg-card rounded-[2.8rem] p-2">
                  <img
                    src="/projects/profile.png"
                    alt="Anastasia Ndanwea"
                    className="w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-[2.5rem]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-72 h-96 md:w-80 md:h-[28rem] rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-foreground text-lg">Profile Image</div>';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Small floating accent */}
              <div className="absolute top-1/4 -right-8 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl rotate-45 animate-float-slow"></div>
            </div>
          </div>
        </div>

        {/* Social Icons - Right Side */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
          <a
            href="https://www.linkedin.com/in/anastasia-ndanwea-676235221"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary/20 backdrop-blur-sm hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 border border-primary/30 hover:scale-110 group"
          >
            <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
          <a
            href="https://github.com/Anas-Stasia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary/20 backdrop-blur-sm hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 border border-primary/30 hover:scale-110 group"
          >
            <Github className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
          <a
            href="mailto:anastasiandanwea@gmail.com"
            className="w-12 h-12 bg-primary/20 backdrop-blur-sm hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 border border-primary/30 hover:scale-110 group"
          >
            <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 mb-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll"></div>
        </div>
        <span className="text-xs text-muted-foreground">Scroll down</span>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-15px) rotate(55deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}