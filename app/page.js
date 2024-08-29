'use client'; // Ensure this file is treated as a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For client-side navigation
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth/login'); // Redirect to authentication page if not logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Event Management</h1>
      <p className="text-xl">Organize and manage your events with ease.</p>
    </div>
  );
}

'use client'

import { useEffect, useState } from 'react'

export default function EventsPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Simulate fetching events with sample data, including image URLs
    const fetchEvents = async () => {
      const sampleData = [
        {
          id: 1,
          title: 'Event One',
          description: 'Description for Event One',
          imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
          id: 2,
          title: 'Event Two',
          description: 'Description for Event Two',
          imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
          id: 3,
          title: 'Event Three',
          description: 'Description for Event Three',
          imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
          id: 4,
          title: 'Event Four',
          description: 'Description for Event Four',
          imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
          id: 5,
          title: 'Event Five',
          description: 'Description for Event Five',
          imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
        {
          id: 6,
          title: 'Event Six',
          description: 'Description for Event Six',
          imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
        },
      ]

      setTimeout(() => {
        setEvents(sampleData)
      }, 1000) // Simulating a network request delay
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Events</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover mb-2 rounded-md" />
            <h2 className="text-lg font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


