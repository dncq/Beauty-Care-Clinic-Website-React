import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { ServiceMenu } from './components/ServiceMenu';
import { ServiceDetail } from './components/ServiceDetail';
import { BookingForm } from './components/BookingForm';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { MemberDashboard } from './components/MemberDashboard';
import { BranchList } from './components/BranchList';
import { BranchDetail } from './components/BranchDetail';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import { Reviews } from './components/Reviews';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<ServiceMenu />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<MemberDashboard />} />
              <Route path="/branches" element={<BranchList />} />
              <Route path="/branches/:id" element={<BranchDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <Toaster position="top-right" />
        </div>
      </Router>
    </LanguageProvider>
  );
}
