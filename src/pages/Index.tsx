
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Categories from '@/components/Categories';
import FeaturedBooks from '@/components/FeaturedBooks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Categories />
      <FeaturedBooks />
      <Footer />
    </div>
  );
};

export default Index;
