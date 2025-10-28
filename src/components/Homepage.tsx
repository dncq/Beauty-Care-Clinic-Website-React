import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Sparkles, Star, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export const Homepage: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('services.skincare'),
      description: 'Advanced skincare treatments for glowing, healthy skin',
      image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'skincare',
    },
    {
      id: 2,
      title: t('services.facial'),
      description: 'Professional facial treatments tailored to your skin type',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'facial',
    },
    {
      id: 3,
      title: t('services.body'),
      description: 'Full body treatments for complete relaxation and rejuvenation',
      image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'body',
    },
    {
      id: 4,
      title: t('services.spa'),
      description: 'Luxurious spa and massage services for ultimate wellness',
      image: 'https://images.unsplash.com/photo-1758556549027-879615701c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMHJlY2VwdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjE2MzIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'spa',
    },
  ];

  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Expert Specialists',
      description: 'Certified professionals with years of experience',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Modern Technology',
      description: 'Latest equipment and advanced techniques',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Flexible Hours',
      description: 'Open 7 days a week to fit your schedule',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safe & Hygienic',
      description: 'Highest standards of cleanliness and safety',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Beauty Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD1DC]/90 to-[#A7C7E7]/90" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-800">
            {t('home.banner.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            {t('home.banner.subtitle')}
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-6 rounded-full shadow-lg">
              {t('home.banner.cta')}
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7] text-white mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('home.services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/services/${service.id}`}>
                  <Card className="overflow-hidden h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-[#A7C7E7] hover:bg-[#8FB5D9] text-gray-800 rounded-full px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t('home.gallery.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.gallery.subtitle')}
            </p>
          </motion.div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {services.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={`Gallery ${item.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-gray-800">Ready to Transform Your Beauty?</h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of professional beauty care
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-6 rounded-full shadow-lg">
                Book Your Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
