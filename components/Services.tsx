
import React from 'react';
import type { Service } from '../types';
import CodeIcon from './icons/CodeIcon';
import MegaphoneIcon from './icons/MegaphoneIcon';
import RocketIcon from './icons/RocketIcon';

const services: Service[] = [
  {
    icon: <CodeIcon />,
    title: 'ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
    description: 'আপনার ব্যবসার জন্য একটি আধুনিক, রেসপন্সিভ এবং ব্যবহারকারী-বান্ধব ওয়েবসাইট তৈরি করুন যা গ্রাহকদের আকর্ষণ করবে।',
  },
  {
    icon: <MegaphoneIcon />,
    title: 'ডিজিটাল মার্কেটিং',
    description: 'সোশ্যাল মিডিয়া মার্কেটিং, কনটেন্ট তৈরি এবং বিজ্ঞাপনের মাধ্যমে আপনার ব্র্যান্ডের পরিচিতি বাড়ান এবং গ্রাহকদের সাথে সংযুক্ত হন।',
  },
  {
    icon: <RocketIcon />,
    title: 'এসইও অপটিমাইজেশন',
    description: 'সার্চ ইঞ্জিনে আপনার ওয়েবসাইটকে উপরের দিকে নিয়ে আসুন এবং সম্ভাব্য গ্রাহকদের কাছে আপনার ব্যবসাকে পৌঁছে দিন।',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-600 mb-6">
      {service.icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">আমাদের সার্ভিসসমূহ</h2>
          <p className="text-lg text-gray-600 mt-2">আমরা আপনার ডিজিটাল প্রয়োজন মেটাতে সম্পূর্ণ সমাধান প্রদান করি।</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
