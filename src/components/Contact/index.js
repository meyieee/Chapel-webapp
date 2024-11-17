import { useState, useEffect } from "react";
import { ref, set, onValue, remove } from "@firebase/database";
import { database } from "../../config/Firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contact, setContact] = useState({
    title: "Contact us",
    subTitle: "We love conversations. Lets talk!",
  });

  const [suggestions, setSuggestions] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const newMessageRef = ref(database, `messages/${Date.now()}`);
      await set(newMessageRef, {
        name,
        email,
        message,
        timestamp: Date.now(),
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    const contactRef = ref(database, "contact");
    const unsubscribe = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContact(data);
      }
    });

    // Listen to messages in Firebase
    const messagesRef = ref(database, "messages");
    const unsubscribeMessages = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      setSuggestions(messageList);
    });

    // Cleanup subscriptions on unmount
    return () => {
      unsubscribe();
      unsubscribeMessages();
    };
  }, []);

  // Function to mask email
  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const visiblePart = localPart.slice(0, 3); // Show first 3 characters
    return `${visiblePart}***@${domain}`;
  };

  // Function to delete a message
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        const messageRef = ref(database, `messages/${id}`);
        await remove(messageRef); // Remove message from Firebase
        setSuggestions((prev) => prev.filter((item) => item.id !== id)); // Update UI
        alert("Message deleted successfully.");
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Failed to delete message. Please try again.");
      }
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
                  {contact.title} <small>{contact.subTitle}</small>
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
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Tell us about your message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4 col-sm-12">
                <input
                  type="submit"
                  className="form-control"
                  name="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Suggestion Box */}
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-12">
            <div className="section-title">
              <h2>Suggestions from Others</h2>
            </div>
            <ul className="suggestion-list">
              {suggestions.map((suggestion) => (
                <li key={suggestion.id} className="suggestion-item">
                  <strong>{suggestion.name}:</strong> {suggestion.message}
                  <br />
                  <small>Email: {maskEmail(suggestion.email)}</small>
                  <button
                    onClick={() => handleDelete(suggestion.id)}
                    className="btn btn-danger"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
