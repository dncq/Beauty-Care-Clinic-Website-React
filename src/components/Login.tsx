import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login - in real app, call API
    if (formData.email && formData.password) {
      toast.success('Login successful!');
      // Redirect to dashboard
      setTimeout(() => navigate('/dashboard'), 1000);
    } else {
      toast.error('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#FFD1DC] to-[#A7C7E7] flex items-center justify-center">
                <span className="text-white text-2xl">BC</span>
              </div>
              <CardTitle>
                <h2>{t('auth.login')}</h2>
              </CardTitle>
              <p className="text-gray-600">Welcome back to Beauty Care Clinic</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('auth.email')}</Label>
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
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-sm text-[#A7C7E7] hover:underline">
                    {t('auth.forgot')}
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800"
                >
                  {t('auth.login')}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {t('auth.no-account')}{' '}
                  <Link to="/register" className="text-[#A7C7E7] hover:underline">
                    {t('auth.register')}
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
