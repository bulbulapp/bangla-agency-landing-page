
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: '"এই টিমের সাথে কাজ করে আমি অত্যন্ত আনন্দিত। তারা আমাদের ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে একটি নতুন পরিচয় দিয়েছে। তাদের দক্ষতা এবং পেশাদারিত্ব অসাধারণ।"',
    name: 'আরিফ খান',
    title: 'সিইও, সফল উদ্যোগ লিমিটেড',
    avatar: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: '"তাদের ডিজিটাল মার্কেটিং কৌশল আমাদের বিক্রয় বহুগুণ বাড়িয়ে দিয়েছে। আমি তাদের সার্ভিস সবার জন্য সুপারিশ করছি। খুবই নির্ভরযোগ্য একটি প্রতিষ্ঠান।"',
    name: 'সুমি আক্তার',
    title: 'প্রতিষ্ঠাতা, স্টাইল হাব',
    avatar: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: '"আমাদের ওয়েবসাইটটি এখন আগের চেয়ে অনেক বেশি দ্রুত এবং ব্যবহারকারী-বান্ধব। গ্রাহকদের কাছ থেকে খুব ভালো প্রতিক্রিয়া পাচ্ছি। ধন্যবাদ ডিজিটাল সেবা!"',
    name: 'ইমরান চৌধুরী',
    title: 'ম্যানেজার, টেক সলিউশনস',
    avatar: 'https://picsum.photos/id/1027/100/100',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
    <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-teal-200" />
    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
    <div className="mt-auto">
        <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
        <p className="text-teal-600 font-medium">{testimonial.title}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">আমাদের গ্রাহকদের মতামত</h2>
          <p className="text-lg text-gray-600 mt-2">আমাদের গ্রাহকরা আমাদের কাজ নিয়ে যা বলেন।</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
