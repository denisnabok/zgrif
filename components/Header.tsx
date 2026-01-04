
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, Search } from 'lucide-react';
import { CONTACTS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full bg-white transition-all duration-300">
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-[#1a1a1a] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href={`tel:${CONTACTS.phoneRaw}`} className="flex items-center hover:text-yellow-500">
              <Phone size={14} className="mr-2" /> {CONTACTS.phone}
            </a>
            <a href={`mailto:${CONTACTS.email}`} className="flex items-center hover:text-yellow-500">
              <Mail size={14} className="mr-2" /> {CONTACTS.email}
            </a>
            <a href={`https://wa.me/${CONTACTS.phoneRaw}`} className="flex items-center hover:text-green-400">
              <MessageCircle size={14} className="mr-2" /> WhatsApp
            </a>
          </div>
          <div className="text-gray-300">
            {CONTACTS.address} | {CONTACTS.workHours}
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2 backdrop-blur-sm' : 'bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-none">ЗОЛОТОЙ ГРИФ</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-yellow-600 font-bold">Бюро переводов с 2005 года</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="font-bold text-gray-700 hover:text-yellow-600 transition">Услуги</a>
            <a href="#languages" className="font-bold text-gray-700 hover:text-yellow-600 transition">Языки</a>
            <a href="#reviews" className="font-bold text-gray-700 hover:text-yellow-600 transition">Отзывы</a>
            <a href="#contacts" className="font-bold text-gray-700 hover:text-yellow-600 transition">Контакты</a>
            <button className="bg-yellow-600 text-white px-6 py-2.5 rounded shadow-lg hover:bg-yellow-700 transition font-bold text-sm uppercase tracking-wider">
              Заказать перевод
            </button>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <a href={`tel:${CONTACTS.phoneRaw}`} className="p-2 text-yellow-600"><Phone size={20} /></a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden">
          <nav className="flex flex-col space-y-6 text-xl">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="border-b pb-2 font-forum">Услуги</a>
            <a href="#languages" onClick={() => setIsMenuOpen(false)} className="border-b pb-2 font-forum">Языки перевода</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="border-b pb-2 font-forum">Отзывы</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="border-b pb-2 font-forum">Контакты</a>
            <button className="w-full bg-yellow-600 text-white py-4 rounded font-bold shadow-lg mt-4">
              ЗАКАЗАТЬ ПЕРЕВОД
            </button>
          </nav>
          <div className="mt-12 text-sm text-gray-500">
            <p className="mb-2">{CONTACTS.address}</p>
            <p>{CONTACTS.workHours}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
