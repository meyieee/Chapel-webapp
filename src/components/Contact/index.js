import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validate input
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Get a reference to the database
      const db = getDatabase();
      
      // Generate a unique ID for each form submission (you could also use a timestamp or UUID)
      const userId = new Date().getTime(); // You can use something more unique, like UUID

      // Write the data to the Firebase Realtime Database
      await set(ref(db, 'contact/' + userId), {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });

      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
      // Alert user of successful submission
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error writing to Firebase:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <form id="contact-form" role="form" onSubmit={handleSubmit}>
              <div className="section-title">
                <h2>
                  Contact us <small>We love conversations. Let’s talk!</small>
                </h2>
              </div>
              <div className="col-md-12 col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  className="form-control"
                  rows={6}
                  placeholder="Tell us about your message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="btn btn-primary mt-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="contact-image">
            <img
              src="images/contact-image.jpg"
              className="img-responsive"
              alt="Smiling Two Girls"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
