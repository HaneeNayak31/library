import React from 'react'

const MessageFromLibrarian = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
        <h1 className="text-3xl font-bold text-slate-900">Message from Librarian</h1>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-600">
        <div className="flex items-start gap-6">
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
            <span className="text-gray-500 text-xs">Photo</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-900 mb-2">[Librarian Name]</h2>
            <p className="text-sm text-slate-600 mb-4">Chief Librarian, GTU Central Library</p>
            <div className="text-slate-700 leading-relaxed space-y-3">
              <p>
                Welcome message from the Chief Librarian. This section will highlight the library's 
                services, resources, and commitment to supporting the academic community.
              </p>
              <p>
                Replace this placeholder text with the actual message from the Chief Librarian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageFromLibrarian
