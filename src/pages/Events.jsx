import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import EventCard from "../components/events/EventCard";
import { events } from "../data/events";

const Events = () => {
  ``;
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    searchTerm: "",
    location: "all",
    date: "all",
  });

  const filterChangeHandler = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-left">
          <h1 className="text-xl md:text-2xl font-bold text-indigo-400">
            Events
          </h1>
          <p className="text-gray-300">
            I Discover and create amazing events with our platform.
          </p>
        </div>

        <div>
          <Button onClick={() => navigate("/events/new")}>
            <Plus size={16} className="text-white" />
            New Event
          </Button>
        </div>
      </div>

      {/* filter section */}
      <div className="flex bg-gray-800 p-4 rounded-md mb-6 flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <div className="flex-1">
          <Input
            placeholder="Search events..."
            value={filter.searchTerm}
            onChange={filterChangeHandler}
            name="searchTerm"
            id="searchTerm"
          />
        </div>

        <div className="flex gap-4">
          <select
            name="location"
            value={filter.location}
            onChange={filterChangeHandler}
            className="px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Locations</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>

          <select
            name="date"
            value={filter.date}
            onChange={filterChangeHandler}
            className="px-3 py-2 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Dates</option>I
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
          </select>
        </div>
      </div>

      {/* Events list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
