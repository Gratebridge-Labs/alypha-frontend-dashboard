'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
};

export default function BlogPage() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'All',
    'Product Updates',
    'AI & Automation',
    'Business Growth',
    'Case Studies'
  ];

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Introducing AI Agents: The Future of Business Automation',
      excerpt: 'Learn how our new AI agents can transform your business operations and boost productivity.',
      category: 'Product Updates',
      author: {
        name: 'Sarah Chen',
        role: 'CEO',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
      },
      date: 'Oct 15, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
    },
    {
      id: '2',
      title: 'How SMEs Are Leveraging AI to Compete with Enterprises',
      excerpt: 'Discover real-world examples of small businesses using AI to level the playing field.',
      category: 'Case Studies',
      author: {
        name: 'Marcus Rodriguez',
        role: 'CTO',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
      },
      date: 'Oct 12, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    }
    // Add more blog posts as needed
  ];

  const filteredPosts = selectedCategory.toLowerCase() === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="py-24 px-6 sm:px-8 lg:px-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Alypha Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Insights, updates, and stories about AI, automation, and business growth.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'border border-black/[.08] dark:border-white/[.08] hover:bg-black/[.02] dark:hover:bg-white/[.02]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] mb-6 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm px-3 py-1 rounded-full bg-black/[.02] dark:bg-white/[.02]">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {post.date}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {post.author.role}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 