'use client';
import { useTheme } from '@/contexts/ThemeContext';

export default function AboutPage() {
  const { theme } = useTheme();

  const values = [
    {
      title: 'Innovation Through AI',
      description: 'Leveraging cutting-edge artificial intelligence to revolutionize how businesses operate and grow.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Empowering SMEs',
      description: 'Making enterprise-level tools and capabilities accessible to small and medium-sized businesses.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Seamless Integration',
      description: 'Creating a unified platform that brings together all essential business tools and workflows.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      bio: 'Former tech executive with 15 years of experience in SaaS and AI.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'AI researcher and engineer with multiple patents in machine learning.'
    },
    {
      name: 'Aisha Patel',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'Product leader specializing in SME solutions and user experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="py-24 px-6 sm:px-8 lg:px-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Our Mission
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Alypha exists to democratize advanced business tools and AI capabilities, 
          making them accessible and practical for businesses of all sizes.
        </p>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full bg-black/[.02] dark:bg-white/[.02]">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-black/[.02] dark:bg-white/[.02] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Founded in 2023, Alypha emerged from a simple observation: while enterprise
              companies had access to powerful AI and automation tools, small and
              medium-sized businesses were left behind. We set out to change that.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, we're proud to serve thousands of businesses worldwide, helping
              them compete and thrive in an increasingly digital world. Our platform
              continues to evolve, driven by our commitment to innovation and our
              customers' success.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 