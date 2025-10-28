import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const BranchList: React.FC = () => {
  const { t } = useLanguage();

  const branches = [
    {
      id: 1,
      name: 'District 1 Branch',
      address: '123 Le Loi Street, District 1, Ho Chi Minh City',
      phone: '+84 123 456 789',
      hours: 'Mon-Sun: 9:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      lat: 10.7769,
      lng: 106.7009,
    },
    {
      id: 2,
      name: 'District 3 Branch',
      address: '456 Vo Van Tan Street, District 3, Ho Chi Minh City',
      phone: '+84 123 456 790',
      hours: 'Mon-Sun: 9:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1758556549027-879615701c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMHJlY2VwdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjE2MzIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      lat: 10.7823,
      lng: 106.6917,
    },
    {
      id: 3,
      name: 'Binh Thanh Branch',
      address: '789 Xo Viet Nghe Tinh Street, Binh Thanh District, Ho Chi Minh City',
      phone: '+84 123 456 791',
      hours: 'Mon-Sun: 9:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      lat: 10.8142,
      lng: 106.7046,
    },
    {
      id: 4,
      name: 'Phu Nhuan Branch',
      address: '321 Phan Dang Luu Street, Phu Nhuan District, Ho Chi Minh City',
      phone: '+84 123 456 792',
      hours: 'Mon-Sun: 9:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      lat: 10.7991,
      lng: 106.6790,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">{t('branches.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit any of our convenient locations across the city
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="mb-4">{branch.name}</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#FFD1DC] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{branch.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#A7C7E7]" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-gray-600 hover:text-[#A7C7E7] transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-[#B5E7A0]" />
                      <span className="text-gray-600">{branch.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/branches/${branch.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        {t('branches.view')}
                      </Button>
                    </Link>
                    <Link to={`/booking?branch=${branch.id}`} className="flex-1">
                      <Button className="w-full bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                        Book Here
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
