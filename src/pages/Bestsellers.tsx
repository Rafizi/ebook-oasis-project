
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';

const Bestsellers = () => {
  const bestsellerBooks = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      isOnSale: true
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 18.99,
      rating: 4.9
    },
    {
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      price: 16.99,
      rating: 4.7
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 15.99,
      originalPrice: 19.99,
      rating: 4.6,
      isOnSale: true
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 14.99,
      rating: 4.5
    },
    {
      title: "Educated",
      author: "Tara Westover",
      price: 17.99,
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Bestsellers</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most popular books that everyone is talking about. These bestselling titles have captured readers' hearts worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {bestsellerBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bestsellers;
