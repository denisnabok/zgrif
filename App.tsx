
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-yellow-200 selection:text-yellow-900">
      <Header />
      <main>
        <Hero />
        <Advantages />
        
        {/* Intro Block from provided text */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Бюро переводов «Золотой гриф»</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-forum">
              <p>
                Наша компания – одно из старейших бюро переводов в Москве – работает с 2005 года. 
                Мы оказываем комплексные услуги по профессиональному переводу любых документов и текстов, устному переводу. 
                Все наши переводчики имеют высшее образование, многолетний опыт и фундаментальные знания в конкретных областях.
              </p>
              <p>
                Мы гарантируем индивидуальный подход, лингвистическое сопровождение и разумные цены. 
                Ведём базы переводов заказчиков. Гарантия качества обеспечивается отлаженной многоступенчатой системой контроля.
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Languages />
        <Reviews />
        
        {/* Client Logos Placeholder */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
             <h2 className="text-2xl font-bold text-center mb-12 text-gray-400 uppercase tracking-widest">Наши Клиенты</h2>
             <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
                {[...Array(6)].map((_, i) => (
                  <img key={i} src={`https://picsum.photos/id/${100+i}/150/60`} alt="Client Logo" className="h-10 w-auto" />
                ))}
             </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      
      {/* Scroll to top button placeholder logic usually goes here */}
    </div>
  );
}

export default App;
