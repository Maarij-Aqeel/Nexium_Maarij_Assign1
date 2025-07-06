"use client"

import { useEffect, useState } from "react";

const images = [
  "/images/gradient1.jpg",
  "/images/gradient2.jpg",
  "/images/gradient3.jpg",
  "/images/gradient5.jpg",
  "/images/gradient7.jpg",
  "/images/gradient8.jpg",
];

export default function Random_image({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBgImage(images[randomIndex]);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
}
