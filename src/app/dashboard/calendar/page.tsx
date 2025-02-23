'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Sample data
const events = [
  {
    id: 1,
    title: 'Team Meeting',
    date: '2024-02-15',
    time: '10:00 AM',
    duration: 60, // in minutes
    type: 'meeting',
    color: 'blue',
    attendees: [
      {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ]
  },
  {
    id: 2,
    title: 'Project Review',
    date: '2024-02-15',
    time: '2:00 PM',
    duration: 90,
    type: 'review',
    color: 'purple',
    attendees: [
      {
        name: 'James Wilson',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ]
  }
];

const tasks = [
  {
    id: 1,
    title: 'Review marketing campaign',
    dueDate: '2024-02-15',
    priority: 'high',
    color: 'red',
    assignee: {
      name: 'Marketing AI',
      avatar: '🤖',
      type: 'ai'
    }
  },
  {
    id: 2,
    title: 'Client presentation preparation',
    dueDate: '2024-02-16',
    priority: 'medium',
    color: 'orange',
    assignee: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      type: 'human'
    }
  }
];

// Holiday data (you would typically fetch this from an API)
const holidays = [
  {
    id: 1,
    name: "New Year's Day",
    date: '2024-01-01',
    type: 'public_holiday'
  },
  {
    id: 2,
    name: 'Martin Luther King Jr. Day',
    date: '2024-01-15',
    type: 'public_holiday'
  },
  {
    id: 3,
    name: "Presidents' Day",
    date: '2024-02-19',
    type: 'public_holiday'
  }
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [showSidebar, setShowSidebar] = useState(true);

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    // Add empty days for padding
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(prevDate.getMonth() - 1);
      } else {
        newDate.setMonth(prevDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const getItemsForDay = (day: Date) => {
    const dateStr = day.toISOString().split('T')[0];
    const dayEvents = events.filter(event => event.date === dateStr);
    const dayTasks = tasks.filter(task => task.dueDate === dateStr);
    const dayHolidays = holidays.filter(holiday => holiday.date === dateStr);
    return [...dayHolidays, ...dayEvents, ...dayTasks];
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Calendar Header */}
      <div className="flex justify-between items-center p-4 border-b border-black/[.08] dark:border-white/[.08]">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
          <h1 className="text-xl font-semibold">{currentMonth} {currentYear}</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => navigateMonth('prev')}
              className="p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <Button
              variant="outline"
              onClick={() => navigateMonth('next')}
              className="p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex rounded-lg border border-black/[.08] dark:border-white/[.08] p-1">
            <button
              onClick={() => setView('month')}
              className={`px-3 py-1 rounded-md text-sm ${
                view === 'month' ? 'bg-black text-white dark:bg-white dark:text-black' : ''
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-3 py-1 rounded-md text-sm ${
                view === 'week' ? 'bg-black text-white dark:bg-white dark:text-black' : ''
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView('day')}
              className={`px-3 py-1 rounded-md text-sm ${
                view === 'day' ? 'bg-black text-white dark:bg-white dark:text-black' : ''
              }`}
            >
              Day
            </button>
          </div>
          <Button variant="default">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create
          </Button>
        </div>
      </div>

      {/* Main Calendar Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mini Sidebar */}
        {showSidebar && (
          <div className="w-64 border-r border-black/[.08] dark:border-white/[.08] p-4 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">My Calendars</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Events
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Tasks
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                    Holidays
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Upcoming Tasks</h3>
                <div className="space-y-2">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-2 rounded-lg border border-black/[.08] dark:border-white/[.08] text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>{task.title}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Due: {task.dueDate}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Grid */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-7 h-full">
            {/* Week days header */}
            {weekDays.map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium border-b border-r border-black/[.08] dark:border-white/[.08]">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {days.map((day, index) => (
              <div
                key={index}
                className="border-b border-r border-black/[.08] dark:border-white/[.08] min-h-[120px] relative group"
              >
                {day && (
                  <>
                    <div className="p-2">
                      <span className={`inline-flex items-center justify-center w-6 h-6 text-sm rounded-full ${
                        day.getDate() === new Date().getDate() &&
                        day.getMonth() === new Date().getMonth()
                          ? 'bg-black text-white dark:bg-white dark:text-black'
                          : 'hover:bg-black/[.05] dark:hover:bg-white/[.05]'
                      }`}>
                        {day.getDate()}
                      </span>
                    </div>

                    {/* Events, Tasks, and Holidays */}
                    <div className="px-2 space-y-1">
                      {getItemsForDay(day).map((item: any) => {
                        if (item.type === 'public_holiday') {
                          return (
                            <div
                              key={item.id}
                              className="text-xs p-1 rounded bg-gray-50 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300"
                            >
                              🏖️ {item.name}
                            </div>
                          );
                        }
                        
                        if (item.time) { // Event
                          return (
                            <div
                              key={item.id}
                              className={`text-xs p-1 rounded ${
                                item.color === 'blue' 
                                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                                  : 'bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300'
                              }`}
                            >
                              {item.time} - {item.title}
                            </div>
                          );
                        }
                        
                        return ( // Task
                          <div
                            key={item.id}
                            className={`text-xs p-1 rounded ${
                              item.priority === 'high'
                                ? 'bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                                : 'bg-orange-50 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300'
                            }`}
                          >
                            ✓ {item.title}
                          </div>
                        );
                      })}
                    </div>

                    {/* Add event button (visible on hover) */}
                    <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/[.05] dark:hover:bg-white/[.05] opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 