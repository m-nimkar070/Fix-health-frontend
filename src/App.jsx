import React from "react";
import Header from "./components/Header/Header";
import HeroImage from "./components/HeroImage/HeroImage";
import BookingForm from "./components/BookingForm/BookingForm";
import { Testimonial } from "./components/Testimonials/Testimonials";
import { slides } from "./assets/data.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroImage
        title="Welcome to FixHealth"
        description="Explore the amazing features and services we offer."
      />
      <BookingForm />
      <Testimonial data={slides} />
    </div>
  );
}
export default App;
