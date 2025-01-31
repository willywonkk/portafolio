import React from 'react'

export default function Experience() {
    const experiences = [
      {
        "company": "Bedloop.com",
        "position": "Técnico en Mantenimiento Web",
        "period": "2024 - Actualmente",
        "description": "Encargado del mantenimiento y la optimización de la plataforma web, solucionando errores técnicos, actualizando contenidos y asegurando el correcto funcionamiento del sitio para mejorar la experiencia del usuario."
      },
      {
        "company": "Splai de Santuario de Santa Eulalia",
        "position": "Monitor de Splai",
        "period": "2023 - Actualmente",
        "description": "Responsable de planificar y coordinar actividades educativas y recreativas para niños y jóvenes, fomentando valores como el trabajo en equipo, la creatividad y el respeto."
      },
      {
        "company": "La Traca, Sant Andreu, Barcelona",
        "position": "Dependiente/Cajero",
        "period": "2024",
        "description": "Atención al cliente en el punto de venta, manejo de caja registradora, reposición de productos y apoyo en la organización general de la tienda."
      },
      {
        "company": "Escola Brasil, Barcelona",
        "position": "Técnico de Mantenimiento TIC",
        "period": "2022 - 2023",
        "description": "Realización de tareas de mantenimiento de equipos informáticos, instalación de software, resolución de incidencias tecnológicas y soporte técnico para personal docente y administrativo."
      }
      
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Experiencia Laboral</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg">{exp.company}</h3>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  