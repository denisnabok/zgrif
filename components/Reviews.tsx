
import React from 'react';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
          <div className="h-1 w-24 bg-yellow-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="ml-auto text-xs text-gray-400 font-bold uppercase tracking-widest">{review.platform}</span>
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm">
                  {review.author[0]}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-blue-600 font-bold hover:underline">Google Отзывы (5.0 ★)</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-red-600 font-bold hover:underline">Яндекс Карты (4.9 ★)</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
