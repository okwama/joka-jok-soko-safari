import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, ShoppingBag, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CategoryGrid from '@/components/CategoryGrid';
import ImageVideoSlider from '@/components/ImageVideoSlider';
import HeroSection from '@/components/HeroSection';
import VideoCarousel from '@/components/VideoCarousel';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Safari Messenger Bag',
      price: 125,
      image: '/lovable-uploads/6ed930a1-71ac-49fd-b106-141b7d78b22d.png',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Adventure Crossbody',
      price: 85,
      image: '/lovable-uploads/d25894e7-0c87-441b-bd66-75fe377c8cb4.png',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Classic Red Safari Case',
      price: 165,
      image: '/lovable-uploads/d9afcb00-459a-4fd9-8b86-bdaf96387375.png',
      rating: 4.7,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Complimentary shipping across Africa'
    },
    {
      icon: Shield,
      title: 'Authentic Craftsmanship',
      description: 'Handmade by African artisans'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help you'
    }
  ];

  const sliderItems = [
    {
      id: 1,
      type: 'image' as const,
      src: '/lovable-uploads/b248e647-f0a9-4ed5-a326-00cec924ce86.png',
      alt: 'African artisan at work',
      title: 'Discover Africa\'s Timeless Beauty',
      subtitle: 'Where traditional craftsmanship meets contemporary style'
    },
    {
      id: 2,
      type: 'image' as const,
      src: '/lovable-uploads/eaea5260-d612-4d26-9d9e-e8cb70850440.png',
      alt: 'Safari dining experience',
      title: 'Authentic Experiences',
      subtitle: 'Creating memories that last a lifetime'
    },
  ];

  const navigationCards = [
    {
      title: 'Shop All Products',
      description: 'Explore our complete collection of authentic African accessories',
      icon: ShoppingBag,
      link: '/products',
      color: 'bg-burnished-copper-500'
    },
    {
      title: 'Read Our Stories',
      description: 'Discover the heritage and craftsmanship behind each piece',
      icon: Heart,
      link: '/blog',
      color: 'bg-copper-wood-600'
    },
    {
      title: 'Join Our Community',
      description: 'Connect with fellow lovers of African artistry',
      icon: Users,
      link: '/register',
      color: 'bg-swahili-dust-700'
    }
  ];

  // Video carousel data
  const videoCarousels = [
    {
      title: 'Craftsmanship Stories',
      videos: [
        {
          id: '1',
          title: 'The Art of Leather Crafting',
          thumbnail: '/lovable-uploads/b248e647-f0a9-4ed5-a326-00cec924ce86.png',
          duration: '3:24',
          category: 'Behind the Scenes',
          description: 'Watch our master craftsmen at work'
        },
        {
          id: '2',
          title: 'Safari Adventures',
          thumbnail: '/lovable-uploads/eaea5260-d612-4d26-9d9e-e8cb70850440.png',
          duration: '5:12',
          category: 'Travel',
          description: 'Experience the wild with JokaJok'
        },
        {
          id: '3',
          title: 'Heritage Collection',
          thumbnail: '/lovable-uploads/1f2da5fd-3141-4cf1-bd07-05ce4871338d.png',
          duration: '2:45',
          category: 'Products',
          description: 'Discover our heritage pieces'
        },
        {
          id: '4',
          title: 'Artisan Portraits',
          thumbnail: '/lovable-uploads/6ed930a1-71ac-49fd-b106-141b7d78b22d.png',
          duration: '4:18',
          category: 'People',
          description: 'Meet the faces behind our brand'
        }
      ]
    },
    {
      title: 'Product Showcases',
      videos: [
        {
          id: '5',
          title: 'Bag Collection 2024',
          thumbnail: '/lovable-uploads/d25894e7-0c87-441b-bd66-75fe377c8cb4.png',
          duration: '6:30',
          category: 'Collection',
          description: 'Our latest bag designs'
        },
        {
          id: '6',
          title: 'Leather Care Guide',
          thumbnail: '/lovable-uploads/d9afcb00-459a-4fd9-8b86-bdaf96387375.png',
          duration: '3:45',
          category: 'Tutorial',
          description: 'How to care for your leather goods'
        },
        {
          id: '7',
          title: 'Safari Essentials',
          thumbnail: '/lovable-uploads/673850a9-e5eb-4247-ad41-baa3193363fb.png',
          duration: '4:22',
          category: 'Travel',
          description: 'Must-have items for your safari'
        },
        {
          id: '8',
          title: 'Custom Orders',
          thumbnail: '/lovable-uploads/0daed206-b752-41cd-801e-f2504ba1502b.png',
          duration: '2:58',
          category: 'Services',
          description: 'Create your personalized piece'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-charred-wood">
      {/* Full Screen Image/Video Slider as Hero */}
      <section className="h-screen">
        <ImageVideoSlider slides={sliderItems} />
      </section>

      {/* Category Grid with new background */}
      <CategoryGrid />

      {/* Netflix-style Video Carousels */}
      <section className="py-20 bg-gradient-to-br from-charred-wood via-dark-clay-100 to-swahili-dust-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-soft-sand mb-4">
              Our Stories
            </h2>
            <p className="text-xl text-copper-wood-400 max-w-2xl mx-auto">
              Dive into the world of African craftsmanship through our video stories
            </p>
          </div>
          
          {videoCarousels.map((carousel, index) => (
            <VideoCarousel
              key={index}
              title={carousel.title}
              videos={carousel.videos}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charred-wood">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-burnished-copper-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-copper-wood-700">
                  <feature.icon className="h-8 w-8 text-charred-wood" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-soft-sand mb-2">
                  {feature.title}
                </h3>
                <p className="text-copper-wood-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Safari Collection */}
      <section className="py-20 bg-gradient-to-br from-charred-wood via-dark-clay-100 to-swahili-dust-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-soft-sand mb-4">
              Safari Collection
            </h2>
            <p className="text-xl text-copper-wood-400 max-w-2xl mx-auto">
              Adventure-ready leather companions, handcrafted for the modern explorer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-dark-clay-100 border border-copper-wood-700">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-burnished-copper-500 fill-current' : 'text-copper-wood-400'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-copper-wood-400">({product.rating})</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-soft-sand mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-burnished-copper-500 font-semibold">Ksh{product.price}</span>
                    <Link to={`/products/${product.id}`}>
                      <Button className="bg-burnished-copper-500 hover:bg-burnished-copper-600 text-charred-wood">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products?category=safari">
              <Button className="bg-burnished-copper-500 hover:bg-burnished-copper-600 text-charred-wood">
                View Safari Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-swahili-dust-800 to-burnished-copper-900"
      style={{ background:'color: #2c2a25' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-soft-sand mb-6">
                Crafted with Heritage, Designed for Today
              </h2>
              <p className="text-lg text-copper-wood-400 mb-6 leading-relaxed">
                Every JokaJok piece is a celebration of African artisanship. Our skilled craftspeople 
                blend traditional techniques passed down through generations with contemporary design 
                sensibilities.
              </p>
              <p className="text-lg text-copper-wood-400 mb-8 leading-relaxed">
                From the bustling markets of Nairobi to the leather workshops of Morocco, 
                we source and create products that honor our heritage while embracing the future.
              </p>
              <Link to="/blog">
                <Button className="bg-burnished-copper-500 hover:bg-burnished-copper-600 text-charred-wood">
                  Read Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/1f2da5fd-3141-4cf1-bd07-05ce4871338d.png" 
                alt="African craftsmanship" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charred-wood/40 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Hero Section with Leather Texture */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(30, 27, 24, 0.8) 0%, rgba(47, 42, 33, 0.9) 100%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.03'%3E%3Cpath d='M0 0h100v100H0V0zm10 10v80h80V10H10zm5 5h70v70H15V15z'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundBlendMode: 'overlay',
          backgroundSize: '50px 50px, cover',
          backgroundPosition: '0 0, center'
        }}
      >
        {/* Leather texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-clay-100/30 via-transparent to-charred-wood/40"></div>
        
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-20 bg-gradient-to-br from-charred-wood via-dark-clay-100 to-swahili-dust-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-soft-sand mb-4">
              Where Would You Like to Go?
            </h2>
            <p className="text-xl text-copper-wood-400 max-w-2xl mx-auto">
              Navigate through our world of authentic African craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navigationCards.map((card, index) => (
              <Link key={index} to={card.link} className="group">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-dark-clay-100 group-hover:scale-105 border border-copper-wood-700">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-copper-wood-700`}>
                      <card.icon className="h-8 w-8 text-charred-wood" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-soft-sand mb-3">
                      {card.title}
                    </h3>
                    <p className="text-copper-wood-400 leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
