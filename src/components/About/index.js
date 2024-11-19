import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const About = () =>{
    const [about, setAbout] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
    return(
        <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Welcome to our Computer Science student forum. A place where CS students can connect,
            collaborate, and help each other excel in their programming journey.
          </p>
          {/* Statistik Menarik */}
          <div className="stats-container">
            <div className="stat-item">
              <h3>5,000+</h3>
              <p>Members</p>
            </div>
            <div className="stat-item">
              <h3>1,200+</h3>
              <p>Discussions</p>
            </div>
            <div className="stat-item">
              <h3>350+</h3>
              <p>Topics</p>
            </div>
          </div>
          {/* Meet Our Team */}
          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-container">
              <div className="team-member">
                <img src={`data:image/jpeg;base64, ${about.image}`}  alt="Team Member 1" />
                <h3>Arturito rawung</h3>
                <p>Team Leader</p>
              </div>
              <div className="team-member">
                <img src={`data:image/jpeg;base64, ${about.image3}`} alt="Team Member 2" />
                <h3>Aprillia Mononutu</h3>
                <p>UI/UX Designer</p>
              </div>
              <div className="team-member">
                <img src={`data:image/jpeg;base64, ${about.image4}`}alt="Team Member 3" />
                <h3>Meilyan</h3>
                <p>Backend Developer</p>
              </div>
              <div className="team-member">
                
                <a href="https://myweb-two-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={`data:image/jpeg;base64, ${about.image1}`} alt="Team Member 4" />
                </a>
                <h3>Cantika</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default About;