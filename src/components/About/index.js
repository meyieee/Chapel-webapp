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
          <h2>Get to Know Us</h2>
          <p>
          </p>
          {/* Statistik Menarik */}
          <div className="container" style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
  <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "10px", color: "#007BFF" }}>About Us</h2>
  <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto", maxWidth: "600px", lineHeight: "1.6" }}>
    Welcome to our Computer Science student forum—a dynamic platform where aspiring developers and tech enthusiasts 
    share knowledge, forge connections, and grow together on their programming journey.
  </p>

  {/* Highlighted Features */}
  <div className="features-container" style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
    <div className="feature-item" style={{ textAlign: "center", padding: "20px", width: "30%", background: "#f0f8ff", borderRadius: "10px" }}>
      <h3 style={{ color: "#007BFF", fontSize: "24px" }}>Connect</h3>
      <p style={{ color: "#555", fontSize: "16px" }}>Join a vibrant community of like-minded individuals.</p>
    </div>
    <div className="feature-item" style={{ textAlign: "center", padding: "20px", width: "30%", background: "#fff7e6", borderRadius: "10px" }}>
      <h3 style={{ color: "#FF9900", fontSize: "24px" }}>Collaborate</h3>
      <p style={{ color: "#555", fontSize: "16px" }}>Engage in discussions and team up on projects.</p>
    </div>
    <div className="feature-item" style={{ textAlign: "center", padding: "20px", width: "30%", background: "#e6ffe6", borderRadius: "10px" }}>
      <h3 style={{ color: "#28A745", fontSize: "24px" }}>Excel</h3>
      <p style={{ color: "#555", fontSize: "16px" }}>Enhance your skills and achieve your programming goals.</p>
    </div>
  </div>

  {/* Stats Section */}
  <div className="stats-container" style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
    <div className="stat-item" style={{ textAlign: "center", padding: "20px", borderRadius: "10px", background: "#f0f8ff", width: "30%" }}>
      <div style={{ fontSize: "40px", color: "#007BFF", marginBottom: "10px" }}>
        <i className="fas fa-users"></i>
      </div>
      <h3 style={{ fontSize: "28px", color: "#007BFF" }}>500+</h3>
      <p style={{ fontSize: "16px", color: "#555" }}>Members</p>
    </div>
    <div className="stat-item" style={{ textAlign: "center", padding: "20px", borderRadius: "10px", background: "#fff7e6", width: "30%" }}>
      <div style={{ fontSize: "40px", color: "#FF9900", marginBottom: "10px" }}>
        <i className="fas fa-comments"></i>
      </div>
      <h3 style={{ fontSize: "28px", color: "#FF9900" }}>1,200+</h3>
      <p style={{ fontSize: "16px", color: "#555" }}>Discussions</p>
    </div>
    <div className="stat-item" style={{ textAlign: "center", padding: "20px", borderRadius: "10px", background: "#e6ffe6", width: "30%" }}>
      <div style={{ fontSize: "40px", color: "#28A745", marginBottom: "10px" }}>
        <i className="fas fa-star"></i>
      </div>
      <h3 style={{ fontSize: "28px", color: "#28A745" }}>300+</h3>
      <p style={{ fontSize: "16px", color: "#555" }}>Positive Reviews</p>
    </div>
  </div>
</div>

          {/* Meet Our Team */}
          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-container">
              <div className="team-member">
              <a href="https://porto-six-rosy.vercel.app/" target="_blank" rel="noopener noreferrer"> 
                <img src={`data:image/jpeg;base64, ${about.image}`} alt="Team Member 1" />
             </a>
                <h3>Arturito rawung</h3>
                <p>Team Leader</p>
              </div>
              <div className="team-member">
              <a href="https://portofolio-dun-zeta.vercel.app/" target="_blank" rel="noopener noreferrer"> 
                <img src={`data:image/jpeg;base64, ${about.image3}`} alt="Team Member 2" />
             </a>
                <h3>Aprillia Mononutu</h3>
                <p>UI/UX Designer</p>
              </div>
              <div className="team-member">
              <a href="https://meilyan-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img src={`data:image/jpeg;base64, ${about.image4}`} alt="Team Member 3" />
                </a>
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