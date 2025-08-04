import React, { useRef, useEffect, useState } from 'react';

const HomeImage = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Configuration
  const totalImages = 10;
  const scrollDistance = 320; // Width of image + gap (adjust based on your image width)
  const autoScrollInterval = 3000; // 3 seconds

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollDistance : scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollDistance,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalImages;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isPaused, totalImages, autoScrollInterval]);

  // Handle manual scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / scrollDistance);
        setCurrentIndex(newIndex);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [scrollDistance]);

  return (
    <div 
      className="relative w-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-opacity"
        onClick={() => {
          scroll('left');
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
        }}
      >
        ←
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-opacity"
        onClick={() => {
          scroll('right');
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
        }}
      >
        →
      </button>



      {/* Scrollable Image Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-scroll scroll-smooth py-4 no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {Array(totalImages).fill(0).map((_, index) => (
          <img
            key={index}
            src="src/assets/home-page-images/diana-rafira-456jRTTQNC0-unsplash.jpg"
            alt={`Hotel ${index}`}
            className="min-w-md h-100 object-cover rounded-lg flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          />
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Array(totalImages).fill(0).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            onClick={() => {
              scrollToIndex(index);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 5000);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeImage;