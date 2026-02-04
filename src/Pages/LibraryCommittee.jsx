import React from 'react'

const LibraryCommittee = () => {
  const committeeMembers = [
    { name: 'Dr. [Name]', position: 'Chairperson', department: 'Vice Chancellor' },
    { name: '[Name]', position: 'Member', department: 'Chief Librarian' },
    { name: 'Dr. [Name]', position: 'Member', department: 'Faculty Representative' },
    { name: 'Dr. [Name]', position: 'Member', department: 'Faculty Representative' },
  ]

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
        <h1 className="text-3xl font-bold text-slate-900">Library Committee</h1>
      </div>
      
      <p className="text-slate-700 leading-relaxed">
        The Library Committee oversees the operations, policies, and strategic development of the 
        GTU Central Library to ensure quality services for all stakeholders.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {committeeMembers.map((member, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-5 border-l-4 border-blue-600">
            <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
            <p className="text-sm text-blue-600 font-semibold">{member.position}</p>
            <p className="text-sm text-slate-600">{member.department}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LibraryCommittee
