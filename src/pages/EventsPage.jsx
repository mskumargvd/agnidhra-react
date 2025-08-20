import React from 'react';
import Card from '../components/Card';
import { events } from '../data';

const EventCard = ({ event }) => (
    <Card
        title={event.title}
        subtitle={`${event.date} | ${event.time}`}
        description={event.description}
        className="event-card flex flex-col"
    >
        <p className="text-sm text-gray-400 mb-4">Instructor: <span className="font-semibold text-white">{event.instructor}</span></p>
        <a href={event.link} target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-block text-center bg-[#ff7f50] text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors duration-300">
            Register Now
        </a>
    </Card>
);

const EventsPage = () => (
    <main className="container mx-auto px-6 py-12">
        <section id="events" className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Workshops & Webinars</h1>
                <p className="text-lg text-gray-300 mb-12">Join our live sessions to learn from industry experts and enhance your skills.</p>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </section>
    </main>
);

export default EventsPage;
