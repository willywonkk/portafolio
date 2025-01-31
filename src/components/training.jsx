import React from 'react'

export default function training() {
    const training_academic = [
      {
        course: "Ciclo Superior de Dessarollo de Aplicaciones Web",
        center: "Monlau Centre d'Estudis, Barcelona",
        period: "2023 - Actualmente"
      },
      {
        course: "Ciclo medio de Sistemas Microinformatico y Redes",
        center: "Monlau Centre d'Estudis, Barcelona",
        period: "2021 - 2023"
      }
    ]
    const training_complementary = [
      {
        course: "Monitor de Tiempo Libre",
        center: "Escola Traç. Formació i Educació en el Lleure, Barcelona",
        period: "2024"
      }
    ]
  
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Formación Academica</h2>
          <div className="space-y-6">
            {training_academic.map((tra1, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg">{tra1.course}</h3>
                <p className="text-gray-600">{tra1.center}</p>
                <p className="text-sm text-gray-500 mt-1">{tra1.period}</p>
              </div>
            ))}
          </div>
        </div>
        <br /> 
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Formación Complementaria</h2>
          <div className="space-y-6">
            {training_complementary.map((tra2, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg">{tra2.course}</h3>
                <p className="text-gray-600">{tra2.center}</p>
                <p className="text-sm text-gray-500 mt-1">{tra2.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  