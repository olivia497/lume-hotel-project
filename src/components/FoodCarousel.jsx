import React, { useRef, useEffect, useState } from 'react';

const FoodCarousel = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1715249792880-f15e279c18dc?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531664412848-9610afed156c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1662982696492-057328dce48b?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  

  const totalImages = images.length; // number of images
  const scrollDistance = 320; // Width of image + gap
  const autoScrollInterval = 3000; // 3 seconds

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
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-scroll scroll-smooth py-4 no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {images.map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            alt={`Hotel ${index + 1}`}
            className="min-w-md h-100 object-cover rounded-lg flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          />
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center pt-0 pb-5 gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-amber-600' 
                : 'bg-gray-300 bg-opacity-50 hover:bg-opacity-75'
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

export default FoodCarousel;