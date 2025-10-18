
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          আপনার ব্যবসাকে দিন ডিজিটাল রূপ
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          আমরা আপনার ব্যবসাকে আধুনিক প্রযুক্তির সাথে যুক্ত করে সাফল্য অর্জনে সহায়তা করি। আমাদের專業 সমাধান আপনার ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যাবে।
        </p>
        <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          এখনই শুরু করুন
        </button>
      </div>
    </section>
  );
};

export default Hero;
