
const AboutCentralLibrary = () => {
  const staffData = [
    { name: "Dr. Mahesh Solanki", role: "Librarian", email: "librarian@gtu.edu.in", phone: "07923267 - 541" },
    { name: "Mr. Rahul Patel", role: "Technical Assistant Librarian", email: "rahul.patel@gtu.edu.in", phone: "-" },
    { name: "Ms. Urmila Patel", role: "Library Information Assistant", email: "osd_librarian@gtu.edu.in", phone: "07923268 - 811" },
    { name: "Ms. Heenaben Parmar", role: "Library Assistant", email: "assistant_lib_heena@gtu.edu.in", phone: "07923267 - 626" },
    { name: "Mr. Bhargav Nayi", role: "Library Assistant", email: "bhargav.nayi@gtu.edu.in", phone: "-" },
    { name: "Mr. Mohit Hosamani", role: "Library Assistant", email: "mohit.hosamani@gtu.edu.in", phone: "07923267 - 626" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans antialiased pt-2">
      {/* SECTION 1: NARRATIVE CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="border-b border-slate-200 pb-4 mb-8">
          <h1 className="text-2xl font-bold tracking-tight uppercase text-slate-800">
            About Central Library
          </h1>
          <div className="w-12 h-1 bg-[#003366] mt-2 "></div>
        </div>

        {/* Compressed Text Layout */}
        {/* Full Width Text Layout */}
        <div className="grid grid-cols-1 gap-10">
          <div className="md:col-span-12 space-y-5 text-[15px] leading-relaxed text-slate-700">
            <p>
              GTU Central Library is a state-of-the-art facility that offers a range of resources and services to support the academic and research needs of the university community. The library is fully automated, utilizing <span className="text-slate-900 font-semibold">RFID (Radio Frequency Identification)</span> technology to streamline the circulation and management of library materials. This ensures efficient and accurate tracking of the collection.
            </p>
            <p>
              The well-furnished reading room can accommodate a large number of students, providing a conducive environment for study and research. The library also maintains a visitors' book for students and staff to sign in and out.
            </p>
            <p>
              The library's collection includes a diverse range of books, journals, and other resources. New arrivals are regularly displayed, and <span className="text-slate-900 font-semibold">OPAC (Online Public Access Catalogue)</span> is available through the Library Management Software <span className="text-slate-900 font-semibold">(SOUL 3.0)</span> for easy searching and access. The library subscribes to various digital resources, including <span className="font-medium">K-nimbus, K-hub, and Sage</span>, as well as providing access to a wide range of scholarly open-access journals and databases. Students can access these e-resources from anywhere on campus.
            </p>
            <p>
              The library also offers plagiarism detection services to assist users in maintaining academic integrity. With its advanced facilities and comprehensive resources, the GTU Central Library is a valuable asset to the university community, supporting teaching, learning, and research activities.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: STAFF DIRECTORY */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-[#f8fafc] border border-slate-200 p-1 mb-0 shadow-sm">
           <div className="bg-white border border-slate-100 p-4">
              <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-800">
                Administration & Staff Directory
              </h2>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200">
            <thead>
              <tr className="bg-[#003366] text-white">
                <th className="border border-slate-300 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-left">Name of Library Staff</th>
                <th className="border border-slate-300 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-left">Designation</th>
                <th className="border border-slate-300 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-left">Email</th>
                <th className="border border-slate-300 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-left text-center">Contact No.</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {staffData.map((staff, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-200 px-4 py-3 font-bold text-slate-800 uppercase">{staff.name}</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{staff.role}</td>
                  <td className="border border-slate-200 px-4 py-3 text-blue-700 font-mono text-[12px]">{staff.email}</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-500 text-center font-mono">{staff.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutCentralLibrary;