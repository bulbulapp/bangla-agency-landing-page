
import React from 'react';
import type { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'বেসিক',
    price: '১০,০০০',
    period: 'মাসিক',
    features: ['৫ পেজের ওয়েবসাইট', 'বেসিক এসইও', 'মোবাইল রেসপন্সিভ', 'মাসিক সাপোর্ট'],
    isPopular: false,
    ctaText: 'শুরু করুন',
  },
  {
    name: 'স্ট্যান্ডার্ড',
    price: '২৫,০০০',
    period: 'মাসিক',
    features: ['১০ পেজের ওয়েবসাইট', 'অ্যাডভান্সড এসইও', 'ই-কমার্স সুবিধা', 'সাপ্তাহিক রিপোর্ট', 'ডেডিকেটেড সাপোর্ট'],
    isPopular: true,
    ctaText: 'বেছে নিন',
  },
  {
    name: 'প্রিমিয়াম',
    price: '৫০,০০০',
    period: 'মাসিক',
    features: ['আনলিমিটেড পেজ', 'সম্পূর্ণ ডিজিটাল মার্কেটিং', 'অ্যাপ ইন্টিগ্রেশন', 'দৈনিক আপডেট', 'অগ্রাধিকার সাপোর্ট'],
    isPopular: false,
    ctaText: 'যোগাযোগ করুন',
  },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 border ${plan.isPopular ? 'border-teal-500 transform scale-105' : 'border-gray-200'}`}>
    {plan.isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <span className="bg-teal-500 text-white text-sm font-semibold px-4 py-1 rounded-full uppercase">জনপ্রিয়</span>
      </div>
    )}
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
      <p className="text-gray-500 mb-4">{plan.period}</p>
      <p className="text-4xl font-extrabold text-gray-900 mb-1">৳{plan.price}</p>
      <p className="text-gray-500 mb-6">প্রতি মাসে</p>
    </div>
    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
      {plan.ctaText}
    </button>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">আমাদের মূল্য তালিকা</h2>
          <p className="text-lg text-gray-600 mt-2">আপনার প্রয়োজন এবং বাজেট অনুযায়ী সেরা প্ল্যানটি বেছে নিন।</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
