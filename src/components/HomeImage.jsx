import React from 'react'
import { useRef } from 'react';

const HomeImage = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-100 p-2 rounded-full shadow-md"
        onClick={() => scroll('left')}
      >
        ←
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md"
        onClick={() => scroll('right')}
      >
        →
      </button>

      {/* Scrollable Image Row */}
      <div
        ref={scrollRef}
         className="flex gap-4 overflow-scroll scroll-smooth py-4 no-scrollbar"
      >
        {Array(10).fill(0).map((_, index) => (
          <img
            key={index}
            src="src/assets/home-page-images/diana-rafira-456jRTTQNC0-unsplash.jpg"
            alt={`Hotel ${index}`}
            className="min-w-md h-100 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImage;


// turn into carousel componenet?