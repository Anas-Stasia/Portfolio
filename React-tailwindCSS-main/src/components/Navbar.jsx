// import { useEffect, useState } from "react";
// import { href } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import { X } from "lucide-react";
// import { Menu } from "lucide-react";

// const navItems = [
//   {name: "Home", href: "#hero"},
//   {name: "About", href: "#about"},
//   {name: "Skills", href: "#skills"},
//   {name: "Projects", href: "#projects"},
//   {name: "Contact", href: "#contact"},
// ]

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     }
//   })

//   return <nav className={cn(
//     "fixed w-full  z-40 transition-all duration-300",
//     isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

//     <div className="container flex items-center justify-between">
//       <a
//         className="text-xl font-bold text-primary flex items-center"
//         href="#hero">
//         <span className="relative z-index-10">
//           <span className= " text-glow text-foreground"> AnasTech </span>
//           Portfolio
//         </span>
//       </a>

//       {/* Desktop Navbar */}
//       <div className="hidden md:flex space-x-8 ">
//         {navItems.map((item, key) => (
//           <a
//             key={key}
//             href={item.href}
//             className="text-foreground/80 hover:text-primary transition-colors duration-300"
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>

//       {/* Mobile Navbar */}
//       <button onClick = {() => {setIsMenuOpen(!isMenuOpen)}} 
//         className = "md:hidden p-2 text-foreground z-50"
//         arial-label = {isMenuOpen ? "Close Menu" : "Open Menu"}>
//         {isMenuOpen ? <X size={24} /> : < Menu size={24} />}{" "}
//       </button>



//       <div className= {cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
//                           "transition-all duration-300",
//                           isMenuOpen ? "opacity-100 pointer-events-auto" 
//                           : "opacity-0 pointer-events-none"
//         )}>
//         <div className="flex flex-col space-y-8 text-xl">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//               onClick={() => setIsMenuOpen(false)}>
//               {item.name}
//             </a>
//           ))}
//         </div>
//       </div>

//     </div>

//   </nav>
// };



// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { X, Menu } from "lucide-react";

// const navItems = [
//   {name: "Home", href: "#hero"},
//   {name: "About", href: "#about"},
//   {name: "Skills", href: "#skills"},
//   {name: "projects", href: "#projects"},
//   {name: "Contact", href: "#contact"},
// ]

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <nav className={cn(
//       "fixed w-full z-40 transition-all duration-300",
//       isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//     )}>
//       <div className="container flex items-center justify-between">
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero">
//           <span className="relative z-10">
//             <span className="text-glow text-foreground"> AnasTech </span>
//             Portfolio
//           </span>
//         </a>

//         {/* Desktop Navbar */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="relative text-foreground/80 hover:text-primary transition-colors duration-300 group py-1"
//             >
//               {item.name}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         {/* Mobile Navbar Toggle */}
//         <button 
//           onClick={() => setIsMenuOpen(!isMenuOpen)} 
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile Menu */}
//         <div className={cn(
//           "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
//           "transition-all duration-300",
//           isMenuOpen ? "opacity-100 pointer-events-auto" 
//           : "opacity-0 pointer-events-none"
//         )}>
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="relative text-foreground/80 hover:text-primary transition-colors duration-300 text-center group"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };



// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { X, Menu } from "lucide-react";

// const navItems = [
//   {name: "Home", href: "#hero"},
//   {name: "About", href: "#about"},
//   {name: "Skills", href: "#skills"},
//   {name: "Projects", href: "#projects"},
//   {name: "Contact", href: "#contact"},
// ]

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     }
//   }, []);

//   return (
//     <nav className={cn(
//       "fixed w-full z-40 transition-all duration-300",
//       isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//     )}>
//       <div className="container flex items-center justify-between">
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero">
//           <span className="relative z-10">
//             <span className="text-glow text-foreground"> AnasTech </span>
//             Portfolio
//           </span>
//         </a>

//         {/* Desktop Navbar */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="relative text-foreground/70 hover:text-primary transition-all duration-300 group py-1 font-medium tracking-wide hover:tracking-wider hover:scale-105 hover:font-semibold"
//               style={{
//                 textShadow: '0 0 0 transparent',
//                 transition: 'all 0.3s ease, text-shadow 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.textShadow = '0 0 8px rgba(59, 130, 246, 0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.textShadow = '0 0 0 transparent';
//               }}
//             >
//               {item.name}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
//             </a>
//           ))}
//         </div>

//         {/* Mobile Navbar Toggle */}
//         <button 
//           onClick={() => setIsMenuOpen(!isMenuOpen)} 
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile Menu */}
//         <div className={cn(
//           "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
//           "transition-all duration-300",
//           isMenuOpen ? "opacity-100 pointer-events-auto" 
//           : "opacity-0 pointer-events-none"
//         )}>
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="relative text-foreground/70 hover:text-primary transition-all duration-300 text-center group font-medium tracking-wide hover:tracking-wider hover:scale-110 hover:font-semibold"
//                 onClick={() => setIsMenuOpen(false)}
//                 style={{
//                   textShadow: '0 0 0 transparent',
//                   transition: 'all 0.3s ease, text-shadow 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.textShadow = '0 0 10px rgba(59, 130, 246, 0.5)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.textShadow = '0 0 0 transparent';
//                 }}
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };



import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "projects", href: "#projects"},
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
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative text-foreground text-base font-semibold tracking-wide hover:text-primary transition-all duration-300 group py-1 hover:tracking-wider hover:scale-105"
              style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease, text-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 8px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
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
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 text-center group font-bold tracking-wide hover:tracking-wider hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease, text-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 10px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};