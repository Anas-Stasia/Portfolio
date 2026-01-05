// import { useState } from "react"
// import {cn} from "@/lib/utils";

// const skills = [
//   //Frontend
//   { name: "HTML/CSS", level: 70, category: "frontend" },
//   { name: "JavaScript", level: 70, category: "frontend" },
//   { name: "React.js", level: 70, category: "frontend" },
//   { name: "Tailwind CSS", level: 60, category: "frontend" },

//   //Backend

//   // { name: "Express.js", level: 40, category: "backend" },
//   // { name: "MongoDb", level: 40, category: "backend" },


//   //tools
//   { name: "VScode", level: 85, category: "tools" },
//   { name: "Git/Github", level: 70, category: "tools" }

// ]

// const categories = [ "all", "frontend", "tools"]


// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || activeCategory === skill.category
//   );
//   return (
//     <section id="skills" className="py-24 px-4  relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My
//           <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button 
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                   "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                   activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bd-secondary"
                  
//                   )}>
//                 {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//             key={key}
//             className="bg-card p-6 rounded-lg shadow-xs card-hover">
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg">{skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                       style={{width: skill.level + "%"}}>
//                 </div>
//               </div>

//               <div className="text-right mt-1 ">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   )
// }



import { useState } from "react"
import { cn } from "@/lib/utils";
import { Code, Wrench, Layers } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 70, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 70, category: "frontend", icon: "⚡" },
  { name: "React.js", level: 70, category: "frontend", icon: "⚛️" },
  { name: "Tailwind CSS", level: 60, category: "frontend", icon: "💨" },

  // Tools
  { name: "VSCode", level: 85, category: "tools", icon: "💻" },
  { name: "Git/Github", level: 70, category: "tools", icon: "🔧" },
]

const categories = [
  { id: "all", label: "All Skills", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "tools", label: "Tools", icon: Wrench },
]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || activeCategory === skill.category
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across various technologies
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium flex items-center gap-2 border-2",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30 scale-105"
                    : "bg-background/50 text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <Icon size={18} className={cn(
                  "transition-transform duration-300",
                  activeCategory === category.id && "rotate-12"
                )} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card border border-border rounded-xl p-6 card-hover overflow-hidden transition-all duration-300 hover:border-primary/50"
              style={{ animationDelay: `${key * 0.1}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header with icon and name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full origin-left transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: skill.level + "%" }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Proficiency badge */}
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  {skill.level >= 80 ? "Expert" : skill.level >= 60 ? "Proficient" : "Intermediate"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state message */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No skills found in this category.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}