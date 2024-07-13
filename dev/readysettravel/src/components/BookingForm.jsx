import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .custom-header-height {
    height: 60vh;
  }
  .text-shadow-lg {
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }
  .text-shadow-md {
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Header = styled.header`
  background-image: url('/img/booking-bg.jpg');
`;

const Form = styled.form`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #f97304;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e57e22;
  }
`;

function BookingForm() {
  return (
    <Container>
      <Header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Book Your Dream Trip</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Fill out the form below to start planning your adventure.</p>
        </div>
      </Header>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Booking Form</h2>
          <Form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <Input type="text" id="name" name="name" placeholder="Enter your full name" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Destination</label>
              <Input type="text" id="destination" name="destination" placeholder="Enter your destination" />
            </div>
            <div className="mb-6">
              <label htmlFor="dates" className="block text-gray-700 text-sm font-bold mb-2">Travel Dates</label>
              <Input type="text" id="dates" name="dates" placeholder="Enter your travel dates" />
            </div>
            <div className="mb-6">
              <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests</label>
              <Input type="number" id="guests" name="guests" placeholder="Enter number of guests" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Additional Information</label>
              <TextArea id="message" name="message" placeholder="Enter any additional information" />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </section>
    </Container>
  );
}

export default BookingForm;
