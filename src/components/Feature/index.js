import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

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

  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          {/* Feature 1 with 3 images in horizontal layout */}
          <div className="col-md-12">
            <div className="feature-thumb">
              <span>01</span>
              <h3>{feature.title}</h3>
              <p>{feature.subTitle}</p>

              {/* Images displayed horizontally */}
              <div className="feature-images">
                {imageUrls.length > 0 ? (
                  imageUrls.map((url, index) => (
                    <div className="feature-image" key={index}>
                      <img
                        src={`data:image/jpeg;base64,${url}`} // Menampilkan gambar dalam format base64
                        alt={`Feature ${index + 1}`}
                        className="img-fluid"
                      />
                    </div>
                  ))
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
