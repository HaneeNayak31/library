import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import HeaderOPEN from './Components/HeaderOPEN.jsx'
import NavbarOPEN from './Components/NavbarOPEN.jsx'
import Footer from './Components/Footer.jsx'
import Breadcrumbs from './Components/Breadcrumbs.jsx'
import FloatingChatbot from './Components/FloatingChatbot.jsx'
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
import AskALibrarian from './Pages/AskALibrarian.jsx'
import ServicesFacilities from './Pages/ServicesFacilities.jsx'
import NewsEvents from './Pages/NewsEvents.jsx'

// Admin Components
import AdminLogin from './Admin/AdminLogin.jsx'
import AdminLayout from './Admin/AdminLayout.jsx'
import Dashboard from './Admin/Dashboard.jsx'
import ManageResources from './Admin/ManageResources.jsx'
import ManageEvents from './Admin/ManageEvents.jsx'
import ManageBooks from './Admin/ManageBooks.jsx'
import ManageNotices from './Admin/ManageNotices.jsx'
import LibraryAnalytics from './Admin/LibraryAnalytics.jsx'
import BannerControl from './Admin/BannerControl.jsx'
import AdminManagement from './Admin/AdminManagement.jsx'
import AdminSettings from './Admin/AdminSettings.jsx'

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderOPEN />
      <NavbarOPEN />
      <Breadcrumbs />
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-2 pb-12 md:pt-4 md:pb-16">
        <Outlet />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Admin Interface Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="books" element={<ManageBooks />} />
        <Route path="resources" element={<ManageResources />} />
        <Route path="events" element={<ManageEvents />} />
        <Route path="notices" element={<ManageNotices />} />
        <Route path="analytics" element={<LibraryAnalytics />} />
        <Route path="banner" element={<BannerControl />} />
        <Route path="admins" element={<AdminManagement />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>

      {/* Public Library Website Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="about/central-library" element={<AboutCentralLibrary />} />
        <Route path="about/vision-mission" element={<VisionMission />} />
        <Route path="about/message-from-vc" element={<MessageFromVC />} />
        <Route path="about/message-from-librarian" element={<MessageFromLibrarian />} />
        <Route path="about/library-committee" element={<LibraryCommittee />} />
        <Route path="about/procurement-procedure" element={<ProcurementProcedure />} />
        <Route path="about/ask-a-librarian" element={<AskALibrarian />} />
        <Route path="services-facilities" element={<ServicesFacilities />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="activity" element={<Activity />} />
        <Route path="e-resources" element={<EResources />} />
        <Route path="open-access-resources" element={<OpenAccessResources />} />
        <Route path="membership-protocol" element={<MembershipProtocol />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
