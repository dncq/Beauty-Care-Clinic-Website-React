import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { toast } from 'sonner@2.0.3';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
  });

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2025-10-20',
      comment: 'Absolutely amazing experience! The staff was professional and the results exceeded my expectations. My skin has never looked better!',
    },
    {
      id: 2,
      name: 'Emily Chen',
      rating: 5,
      date: '2025-10-18',
      comment: 'I\'ve been coming here for 6 months now and I\'m always impressed. The facilities are clean, modern, and the service is top-notch.',
    },
    {
      id: 3,
      name: 'Michael Brown',
      rating: 5,
      date: '2025-10-15',
      comment: 'Great value for money. The facial treatment was relaxing and effective. Highly recommend!',
    },
    {
      id: 4,
      name: 'Jessica Lee',
      rating: 4,
      date: '2025-10-12',
      comment: 'Very professional service. The only reason for 4 stars instead of 5 is the wait time, but the quality of service makes up for it.',
    },
    {
      id: 5,
      name: 'David Wilson',
      rating: 5,
      date: '2025-10-10',
      comment: 'The anti-aging treatment was incredible. Visible results after just one session. The staff really knows what they\'re doing.',
    },
    {
      id: 6,
      name: 'Amanda Taylor',
      rating: 5,
      date: '2025-10-08',
      comment: 'Perfect experience from booking to treatment. The clinic is beautiful and the therapists are highly skilled.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.review || rating === 0) {
      toast.error('Please fill in all fields and select a rating');
      return;
    }

    // Mock submit review
    toast.success('Thank you for your review! It will be published after approval.');
    
    setFormData({ name: '', email: '', review: '' });
    setRating(0);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="mb-4">{t('reviews.title')}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our customers say about their experiences
            </p>
          </div>

          {/* Overall Rating */}
          <Card className="mb-12">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-8 w-8 ${
                        i < Math.round(averageRating)
                          ? 'fill-[#FFD1DC] text-[#FFD1DC]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-3xl mb-1">{averageRating.toFixed(1)} out of 5</p>
                <p className="text-gray-600">Based on {reviews.length} reviews</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7]">
                          <AvatarFallback className="text-white">
                            {getInitials(review.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3>{review.name}</h3>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex gap-1 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'fill-[#FFD1DC] text-[#FFD1DC]'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Write Review Form */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="mb-6">{t('reviews.write')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Your Rating *</Label>
                      <div className="flex gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setRating(i + 1)}
                            onMouseEnter={() => setHoverRating(i + 1)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-8 w-8 transition-all ${
                                i < (hoverRating || rating)
                                  ? 'fill-[#FFD1DC] text-[#FFD1DC] scale-110'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="review">Your Review *</Label>
                      <Textarea
                        id="review"
                        value={formData.review}
                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                        placeholder="Share your experience..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800"
                    >
                      {t('reviews.submit')}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Your review will be published after moderation
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
