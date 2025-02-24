import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
 
const supabase = createClient("https://dhzyuiommgqyiikmczbq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoenl1aW9tbWdxeWlpa21jemJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTAzODIsImV4cCI6MjA1NTg4NjM4Mn0.dirsvJ714vZ3_ONwp29UBV3o-IDwE6xb7rphcrUA0_U");
 
const EventForm = () => {
    const [genres, setGenres] = useState([]);
    const [eventDetails, setEventDetails] = useState({
        event_name: "",
        event_image: "",
        description: "",
        date: "",
        location: "",
        no_of_tickets: "",
        general_tickets: "",
        vip_tickets: "",
        early_bird_tickets: "",
        general_ticket_price: "",
        vip_ticket_price: "",
        early_bird_ticket_price: "",
        genre_id: "",
        organizer_id: "",
    });
 
    useEffect(() => {
        const fetchGenres = async () => {
            const { data, error } = await supabase.from("genere_details").select("*");
            if (!error) setGenres(data);
        };
        fetchGenres();
    }, []);
 
    const handleChange = (e) => {
        setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from("event_details").insert([eventDetails]);
        if (error) alert("Error adding event");
        else alert("Event added successfully!");
    };
 
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F8FAFC]">
            <h1 className="text-3xl font-bold mb-4">Create an Event</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                <input type="text" name="event_name" placeholder="Event Name" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <input type="text" name="event_image" placeholder="Event Image URL" onChange={handleChange} className="w-full p-2 border rounded mb-2" />
                <textarea name="description" placeholder="Event Description" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <input type="date" name="date" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <input type="number" name="no_of_tickets" placeholder="Total Tickets" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
 
                {/* Ticket Pricing */}
                <input type="number" name="general_ticket_price" placeholder="General Ticket Price" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <input type="number" name="vip_ticket_price" placeholder="VIP Ticket Price" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
                <input type="number" name="early_bird_ticket_price" placeholder="Early Bird Ticket Price" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
 
                {/* Genre Selection */}
                <select name="genre_id" onChange={handleChange} className="w-full p-2 border rounded mb-2" required>
                    <option value="">Select Genre</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
 
                <button type="submit" className="w-full p-3 bg-black text-white rounded hover:bg-green-500">Create Event</button>
            </form>
        </div>
    );
};
 
export default EventForm;
 
 