
import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Customer Service</span>
            <span>Track Order</span>
          </div>
        </div>
        
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">BookStore</h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for books, authors, or categories..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
          
          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="py-3 border-t border-gray-100">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-4">
                      <a href="#" className="block p-2 hover:bg-gray-50 rounded">Fiction</a>
                      <a href="#" className="block p-2 hover:bg-gray-50 rounded">Non-Fiction</a>
                      <a href="#" className="block p-2 hover:bg-gray-50 rounded">Science</a>
                      <a href="#" className="block p-2 hover:bg-gray-50 rounded">History</a>
                      <a href="#" className="block p-2 hover:bg-gray-50 rounded">Romance</a>
                      <a href="#" className="block p-2 hover:bg-gray-50 rounded">Mystery</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className="text-sm font-medium hover:text-blue-600">Bestsellers</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className="text-sm font-medium hover:text-blue-600">New Releases</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className="text-sm font-medium hover:text-blue-600">Sale</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className="text-sm font-medium hover:text-blue-600">About</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
