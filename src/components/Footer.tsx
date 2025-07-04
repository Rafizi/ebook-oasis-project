
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">BookStore</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for discovering amazing books. We've been serving book lovers since 2010.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Fiction</a></li>
              <li><a href="#" className="hover:text-white">Non-Fiction</a></li>
              <li><a href="#" className="hover:text-white">Science</a></li>
              <li><a href="#" className="hover:text-white">History</a></li>
              <li><a href="#" className="hover:text-white">Romance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Book Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@bookstore.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 BookStore. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
