'use client';
import { useState } from 'react';

export default function SignupPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    {
      id: 'product-manager',
      name: 'Product Manager',
      description: 'Build and manage digital products'
    },
    {
      id: 'creator',
      name: 'Creator',
      description: 'Content creator, designer, or artist'
    },
    {
      id: 'sme',
      name: 'SME Owner',
      description: 'Small to medium business owner'
    },
    {
      id: 'individual',
      name: 'Individual',
      description: 'Personal use and productivity'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">א</div>
          <h2 className="text-center text-2xl font-bold tracking-tight">
            Create your account
          </h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-black py-8 px-4 shadow-sm ring-1 ring-black/5 dark:ring-white/5 sm:rounded-lg sm:px-10">
          <div className="mb-6">
            <a
              href="#"
              className="w-full inline-flex justify-center py-2 px-4 border border-black/10 dark:border-white/10 rounded-md shadow-sm bg-white dark:bg-black text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              <span className="ml-2">Continue with Google</span>
            </a>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black/10 dark:border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-black text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-black"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-1">
                I am a / an ...
              </label>
              <div className="mt-1 relative">
                <button
                  type="button"
                  className="bg-white dark:bg-black w-full rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-left text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="flex items-center justify-between">
                    <span>{selectedCategory || 'Select your category'}</span>
                    <svg
                      className={`ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="absolute z-10 mt-1 w-full rounded-md bg-white dark:bg-black shadow-lg border border-black/10 dark:border-white/10">
                    <div className="py-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setIsOpen(false);
                          }}
                        >
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {category.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent bg-white dark:bg-black"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-black/10 dark:border-white/10 focus:ring-black dark:focus:ring-white"
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                I agree to the{' '}
                <a href="#" className="font-medium hover:text-gray-600 dark:hover:text-gray-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium hover:text-gray-600 dark:hover:text-gray-300">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 dark:text-black dark:bg-white dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              >
                Create account
              </button>
            </div>
          </form>

          <p className="mt-8 text-sm text-center">
            Already have an account?{' '}
            <a href="/login" className="font-medium hover:text-gray-600 dark:hover:text-gray-300">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 