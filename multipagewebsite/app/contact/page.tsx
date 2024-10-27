"use client"
import { useEffect, useState } from "react";

export default function Contect() {
  const [afterLoading, setAfterLoading] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setAfterLoading(true);
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <main className={`${afterLoading ? "beforeLoading" : "afterPageLoad"} max-w-[370px] sm:max-w-[500px] my-auto mx-auto`}>
      <h1>Contect Us</h1>
      <p>This is our Contact page.</p>
    </main>
  );
}
