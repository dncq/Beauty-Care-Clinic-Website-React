import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { CheckCircle, Clock, DollarSign, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // Mock service data - in real app, fetch from API
  const service = {
    id: Number(id),
    title: 'Deep Cleansing Facial',
    category: 'Skincare',
    description:
      'Our deep cleansing facial is a comprehensive treatment designed to purify and rejuvenate your skin. Using advanced techniques and premium products, we remove impurities, unclog pores, and restore your skin\'s natural glow.',
    price: '$80',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Deep cleansing of pores',
      'Removes dead skin cells',
      'Improves skin texture',
      'Reduces blackheads and whiteheads',
      'Promotes healthy, glowing skin',
      'Suitable for all skin types',
    ],
    process: [
      'Consultation and skin analysis',
      'Cleansing and exfoliation',
      'Steam treatment to open pores',
      'Extraction of impurities',
      'Facial massage',
      'Hydrating mask application',
      'Moisturizer and sun protection',
    ],
    reviews: [
      {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        comment: 'Amazing service! My skin feels so fresh and clean.',
        date: '2025-10-15',
      },
      {
        id: 2,
        name: 'Emily Chen',
        rating: 5,
        comment: 'Best facial I\'ve ever had. Highly recommend!',
        date: '2025-10-20',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-[#A7C7E7] text-gray-800">{service.category}</Badge>
              <h1 className="mb-4">{service.title}</h1>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#FFD1DC]/20">
                    <DollarSign className="h-5 w-5 text-[#FFD1DC]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('services.pricing')}</p>
                    <p>{service.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#A7C7E7]/20">
                    <Clock className="h-5 w-5 text-[#A7C7E7]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p>{service.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#FFD1DC]/20">
                    <Star className="h-5 w-5 text-[#FFD1DC]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <p>5.0 (24 reviews)</p>
                  </div>
                </div>
              </div>

              <Link to={`/booking?service=${service.id}`}>
                <Button size="lg" className="w-full md:w-auto bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                  {t('services.book')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Benefits Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="mb-6">{t('services.benefits')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#A7C7E7] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="mb-6">Treatment Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7] flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {service.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FFD1DC] text-[#FFD1DC]" />
                        ))}
                      </div>
                      <span>{review.name}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
