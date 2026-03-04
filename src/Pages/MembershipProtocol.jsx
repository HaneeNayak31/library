import React from 'react'

const MembershipProtocol = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased py-8 text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
         <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-accent/20 rounded-full border border-accent/20">
            Rules & Regulations
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-4 font-serif">
            Membership & Protocol
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Guidelines to ensure smooth functioning and equal access to library resources for all members.
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Section 1: Membership Eligibility */}
          <div className="p-8 md:p-12 border-b border-slate-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 font-serif">
              <span className="w-1.5 h-8 bg-accent rounded-full"></span>
              Membership Eligibility
            </h2>
            <p className="text-slate-600 mb-4">
              Membership is open to all students, faculty, and staff of Gujarat Technological University. To become a member, please fill out the membership form and submit it along with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <li>A copy of your Fee Receipt (for students)</li>
              <li>Appointment Order / ID Proof (for faculty & staff)</li>
              <li>Note: <span className="font-semibold text-primary">Library Smart Card</span> is mandatory for circulation.</li>
            </ul>
          </div>

          {/* Section 2: Borrowing Privileges Table */}
          <div className="p-8 md:p-12 bg-slate-50/50 border-b border-slate-100">
             <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 font-serif">
              <span className="w-1.5 h-8 bg-accent rounded-full"></span>
              Borrowing Privileges
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white text-sm uppercase tracking-wider">
                    <th className="p-4 border-b border-blue-800">User Category</th>
                    <th className="p-4 border-b border-blue-800">No. of Books</th>
                    <th className="p-4 border-b border-blue-800">Loan Period</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-semibold">Faculty / Staff</td>
                    <td className="p-4">02</td>
                    <td className="p-4">30 Days</td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-semibold">PhD Scholars</td>
                    <td className="p-4">02</td>
                    <td className="p-4">30 Days</td>
                  </tr>
                   <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-semibold">PG Students</td>
                    <td className="p-4">02</td>
                    <td className="p-4">15 Days</td>
                  </tr>
                   <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-semibold">UG Students</td>
                    <td className="p-4">02</td>
                    <td className="p-4">15 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: General Rules */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 font-serif">
              <span className="w-1.5 h-8 bg-accent rounded-full"></span>
              General Rules & Conduct
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
               <div className="flex gap-4">
                 <span className="font-bold text-accent text-xl">01</span>
                 <p>Silence must be strictly observed in the library premises. Mobile phones should be kept on silent mode.</p>
               </div>
               <div className="flex gap-4">
                 <span className="font-bold text-accent text-xl">02</span>
                 <p>Bags, umbrellas, and personal books should be kept at the property counter. The library is not responsible for valuables left there.</p>
               </div>
               <div className="flex gap-4">
                 <span className="font-bold text-accent text-xl">03</span>
                 <p>Reference books, journals, and theses are for consultation within the library only and cannot be issued out.</p>
               </div>
               <div className="flex gap-4">
                 <span className="font-bold text-accent text-xl">04</span>
                 <p>Late return of books will attract a fine of <span className="font-bold text-primary">₹1.00 per day</span> per book.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MembershipProtocol
