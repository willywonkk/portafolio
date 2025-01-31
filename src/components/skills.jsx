import React from 'react'

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "/logos/html.png" },
    { name: "CSS", icon: "/logos/css.png" },
    { name: "JS", icon: "/logos/js.png" },
    { name: "C++", icon: "/logos/c++.png" },
    { name: "JAVA", icon: "/logos/java.png" },
    { name: "SQL", icon: "/logos/sql.png" },
    { name: "REACT", icon: "/logos/react.png" },
    { name: "TAILWIND", icon: "/logos/tailwindcss.png" },
    { name: "LARAVEL", icon: "/logos/laravel.png" }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Herramientas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={skill.icon || "/placeholder.svg"} 
                alt={`${skill.name} icon`} 
                className="w-24 h-24 object-cover  shadow-md mb-3"
              />
              <span className="text-center font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

