import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const Feature = () => {
  const [feature, setFeature] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUrls2, setImageUrls2] = useState([]);
  const [imageUrlsHumor, setImageUrlsHumor] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "feature/");

    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeature(data);

      setImageUrls([data.image1, data.image2, data.image3]);

      setImageUrls2([
        data.feature2.image1,
        data.feature2.image2,
        data.feature2.image3,
      ]);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          {/* Feature 1 */}
          <div className="col-md-12">
            <div className="feature-box">
              <div className="feature-text">
                <h3>{feature.title || "Loading ..."}</h3>
                <Slider {...settings}>
                  {imageUrls.map((url, index) => (
                    <div key={index} className="feature-image">
                      <img
                        src={`data:image/jpeg;base64,${url}`}
                        alt={`Feature ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-12">
            <div className="feature-box">
              <div className="feature-text">
                <h3>{feature.feature2?.title || "Loading ..."}</h3>
                <Slider {...settings}>
                  {imageUrls2.map((url, index) => (
                    <div key={index} className="feature-image">
                      <img
                        src={`data:image/jpeg;base64,${url}`}
                        alt={`Feature 2 Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
