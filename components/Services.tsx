
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши Услуги</h2>
          <div className="h-1 w-24 bg-yellow-600 mx-auto rounded"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Мы оказываем комплексные услуги по профессиональному переводу любых документов и текстов, обеспечивая многоступенчатый контроль качества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4 border-yellow-600/20">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start">
                    <CheckCircle2 className="text-yellow-600 mr-3 mt-1 shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full text-yellow-700 font-bold border border-yellow-600 py-3 rounded hover:bg-yellow-600 hover:text-white transition">
                Подробнее
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
