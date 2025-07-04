
import React from 'react';
import BookCard from './BookCard';

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      title: "The Great Adventure",
      author: "John Smith",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.5,
      isOnSale: true
    },
    {
      title: "Mystery of the Lost City",
      author: "Sarah Johnson",
      price: 15.99,
      rating: 4.2
    },
    {
      title: "Science Fiction Chronicles",
      author: "Mike Wilson",
      price: 22.99,
      rating: 4.8
    },
    {
      title: "Romance in Paris",
      author: "Emily Brown",
      price: 12.99,
      originalPrice: 16.99,
      rating: 4.3,
      isOnSale: true
    },
    {
      title: "History Unveiled",
      author: "David Miller",
      price: 18.99,
      rating: 4.6
    },
    {
      title: "Cooking Masterclass",
      author: "Chef Maria",
      price: 25.99,
      rating: 4.9
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Books</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of the most popular and highly-rated books across all genres.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
