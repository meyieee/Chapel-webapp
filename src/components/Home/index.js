import React from "react";
import { ref, onValue } from "@firebase/database";
import { database } from "../../config/FIrebase/index";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [homeContent, setHomeContent] = useState({
    title: "YOUR OPINION MATTERS"
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
    <div className="main-home" id="home">
      <div className="home-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {homeContent.title}
        </motion.h1>
        
       
        </div>
      </div>
  );
};

export default Home;