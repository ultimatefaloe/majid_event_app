import React from 'react'
import EventForm from '../components/events/EventForm'

const NewEvent = () => {
  return (
    <div>
      <h1 className='text-xl md:text-2xl font-bold text-indigo-400 mb-4'>Create New Event</h1>
      <p className='text-gray-300 mb-6'>Fill in the details below to create a new event.</p>

      <div>
        <EventForm onSubmit={()=> console.log("form submitted successfully")} />
      </div>
    </div>
  )
}

export default NewEvent