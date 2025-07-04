
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover Your Next
              <span className="text-yellow-300"> Great Read</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-md">
              Explore thousands of books across all genres. From bestsellers to hidden gems, find your perfect book today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Browse Categories
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-lg p-6 transform -rotate-6">
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                  <span className="text-gray-400 text-lg">Featured Book Cover</span>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
              30% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
