
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Users, Award, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About BookStore</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about connecting readers with the books they love. Since 2020, we've been your trusted source for quality books across all genres.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Books Available</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Fast Delivery</p>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                BookStore was founded with a simple mission: to make great books accessible to everyone. What started as a small local bookshop has grown into one of the most trusted online book retailers, serving readers worldwide.
              </p>
              <p className="mb-6">
                We believe that books have the power to transform lives, spark imagination, and connect people across cultures and generations. That's why we carefully curate our collection to include everything from timeless classics to the latest bestsellers, ensuring there's something for every reader.
              </p>
              <p className="mb-6">
                Our team of book lovers works tirelessly to provide you with detailed reviews, personalized recommendations, and exceptional customer service. We're not just selling books – we're building a community of readers who share our passion for the written word.
              </p>
              <p>
                Thank you for choosing BookStore as your literary companion. Happy reading!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
