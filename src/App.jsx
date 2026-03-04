import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeaderOPEN from './Components/HeaderOPEN.jsx'
import NavbarOPEN from './Components/NavbarOPEN.jsx'
import Footer from './Components/Footer.jsx'
import Landing from './Pages/Landing.jsx'
import About from './Pages/About.jsx'
import AboutCentralLibrary from './Pages/AboutCentralLibrary.jsx'
import VisionMission from './Pages/VisionMission.jsx'
import MessageFromVC from './Pages/MessageFromVC.jsx'
import MessageFromLibrarian from './Pages/MessageFromLibrarian.jsx'
import LibraryCommittee from './Pages/LibraryCommittee.jsx'
import ProcurementProcedure from './Pages/ProcurementProcedure.jsx'
import Activity from './Pages/Activity.jsx'
import EResources from './Pages/EResources.jsx'
import OpenAccessResources from './Pages/OpenAccessResources.jsx'
import MembershipProtocol from './Pages/MembershipProtocol.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderOPEN />
      <NavbarOPEN />
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-2 pb-12 md:pt-4 md:pb-16">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/central-library" element={<AboutCentralLibrary />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/message-from-vc" element={<MessageFromVC />} />
          <Route path="/about/message-from-librarian" element={<MessageFromLibrarian />} />
          <Route path="/about/library-committee" element={<LibraryCommittee />} />
          <Route path="/about/procurement-procedure" element={<ProcurementProcedure />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/e-resources" element={<EResources />} />
          <Route path="/open-access-resources" element={<OpenAccessResources />} />
          <Route path="/membership-protocol" element={<MembershipProtocol />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
