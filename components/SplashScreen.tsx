"use client";
import React, { useState, useEffect } from "react";
import anime from "animejs";

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const text = "UIFCE";

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isMounted) {
      animateSplash();
    }
  }, [isMounted]);

  const animateSplash = () => {
    anime
      .timeline({
        easing: "easeInOutExpo",
        duration: 2000,
        complete: () => {
          setTimeout(() => finishLoading(), 500); // Optional pause after animation
        },
      })
      .add({
        targets: ".splash-letter",
        opacity: [0, 1],
        translateY: ["-100%", "0%"],
        scale: [1.5, 1],
        delay: anime.stagger(200),
      });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images4.alphacoders.com/284/284838.jpg')] z-0" />

      {/* Text Mask Group */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex space-x-4">
          {isMounted &&
            text.split("").map((char, idx) => (
              <span
                key={idx}
                className="splash-letter text-[120px] sm:text-[150px] font-extrabold uppercase"
                style={{
                  backgroundImage:
                    "url('https://images4.alphacoders.com/284/284838.jpg')",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                {char}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
