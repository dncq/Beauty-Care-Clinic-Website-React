import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { DollarSign } from 'lucide-react';

export const ServiceMenu: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Deep Cleansing Facial',
      category: 'skincare',
      description: 'Thorough cleansing to remove impurities and dead skin cells',
      price: '$80',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Anti-Aging Treatment',
      category: 'facial',
      description: 'Advanced treatment to reduce wrinkles and fine lines',
      price: '$120',
      duration: '90 min',
      image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Hydrating Facial',
      category: 'skincare',
      description: 'Intense hydration therapy for dry and dehydrated skin',
      price: '$90',
      duration: '75 min',
      image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Full Body Massage',
      category: 'body',
      description: 'Relaxing massage to relieve tension and stress',
      price: '$100',
      duration: '90 min',
      image: 'https://images.unsplash.com/photo-1758556549027-879615701c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMHJlY2VwdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjE2MzIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Hot Stone Therapy',
      category: 'spa',
      description: 'Therapeutic massage using heated stones',
      price: '$130',
      duration: '90 min',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Body Scrub & Polish',
      category: 'body',
      description: 'Exfoliating treatment for smooth, glowing skin',
      price: '$85',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Aromatherapy Massage',
      category: 'spa',
      description: 'Relaxing massage with essential oils',
      price: '$110',
      duration: '75 min',
      image: 'https://images.unsplash.com/photo-1758556549027-879615701c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMHJlY2VwdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjE2MzIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      title: 'Acne Treatment',
      category: 'facial',
      description: 'Specialized treatment for acne-prone skin',
      price: '$95',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = [
    { id: 'all', label: t('services.all') },
    { id: 'skincare', label: t('services.skincare') },
    { id: 'facial', label: t('services.facial') },
    { id: 'body', label: t('services.body') },
    { id: 'spa', label: t('services.spa') },
  ];

  const filteredServices =
    activeCategory === 'all' ? services : services.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">{t('nav.services')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of professional beauty treatments
          </p>
        </motion.div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl mx-auto bg-white">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-[#FFD1DC] data-[state=active]:text-gray-800"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#FFD1DC]">
                      <DollarSign className="h-5 w-5" />
                      <span>{service.price}</span>
                    </div>
                    <span className="text-gray-600">{service.duration}</span>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/services/${service.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                    <Link to={`/booking?service=${service.id}`} className="flex-1">
                      <Button className="w-full bg-[#A7C7E7] hover:bg-[#8FB5D9] text-gray-800">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
