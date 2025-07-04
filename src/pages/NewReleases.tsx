
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';

const NewReleases = () => {
  const newReleaseBooks = [
    {
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      price: 26.99,
      rating: 4.6
    },
    {
      title: "The Atlas Six",
      author: "Olivie Blake",
      price: 23.99,
      originalPrice: 28.99,
      rating: 4.3,
      isOnSale: true
    },
    {
      title: "Book Lovers",
      author: "Emily Henry",
      price: 21.99,
      rating: 4.7
    },
    {
      title: "The Summer I Turned Pretty",
      author: "Jenny Han",
      price: 12.99,
      rating: 4.4
    },
    {
      title: "It Ends with Us",
      author: "Colleen Hoover",
      price: 15.99,
      originalPrice: 18.99,
      rating: 4.5,
      isOnSale: true
    },
    {
      title: "Circe",
      author: "Madeline Miller",
      price: 19.99,
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">New Releases</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay up-to-date with the latest books from your favorite authors and discover new voices in literature.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {newReleaseBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewReleases;
