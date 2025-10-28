import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { toast } from 'sonner@2.0.3';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { format } from 'date-fns';

export const BookingForm: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preSelectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    service: preSelectedService || '',
    branch: '',
    date: undefined as Date | undefined,
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const services = [
    { id: '1', name: 'Deep Cleansing Facial' },
    { id: '2', name: 'Anti-Aging Treatment' },
    { id: '3', name: 'Hydrating Facial' },
    { id: '4', name: 'Full Body Massage' },
    { id: '5', name: 'Hot Stone Therapy' },
    { id: '6', name: 'Body Scrub & Polish' },
    { id: '7', name: 'Aromatherapy Massage' },
    { id: '8', name: 'Acne Treatment' },
  ];

  const branches = [
    { id: '1', name: 'District 1 Branch' },
    { id: '2', name: 'District 3 Branch' },
    { id: '3', name: 'Binh Thanh Branch' },
    { id: '4', name: 'Phu Nhuan Branch' },
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.service || !formData.branch || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please provide your contact information');
      return;
    }

    // In a real app, send to backend API
    console.log('Booking submitted:', formData);
    
    // Show success message
    toast.success(t('booking.success'));

    // Reset form
    setFormData({
      service: '',
      branch: '',
      date: undefined,
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle>
                <h1>{t('booking.title')}</h1>
              </CardTitle>
              <p className="text-gray-600">Fill in your details to book an appointment</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service">{t('booking.service')} *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Branch Selection */}
                <div className="space-y-2">
                  <Label htmlFor="branch">{t('booking.branch')} *</Label>
                  <Select
                    value={formData.branch}
                    onValueChange={(value) => setFormData({ ...formData, branch: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch.id} value={branch.id}>
                          {branch.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label>{t('booking.date')} *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => setFormData({ ...formData, date })}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="time">{t('booking.time')} *</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('booking.name')} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('booking.email')} *</Label>
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
                        <Label htmlFor="phone">{t('booking.phone')} *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+84 123 456 789"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">{t('booking.notes')}</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any special requests or notes..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800"
                >
                  {t('booking.submit')}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Required fields. We will send you a confirmation email and SMS.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Member Note */}
          <Card className="mt-6 bg-gradient-to-br from-[#FFD1DC]/20 to-[#A7C7E7]/20 border-none">
            <CardContent className="p-6 text-center">
              <p className="mb-2">Already a member?</p>
              <p className="text-gray-600">
                Login to your account to view your booking history and receive exclusive offers!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
