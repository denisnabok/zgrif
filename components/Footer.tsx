
import React from 'react';
import { CONTACTS } from '../constants';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-bold tracking-tight">ЗОЛОТОЙ ГРИФ</h3>
            <p className="text-sm leading-relaxed">
              Одно из старейших бюро переводов в Москве. С 2005 года мы помогаем людям и компаниям понимать друг друга, гарантируя высочайшее качество и конфиденциальность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-600 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-yellow-600 transition"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Услуги</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition">Письменный перевод</a></li>
              <li><a href="#" className="hover:text-white transition">Устный перевод</a></li>
              <li><a href="#" className="hover:text-white transition">Заверение документов</a></li>
              <li><a href="#" className="hover:text-white transition">Апостиль и Легализация</a></li>
              <li><a href="#" className="hover:text-white transition">Корпоративным клиентам</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Навигация</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-white transition">Все услуги</a></li>
              <li><a href="#languages" className="hover:text-white transition">Языки</a></li>
              <li><a href="#reviews" className="hover:text-white transition">Отзывы</a></li>
              <li><a href="#" className="hover:text-white transition">Вакансии</a></li>
              <li><a href="#" className="hover:text-white transition">Статьи</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Контакты</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-yellow-600 shrink-0" />
                <span>{CONTACTS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-yellow-600 shrink-0" />
                <a href={`tel:${CONTACTS.phoneRaw}`} className="hover:text-white">{CONTACTS.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-yellow-600 shrink-0" />
                <a href={`mailto:${CONTACTS.email}`} className="hover:text-white">{CONTACTS.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2007–2025 Бюро переводов «Золотой Гриф». Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-400">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
