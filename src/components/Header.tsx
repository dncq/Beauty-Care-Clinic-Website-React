import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/booking', label: t('nav.booking') },
    { path: '/branches', label: t('nav.branches') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
    { code: 'ja', flag: '🇯🇵', name: '日本語' },
    { code: 'zh', flag: '🇨🇳', name: '中文' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7] flex items-center justify-center">
              <span className="text-white">BC</span>
            </div>
            <span className="hidden md:block">Beauty Care Clinic</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-[#FFD1DC] ${
                  location.pathname === link.path ? 'text-[#FFD1DC]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`transition-all hover:scale-110 ${
                    language === lang.code ? 'opacity-100 scale-110' : 'opacity-50'
                  }`}
                  title={lang.name}
                >
                  <span className="text-2xl">{lang.flag}</span>
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="ghost">{t('nav.dashboard')}</Button>
                  </Link>
                  <Button variant="ghost" onClick={() => setIsLoggedIn(false)}>
                    {t('nav.logout')}
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost">{t('nav.login')}</Button>
                  </Link>
                  <Link to="/register">
                    <Button className="bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                      {t('nav.register')}
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Quick Book Button */}
            <Link to="/booking" className="hidden md:block">
              <Button className="bg-[#A7C7E7] hover:bg-[#8FB5D9] text-gray-800">
                <Calendar className="mr-2 h-4 w-4" />
                {t('nav.booking')}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`p-2 rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'bg-[#FFD1DC]/20 text-[#FFD1DC]'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex gap-2 mb-4">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as any);
                            setMobileOpen(false);
                          }}
                          className={`p-2 rounded-lg transition-all ${
                            language === lang.code ? 'bg-[#FFD1DC]/20 scale-110' : 'hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {isLoggedIn ? (
                    <>
                      <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                        <Button variant="outline" className="w-full">
                          {t('nav.dashboard')}
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          setIsLoggedIn(false);
                          setMobileOpen(false);
                        }}
                      >
                        {t('nav.logout')}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setMobileOpen(false)}>
                        <Button variant="outline" className="w-full">
                          {t('nav.login')}
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                          {t('nav.register')}
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
