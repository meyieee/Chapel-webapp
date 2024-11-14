import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Feature = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const featureRef = ref(db, "feature/");

    onValue(featureRef, (snapshot) => {
      const data = snapshot.val();
      setFeature(data);
    });
  }, []);
  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>01</span>
              <h3>{feature.title}</h3>
              <p>{feature.subTitle}</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>02</span>
              <h3>{feature.title1}</h3>
              <p>{feature.subTitle1} </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="feature-thumb">
              <span>03</span>
              <h3>{feature.title2}</h3>
              <p>{feature.subTitle2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
