
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Heart, Zap, Globe, Microscope, Clock } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Fiction',
      icon: Book,
      count: '2,450 books',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Romance',
      icon: Heart,
      count: '1,230 books',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Sci-Fi',
      icon: Zap,
      count: '890 books',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Travel',
      icon: Globe,
      count: '567 books',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Science',
      icon: Microscope,
      count: '1,120 books',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'History',
      icon: Clock,
      count: '780 books',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of books organized by genre and topic.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
