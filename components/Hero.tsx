
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden bg-[#121212]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/42/1920/1080" 
          alt="Moscow Business Center" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Счастье — это когда тебя <span className="text-yellow-500">понимают...</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-forum">
            Мы сделаем так, чтобы Вас поняли правильно! Профессиональные переводы с 2005 года.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded font-bold flex items-center justify-center transition-all transform hover:scale-105 shadow-xl">
              Заказать перевод <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="border border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded font-bold transition">
              Узнать цены
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 opacity-70 grayscale">
             <div className="flex flex-col">
               <span className="text-3xl font-bold">20+</span>
               <span className="text-xs uppercase tracking-widest">Лет опыта</span>
             </div>
             <div className="flex flex-col">
               <span className="text-3xl font-bold">50+</span>
               <span className="text-xs uppercase tracking-widest">Языков</span>
             </div>
             <div className="flex flex-col">
               <span className="text-3xl font-bold">100%</span>
               <span className="text-xs uppercase tracking-widest">Гарантия</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
