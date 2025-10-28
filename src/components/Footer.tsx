import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7] flex items-center justify-center">
                <span className="text-white">BC</span>
              </div>
              <span>Beauty Care Clinic</span>
            </div>
            <p className="text-gray-600 mb-4">
              Professional beauty care services with modern technology and experienced specialists.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#FFD1DC] transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-[#FFD1DC] transition-colors">
                  {t('nav.booking')}
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-gray-600 hover:text-[#FFD1DC] transition-colors">
                  {t('nav.branches')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[#FFD1DC] transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services?category=skincare"
                  className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
                >
                  {t('services.skincare')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services?category=facial"
                  className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
                >
                  {t('services.facial')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services?category=body"
                  className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
                >
                  {t('services.body')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services?category=spa"
                  className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
                >
                  {t('services.spa')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">{t('contact.info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#FFD1DC] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Beauty Street, District 1, Ho Chi Minh City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FFD1DC]" />
                <a href="tel:+84123456789" className="text-gray-600 hover:text-[#FFD1DC] transition-colors">
                  +84 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FFD1DC]" />
                <a
                  href="mailto:info@beautycare.com"
                  className="text-gray-600 hover:text-[#FFD1DC] transition-colors"
                >
                  info@beautycare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 Beauty Care Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
