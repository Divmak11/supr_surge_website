"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

const animationURL = "https://lottie.host/81735515-5735-4363-952c-297587c6b412/Y08w4iAYI4.json";

const InteractiveGraphic = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(animationURL);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to fetch animation data:", error);
      }
    };

    fetchAnimation();
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-96 bg-primary-purple/20 rounded-2xl flex items-center justify-center">
        <p>Loading Animation...</p>
      </div>
    );
  }

  return <Lottie animationData={animationData} />;
};

export default InteractiveGraphic; 