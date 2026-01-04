
import React from 'react';
import * as Icons from 'lucide-react';
import { ADVANTAGES } from '../constants';

const Advantages: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            // @ts-ignore
            const IconComponent = Icons[adv.icon];
            return (
              <div key={idx} className="p-8 border border-gray-100 rounded-xl hover:shadow-2xl hover:border-yellow-200 transition-all duration-300 group bg-gray-50/50">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
