import React from 'react'

const About = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
        <h1 className="text-3xl font-bold text-slate-900">About the Central Library</h1>
      </div>
      <p className="text-slate-700 leading-relaxed">
        The GTU Central Library supports research, teaching, and learning with curated collections,
        digital resources, and collaborative spaces. This section will outline our vision, services,
        and key facilities. Customize this copy with real details when available.
      </p>
    </section>
  )
}

export default About
