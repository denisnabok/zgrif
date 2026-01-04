
import React from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="lg:w-1/2 p-10 lg:p-16 text-white bg-yellow-600">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Готовы начать?</h2>
            <p className="text-lg text-yellow-50 mb-10 font-forum">
              Оставьте заявку на расчет стоимости перевода. Мы ответим вам в течение 15 минут.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-500/50 rounded-full flex items-center justify-center mr-4">
                  <Send size={20} />
                </div>
                <span>info@zgrif.ru</span>
              </div>
              <p className="text-sm text-yellow-100/70 border-t border-yellow-500 pt-6 mt-10 italic">
                * Бесплатная консультация и предварительный расчет стоимости
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-10 lg:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Ваше имя</label>
                  <input type="text" className="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-yellow-600 transition" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Телефон</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-yellow-600 transition" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">E-mail</label>
                <input type="email" className="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-yellow-600 transition" placeholder="mail@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Комментарий</label>
                <textarea className="w-full bg-white/5 border border-white/20 rounded p-4 text-white h-32 focus:outline-none focus:border-yellow-600 transition" placeholder="Укажите вид перевода, объем и желаемые сроки..."></textarea>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <input type="checkbox" className="rounded bg-gray-800 border-gray-700" />
                <span>Согласен на обработку персональных данных</span>
              </div>
              <button className="w-full bg-white text-gray-900 py-4 rounded font-bold hover:bg-yellow-600 hover:text-white transition shadow-lg">
                ОТПРАВИТЬ ЗАЯВКУ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
