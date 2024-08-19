'use client'

import { useEffect, useState } from 'react'

export default function EventsPage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    // Simulate fetching events with sample data
    const fetchEvents = async () => {
      const sampleData = [
        { id: 1, title: 'Event One', description: 'Description for Event One' },
        { id: 2, title: 'Event Two', description: 'Description for Event Two' },
        { id: 3, title: 'Event Three', description: 'Description for Event Three' },
        // Add more sample events as needed
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
          <img src=''></img>
            <h2 className="text-lg font-bold mb-2">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

