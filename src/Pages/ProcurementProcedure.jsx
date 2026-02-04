import React from 'react'

const ProcurementProcedure = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
        <h1 className="text-3xl font-bold text-slate-900">Central Library Procurement Operating Procedure</h1>
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
        <p className="text-slate-700 leading-relaxed mb-4">
          This document outlines the standard operating procedures for procurement of library materials, 
          resources, and services at the GTU Central Library.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Procurement Planning</h2>
          <p className="text-slate-700 leading-relaxed">
            Details about the planning process for library acquisitions, budget allocation, and approval workflows.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Vendor Selection</h2>
          <p className="text-slate-700 leading-relaxed">
            Guidelines for selecting and evaluating vendors for books, journals, and digital resources.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Acquisition Process</h2>
          <p className="text-slate-700 leading-relaxed">
            Step-by-step procedure for ordering, receiving, and processing library materials.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Quality Control</h2>
          <p className="text-slate-700 leading-relaxed">
            Standards and procedures for ensuring quality of procured materials and services.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProcurementProcedure
