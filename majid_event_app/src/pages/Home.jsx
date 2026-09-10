import React from "react";
import Button from "../components/ui/Button";
import StatsCard from "../components/ui/StatsCard";
import { useNavigate, Link } from "react-router";
import { Plus } from "lucide-react";

const stats = [
  {
    title: "Total Events",
    value: 42,
    color: "indigo",
  },
  {
    title: "Upcoming Events",
    value: 15,
    color: "blue",
  },
  {
    title: "Completed Events",
    value: 27,
    color: "green",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const navigateToNewEventHandler = () => {
    navigate("/events/new");
  };

  return (
    <div className="text-center space-y-12">
      <div className="">
        <h1 className="text-3xl md:text-6xl font-bold text-indigo-400">
          Welcome to EventApp
        </h1>
        <p className="text-gray-300 mt-4">
          Discover and create amazing events with our platform.
        </p>
      </div>
      <div className="flex justify-center items-center mt-3 md:mt-6 gap-4">
        <Button onClick={navigateToNewEventHandler}>
          <Plus size={16} />
          Create New Event
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>

      <div className="flex justify-center items-center my-6">
        <Link
          to="/events"
          className="text-indigo-400 hover:text-indigo-500 hover:underline"
        >
          Browser all events →
        </Link>
      </div>
    </div>
  );
};

export default Home;
