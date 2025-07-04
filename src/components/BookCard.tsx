
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image?: string;
  isOnSale?: boolean;
  bookId?: string | number;
}

const BookCard = ({ 
  title, 
  author, 
  price, 
  originalPrice, 
  rating, 
  image, 
  isOnSale = false,
  bookId = 1
}: BookCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        {/* Book Cover - Clickable */}
        <Link to={`/book/${bookId}`} className="block">
          <div className="relative mb-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Book Cover</span>
              )}
            </div>
            {isOnSale && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                SALE
              </div>
            )}
          </div>
        </Link>
        
        {/* Book Info */}
        <div className="space-y-2">
          <Link to={`/book/${bookId}`}>
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
              {title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm">{author}</p>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({rating})</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            className="w-full mt-3 group-hover:bg-blue-600 transition-colors" 
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
