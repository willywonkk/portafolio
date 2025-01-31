import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            <img
              src="/perfil.png"
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Guillermo Escrig</h1>
            <p className="text-xl text-gray-300 mt-2">Desarrollador Web Full Stack</p>
          </div>
        </div>
      </div>
    </header>
  )
}

