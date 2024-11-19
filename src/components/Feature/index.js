import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import Slider from "react-slick"; // Import Slider component from react-slick

const Feature = () => {
  const [feature, setFeature] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Ambil data feature dan gambar dari Firebase Realtime Database
    const db = getDatabase();
    const featureRef = ref(db, "feature/");

    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeature(data);

      // Mengambil URL gambar dari Firebase Realtime Database
      const images = [data.image1, data.image2, data.image3];
      setImageUrls(images);
    });
  }, []);

  // Slick slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true,
    speed: 300, // Faster transition (300ms)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Auto-slide every 3 seconds
    arrows: false, // Disable arrows, only dots for navigation
    centerMode: false, // No centering mode, images stay aligned left
    cssEase: "ease-in-out", // Smooth transition easing for the sliding
  };

  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          {/* Feature 1 with slider for images */}
          <div className="col-md-12">
            <div className="feature-thumb">
              <h3>{feature.title}</h3>
              <p>{feature.subTitle}</p>

              {/* Carousel for images */}
              <div className="feature-images">
                {imageUrls.length > 0 ? (
                  <Slider {...settings}>
                    {imageUrls.map((url, index) => (
                      <div className="feature-image" key={index}>
                        <img
                          src={`data:image/jpeg;base64,${url}`} // Menampilkan gambar dalam format base64
                          alt={`Feature ${index + 1}`}
                          className="img-fluid" // Apply the class to make it responsive
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <p>Loading images...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
