import React, { useState, useEffect } from "react";
import "./BookingForm.css";

export default function bookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
    selectedDoctor: "",
  });

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showPhysioExperience, setShowPhysioExperience] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const cityParam = urlParams.get("city");

  const searchCity = () => {
    if (cityParam) {
      // If city URL parameter is present, update the form data
      setFormData((prevData) => ({ ...prevData, city: cityParam }));
    }
  };

  // City Based use Effect
  useEffect(() => {
    searchCity();
    fetchDoctors();
  }, [cityParam]);

  // setShowPhysioExperience when age Changes
  useEffect(() => {
    if (formData.age && parseInt(formData.age, 10) > 40) {
      setShowPhysioExperience(true);
    } else {
      setShowPhysioExperience(false);
    }
  }, [formData]);

  //Fetching Data from Backend API
  const fetchDoctors = async () => {
    const URL = "https://fixhealth-backend-8iet.onrender.com/api/items";
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);

      if (cityParam) {
        const cityData = data.filter((item) => item.city === cityParam);
        if (cityData.length > 0) {
          setFilteredDoctors(cityData);
        } else {
          setFilteredDoctors(data);
        }
      } else {
        setFilteredDoctors(data);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <div className="Form-container">
      <div className="Form-Heading">
        <h1>Drop a Query</h1>
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            min="0"
            max="90"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Chief Complaints:
          <textarea
            name="chiefComplaints"
            value={formData.chiefComplaints}
            onChange={handleChange}
          ></textarea>
        </label>
        {showPhysioExperience && (
          <label>
            Any Previous Experience:
            <textarea
              name="previousExperience"
              value={formData.previousExperience}
              onChange={handleChange}
            ></textarea>
          </label>
        )}
        <label>
          Doctors List:
          <select
            name="selectedDoctor"
            value={formData.selectedDoctor}
            onChange={handleChange}
          >
            {filteredDoctors &&
              filteredDoctors.map((items) => (
                <option key={items._id} value={items.name}>
                  {items.name}
                </option>
              ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
