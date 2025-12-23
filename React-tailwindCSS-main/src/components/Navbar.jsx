
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> AnasTech </span>
            Portfolio
          </span>
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-foreground text-lg font-bold tracking-wide hover:text-primary transition-all duration-300 group py-2 px-1 hover:scale-110"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
            </a>
          ))}
        </div>

        {/* Mobile Navbar Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
          "transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-foreground text-3xl hover:text-primary transition-all duration-300 text-center group font-bold tracking-wide hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};