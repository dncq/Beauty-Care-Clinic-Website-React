import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const BranchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // Mock branch data
  const branch = {
    id: Number(id),
    name: 'District 1 Branch',
    address: '123 Le Loi Street, District 1, Ho Chi Minh City',
    phone: '+84 123 456 789',
    email: 'district1@beautycare.com',
    hours: 'Mon-Sun: 9:00 AM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    lat: 10.7769,
    lng: 106.7009,
    description:
      'Our flagship branch in the heart of District 1 offers a full range of beauty services in a luxurious, modern setting. With state-of-the-art equipment and experienced specialists, we provide the best beauty care experience in the city.',
    facilities: [
      'Private treatment rooms',
      'VIP lounge area',
      'Complimentary refreshments',
      'Free parking',
      'Wi-Fi access',
      'Accessible facilities',
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Image */}
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <ImageWithFallback
              src={branch.image}
              alt={branch.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="mb-4">{branch.name}</h1>
                <p className="text-gray-600">{branch.description}</p>
              </div>

              {/* Facilities */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4">Facilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {branch.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#FFD1DC]" />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4">Location</h2>
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                    {/* Google Maps embed - Replace with actual Google Maps API key */}
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d${branch.lng}!3d${branch.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzAzLjIiRQ!5e0!3m2!1sen!2s!4v1234567890`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Branch Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="mb-4">{t('contact.info')}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#FFD1DC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{t('branches.address')}</p>
                          <p>{branch.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-[#A7C7E7] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{t('branches.phone')}</p>
                          <a
                            href={`tel:${branch.phone}`}
                            className="hover:text-[#A7C7E7] transition-colors"
                          >
                            {branch.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-[#B5E7A0] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Email</p>
                          <a
                            href={`mailto:${branch.email}`}
                            className="hover:text-[#B5E7A0] transition-colors"
                          >
                            {branch.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-[#FFD1DC] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{t('branches.hours')}</p>
                          <p>{branch.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Link to={`/booking?branch=${branch.id}`}>
                      <Button size="lg" className="w-full bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
