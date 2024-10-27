"use client"
import { useEffect, useState } from "react";

export default function OurServices() {
    const [afterLoading, setAfterLoading] = useState(false);

    useEffect(() => {
  
      const timer = setTimeout(() => {
        setAfterLoading(true);
      }, 500); 
  
      return () => clearTimeout(timer); 
    }, []);
  
    return (
      <main className={`${afterLoading ? "beforeLoading" : "afterPageLoad"} max-w-[370px] sm:max-w-[500px] my-auto mx-auto`}>
        <h1>Our Services</h1>
        <p>This is Our services page.</p>
      </main>
    );
  }
  