import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';

export const Blog: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: '10 Essential Skincare Tips for Glowing Skin',
      excerpt: 'Discover the secrets to maintaining healthy, radiant skin with these expert-recommended tips...',
      category: 'skincare',
      author: 'Dr. Sarah Chen',
      date: '2025-10-25',
      image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'The Latest Technology in Anti-Aging Treatments',
      excerpt: 'Learn about cutting-edge technologies that are revolutionizing anti-aging treatments...',
      category: 'technology',
      author: 'Dr. Emily Zhang',
      date: '2025-10-22',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Wellness and Beauty: The Connection You Need to Know',
      excerpt: 'Understanding how overall wellness impacts your skin health and beauty...',
      category: 'health',
      author: 'Jessica Lee',
      date: '2025-10-20',
      image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Summer Skincare: Protecting Your Skin from Sun Damage',
      excerpt: 'Essential tips for keeping your skin protected and healthy during summer months...',
      category: 'skincare',
      author: 'Dr. Sarah Chen',
      date: '2025-10-18',
      image: 'https://images.unsplash.com/photo-1758556549027-879615701c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMHJlY2VwdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjE2MzIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'The Benefits of Regular Facial Treatments',
      excerpt: 'Why incorporating professional facial treatments into your routine is essential...',
      category: 'skincare',
      author: 'Emily Chen',
      date: '2025-10-15',
      image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '4 min read',
    },
    {
      id: 6,
      title: 'Stress Relief Through Spa Treatments',
      excerpt: 'How spa and massage treatments can help reduce stress and improve mental health...',
      category: 'health',
      author: 'Jessica Lee',
      date: '2025-10-12',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'technology', label: 'New Technologies' },
    { id: 'health', label: 'Health Tips' },
  ];

  const filteredArticles =
    activeCategory === 'all' ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="mb-4">{t('blog.title')}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert tips, trends, and insights from our beauty specialists
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? 'bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800'
                    : ''
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/blog/${article.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-[#A7C7E7] text-gray-800 capitalize">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>

                      <h3 className="mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      <Button variant="ghost" className="mt-4 p-0 h-auto text-[#A7C7E7] hover:text-[#8FB5D9]">
                        {t('blog.read-more')} →
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
