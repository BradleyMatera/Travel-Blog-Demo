<template>
    <div>
      <h1>Booking Form</h1>
      <p>Book your next adventure with us!</p>
      <form class="booking-form" @submit.prevent="submitForm">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="destination" placeholder="Destination" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BookingForm',
    methods: {
      async submitForm(event) {
        const formData = new FormData(event.target);
        try {
          const response = await axios.post('/api/bookings', formData);
          alert('Your booking request has been submitted. We will get back to you soon!');
          event.target.reset();
        } catch (error) {
          console.error('Error submitting booking form:', error);
          alert('An error occurred while submitting your booking request. Please try again later.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add specific styles for BookingForm component here */
  </style>
  