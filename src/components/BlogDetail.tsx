import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [comment, setComment] = useState({ name: '', email: '', message: '' });

  // Mock article data
  const article = {
    id: Number(id),
    title: '10 Essential Skincare Tips for Glowing Skin',
    category: 'skincare',
    author: 'Dr. Sarah Chen',
    date: '2025-10-25',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1605204376600-72ed73f1f9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTU1OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    content: `
      <p>Achieving healthy, glowing skin doesn't have to be complicated. With the right approach and consistent care, you can maintain radiant skin year-round. Here are ten essential tips that our experts recommend.</p>

      <h2>1. Cleanse Properly</h2>
      <p>Start and end your day with a gentle cleanser appropriate for your skin type. Proper cleansing removes dirt, oil, and impurities that can clog pores and lead to breakouts.</p>

      <h2>2. Stay Hydrated</h2>
      <p>Drinking plenty of water is crucial for maintaining skin hydration from the inside out. Aim for at least 8 glasses of water daily.</p>

      <h2>3. Use Sunscreen Daily</h2>
      <p>Protect your skin from harmful UV rays by applying broad-spectrum sunscreen with at least SPF 30 every day, even on cloudy days.</p>

      <h2>4. Moisturize Regularly</h2>
      <p>Keep your skin hydrated with a quality moisturizer suited to your skin type. Apply while your skin is still slightly damp for better absorption.</p>

      <h2>5. Get Adequate Sleep</h2>
      <p>Your skin repairs itself while you sleep. Aim for 7-9 hours of quality sleep each night for optimal skin health.</p>

      <h2>6. Eat a Balanced Diet</h2>
      <p>Nourish your skin from within by eating plenty of fruits, vegetables, and foods rich in omega-3 fatty acids.</p>

      <h2>7. Exfoliate Gently</h2>
      <p>Remove dead skin cells with gentle exfoliation 1-2 times per week to reveal brighter, smoother skin.</p>

      <h2>8. Manage Stress</h2>
      <p>High stress levels can negatively impact your skin. Practice stress-reduction techniques like meditation or yoga.</p>

      <h2>9. Avoid Touching Your Face</h2>
      <p>Your hands carry bacteria that can transfer to your face and cause breakouts. Keep your hands away from your face throughout the day.</p>

      <h2>10. Visit a Professional</h2>
      <p>Regular professional facial treatments can help maintain healthy skin and address specific concerns. Book an appointment with our specialists today!</p>
    `,
    comments: [
      {
        id: 1,
        name: 'Emily Johnson',
        date: '2025-10-26',
        message: 'Great tips! I\'ve started following these and already see improvements.',
      },
      {
        id: 2,
        name: 'Michael Chen',
        date: '2025-10-26',
        message: 'Very helpful article. Thank you for sharing!',
      },
    ],
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'The Latest Technology in Anti-Aging Treatments',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnQlMjBmYWNpYWx8ZW58MXx8fHwxNzYxNjMyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Wellness and Beauty: The Connection You Need to Know',
      image: 'https://images.unsplash.com/photo-1731514693674-a32211b63996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjE1NTM4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#A7C7E7] text-gray-800 capitalize">{article.category}</Badge>
              <span className="text-gray-500">{article.readTime}</span>
            </div>
            <h1 className="mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="h-5 w-5 text-[#FFD1DC]" />
                <h2>Comments ({article.comments.length})</h2>
              </div>

              {/* Existing Comments */}
              <div className="space-y-6 mb-8">
                {article.comments.map((comment) => (
                  <div key={comment.id} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span>{comment.name}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-600">{comment.message}</p>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <div className="border-t pt-6">
                <h3 className="mb-4">Leave a Comment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={comment.name}
                      onChange={(e) => setComment({ ...comment, name: e.target.value })}
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={comment.email}
                      onChange={(e) => setComment({ ...comment, email: e.target.value })}
                    />
                  </div>
                  <Textarea
                    placeholder="Your comment..."
                    rows={4}
                    value={comment.message}
                    onChange={(e) => setComment({ ...comment, message: e.target.value })}
                  />
                  <Button className="bg-[#FFD1DC] hover:bg-[#FFB8C6] text-gray-800">
                    Post Comment
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div>
            <h2 className="mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} to={`/blog/${related.id}`}>
                  <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="line-clamp-2">{related.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
