
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';

const Sale = () => {
  const saleBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 9.99,
      originalPrice: 14.99,
      rating: 4.2,
      isOnSale: true
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 11.99,
      originalPrice: 16.99,
      rating: 4.5,
      isOnSale: true
    },
    {
      title: "1984",
      author: "George Orwell",
      price: 10.99,
      originalPrice: 15.99,
      rating: 4.6,
      isOnSale: true
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 8.99,
      originalPrice: 12.99,
      rating: 4.4,
      isOnSale: true
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 12.99,
      originalPrice: 17.99,
      rating: 4.1,
      isOnSale: true
    },
    {
      title: "Lord of the Flies",
      author: "William Golding",
      price: 9.99,
      originalPrice: 13.99,
      rating: 4.0,
      isOnSale: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Books on Sale</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Great books at amazing prices! Don't miss out on these limited-time offers and save big on your favorite titles.
            </p>
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold mt-4">
              Up to 40% OFF
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {saleBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sale;
