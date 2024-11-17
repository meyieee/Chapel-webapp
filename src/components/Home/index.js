import React from "react";
import { ref, onValue } from "@firebase/database";
import { database } from "../../config/Firebase/index";
import { useState, useEffect } from "react";

const Home = () => {
  const [homeContent, setHomeContent] = useState({
    title: "YOUR OPINION MATTERS",
    subtitle: "Give us your best thoughts about the student forum",
    description:
      "Join our vibrant community where every voice counts. Share your experiences, ideas, and suggestions to help shape the future of our student forum.",
  });

  useEffect(() => {
    const homeRef = ref(database, "home");
    const unsubscribe = onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setHomeContent(data);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="home" className="main-home parallax-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="home-info">
              <h1>{homeContent.title}</h1>
              <h2>{homeContent.subtitle}</h2>
              <div className="description-box">
                <p>{homeContent.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
