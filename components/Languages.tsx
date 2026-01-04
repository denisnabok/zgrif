
import React from 'react';
import { LANGUAGES } from '../constants';

const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Языки перевода</h2>
          <div className="h-1 w-24 bg-yellow-600 mx-auto rounded"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Работаем с более чем 50 языками мира, включая редкие диалекты.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {LANGUAGES.map((lang, idx) => (
            <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 hover:shadow-sm transition group">
              <span className="text-2xl mr-3">{lang.flag}</span>
              <span className="font-bold text-gray-700 group-hover:text-yellow-800">{lang.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 italic">И многие другие... Свяжитесь с нами для уточнения возможности перевода с редкого языка.</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;
