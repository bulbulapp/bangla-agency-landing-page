
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}
