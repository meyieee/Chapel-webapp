import { useState, useEffect } from "react";
import { ref, set, onValue, remove } from "@firebase/database";
import { database } from "../../config/FIrebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contact, setContact] = useState({
    title: "Contact Us",
    subTitle: "Have questions? We'd love to hear from you.",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [flashMessage, setFlashMessage] = useState({ message: "", type: "" });

  // Handle form input change
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

      setFlashMessage({
        message: "Message sent successfully!",
        type: "success",
      });
      setTimeout(() => setFlashMessage({ message: "", type: "" }), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  // Fetch contact details and suggestions
  useEffect(() => {
    const contactRef = ref(database, "contact");
    const unsubscribe = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContact(data);
      }
    });

    const messagesRef = ref(database, "messages");
    const unsubscribeMessages = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            isFromRight: Math.random() > 0.5, // Randomly decide if it's from the left or right
          }))
        : [];
      setSuggestions(messageList);
    });

    return () => {
      unsubscribe();
      unsubscribeMessages();
    };
  }, []);

  // Mask email for display
  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const visiblePart = localPart.slice(0, 3);
    return `${visiblePart}***@${domain}`;
  };

  // Handle suggestion delete with animation
  const handleDelete = async (id) => {
    // Set suggestion to 'deleting' state
    const updatedSuggestions = suggestions.map((suggestion) => {
      if (suggestion.id === id) {
        return { ...suggestion, deleting: true };
      }
      return suggestion;
    });

    setSuggestions(updatedSuggestions);

    // Wait for the animation to finish before removing the item from Firebase and the list
    setTimeout(async () => {
      try {
        const messageRef = ref(database, `messages/${id}`);
        await remove(messageRef);

        // Filter out the deleted message from the state
        setSuggestions((prev) => prev.filter((item) => item.id !== id));
        setFlashMessage({
          message: "Message deleted successfully!",
          type: "error",
        });
        setTimeout(() => setFlashMessage({ message: "", type: "" }), 3000);
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Failed to delete message. Please try again.");
      }
    }, 500); // Wait for the fade-out animation duration (500ms)
  };

  return (
    <section id="contact">
      <div className="container">
        {flashMessage.message && (
          <div className={`flash-message ${flashMessage.type}`}>
            {flashMessage.message}
          </div>
        )}
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

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-12">
            <div className="section-title">
              <h2>Suggestions from Others</h2>
            </div>
            <ul className="suggestion-list">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className={`suggestion-item ${
                    suggestion.deleting ? "deleting" : suggestion.isFromRight ? "right" : ""
                  }`}
                >
                  <strong>{suggestion.name}:</strong> {suggestion.message}
                  <br />
                  <small>Email: {maskEmail(suggestion.email)}</small>
                  <button
                    onClick={() => handleDelete(suggestion.id)}
                    className="btn btn-danger"
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
