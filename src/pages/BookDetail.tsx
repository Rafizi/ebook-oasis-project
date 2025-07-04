
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams();

  // Sample book data - in a real app, this would come from an API
  const bookData = {
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviewCount: 2847,
    isOnSale: true,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    isbn: "978-0525559474",
    publisher: "Viking",
    publishDate: "August 13, 2020",
    pages: 288,
    language: "English",
    genre: ["Fiction", "Fantasy", "Philosophy"],
    image: "/placeholder-book.jpg"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Books
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="aspect-[3/4] w-80 bg-gray-100 rounded-lg flex items-center justify-center shadow-lg">
                  {bookData.image ? (
                    <img src={bookData.image} alt={bookData.title} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <span className="text-gray-400 text-lg">Book Cover</span>
                  )}
                </div>
                {bookData.isOnSale && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    SALE
                  </div>
                )}
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{bookData.title}</h1>
                <p className="text-xl text-gray-600 mb-4">by {bookData.author}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(bookData.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{bookData.rating}</span>
                  <span className="text-gray-500">({bookData.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-green-600">${bookData.price}</span>
                  {bookData.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${bookData.originalPrice}
                    </span>
                  )}
                  {bookData.isOnSale && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                      Save ${(bookData.originalPrice! - bookData.price).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mb-8">
                  <Button className="flex-1 h-12 text-lg bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{bookData.description}</p>
                </div>

                {/* Book Details */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Book Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-gray-600">ISBN:</span>
                        <span className="ml-2">{bookData.isbn}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Publisher:</span>
                        <span className="ml-2">{bookData.publisher}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Publish Date:</span>
                        <span className="ml-2">{bookData.publishDate}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Pages:</span>
                        <span className="ml-2">{bookData.pages}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Language:</span>
                        <span className="ml-2">{bookData.language}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Genre:</span>
                        <span className="ml-2">{bookData.genre.join(', ')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail;
