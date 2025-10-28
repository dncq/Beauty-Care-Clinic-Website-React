import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, Gift, User, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const MemberDashboard: React.FC = () => {
  const { t } = useLanguage();

  const mockUser = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    memberSince: 'January 2025',
    points: 850,
  };

  const appointments = [
    {
      id: 1,
      service: 'Deep Cleansing Facial',
      date: '2025-11-05',
      time: '14:00',
      branch: 'District 1 Branch',
      status: 'confirmed',
    },
    {
      id: 2,
      service: 'Full Body Massage',
      date: '2025-11-12',
      time: '16:00',
      branch: 'District 3 Branch',
      status: 'confirmed',
    },
    {
      id: 3,
      service: 'Anti-Aging Treatment',
      date: '2025-10-20',
      time: '10:30',
      branch: 'District 1 Branch',
      status: 'completed',
    },
  ];

  const promotions = [
    {
      id: 1,
      title: '20% Off Facial Treatments',
      description: 'Valid until November 30, 2025',
      code: 'FACIAL20',
    },
    {
      id: 2,
      title: 'Free Upgrade to Premium Package',
      description: 'Book any spa treatment and get a free upgrade',
      code: 'PREMIUM2025',
    },
    {
      id: 3,
      title: 'Birthday Special',
      description: '50% off any service on your birthday month',
      code: 'BDAY50',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="mb-2">
              {t('dashboard.welcome')}, {mockUser.name}!
            </h1>
            <p className="text-gray-600">Manage your appointments and view exclusive offers</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#FFD1DC]/20">
                  <Calendar className="h-6 w-6 text-[#FFD1DC]" />
                </div>
                <div>
                  <p className="text-gray-600">Total Appointments</p>
                  <p className="text-2xl">24</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#A7C7E7]/20">
                  <Gift className="h-6 w-6 text-[#A7C7E7]" />
                </div>
                <div>
                  <p className="text-gray-600">Loyalty Points</p>
                  <p className="text-2xl">{mockUser.points}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#B5E7A0]/20">
                  <User className="h-6 w-6 text-[#B5E7A0]" />
                </div>
                <div>
                  <p className="text-gray-600">Member Since</p>
                  <p className="text-xl">{mockUser.memberSince}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="appointments" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl bg-white">
              <TabsTrigger
                value="appointments"
                className="data-[state=active]:bg-[#FFD1DC] data-[state=active]:text-gray-800"
              >
                {t('dashboard.appointments')}
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-[#FFD1DC] data-[state=active]:text-gray-800"
              >
                {t('dashboard.profile')}
              </TabsTrigger>
              <TabsTrigger
                value="promotions"
                className="data-[state=active]:bg-[#FFD1DC] data-[state=active]:text-gray-800"
              >
                {t('dashboard.promotions')}
              </TabsTrigger>
            </TabsList>

            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3>{appointment.service}</h3>
                            <Badge
                              className={
                                appointment.status === 'confirmed'
                                  ? 'bg-[#A7C7E7] text-gray-800'
                                  : 'bg-gray-200 text-gray-800'
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="h-4 w-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="h-4 w-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="h-4 w-4" />
                              <span>{appointment.branch}</span>
                            </div>
                          </div>
                        </div>
                        {appointment.status === 'confirmed' && (
                          <div className="flex gap-2">
                            <Button variant="outline">Reschedule</Button>
                            <Button variant="outline" className="text-red-600">
                              Cancel
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-1">Name</p>
                    <p>{mockUser.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <p>{mockUser.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Phone</p>
                    <p>+84 123 456 789</p>
                  </div>
                  <Button className="bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Promotions Tab */}
            <TabsContent value="promotions">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promotions.map((promo) => (
                  <Card key={promo.id} className="bg-gradient-to-br from-[#FFD1DC]/20 to-[#A7C7E7]/20 border-none">
                    <CardHeader>
                      <CardTitle>
                        <h3>{promo.title}</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{promo.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="px-3 py-1 bg-white rounded-lg">
                          <code>{promo.code}</code>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            navigator.clipboard.writeText(promo.code);
                          }}
                        >
                          Copy Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};
