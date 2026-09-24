import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Plus, Edit } from "lucide-react";

const EventForm = ({ onSubmit, event, isEdit = false }) => {
  const [formData, setFormData] = useState({
    name: event?.name || "",
    description: event?.description || "",
    date: event?.date || "",
    location: event?.location || "",
    attendees: event?.attendees || 0,
    thumbnailUrl:
      event?.thumbnailUrl || "https://picsum.photos/seed/picsum/200/300",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-3xl">
      <form className=" flex flex-col gap-4 bg-gray-800 p-6 rounded-md">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-gray-300 font-medium text-left">
            Event Title
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={inputChangeHandler}
            placeholder="Enter event title"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-gray-300 font-medium text-left">
            Event Description
          </label>
          <Input
            id="description"
            name="description"
            value={formData.description}
            onChange={inputChangeHandler}
            placeholder="Enter event description"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-gray-300 font-medium text-left">
            Event Date
          </label>
          <Input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={inputChangeHandler}
            placeholder="Enter event date"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-gray-300 font-medium text-left">
            Event Location
          </label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={inputChangeHandler}
            placeholder="Enter event location"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-gray-300 font-medium text-left">
            Event Attendees
          </label>
          <Input
            type="number"
            id="attendees"
            name="attendees"
            value={formData.attendees}
            onChange={inputChangeHandler}
            placeholder="0"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-gray-300 font-medium text-left">
            Event Thumbnail URL
          </label>
          <Input
            type="url"
            id="thumbnailUrl"
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={inputChangeHandler}
            placeholder="https://example.com/thumbnail.jpg"
            required={true}
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button>
            {isEdit ? (
              <>
                <Edit size={16} className="text-white" />
                Update Event
              </>
            ) : (
              <>
                <Plus size={16} className="text-white" />
                Create Event
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
