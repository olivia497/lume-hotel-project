import React from 'react'

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      {/* Image Section */}
      <img
        src="src/assets/jonathan-borba-00fCk2lZn1c-unsplash.jpg"
        alt="hotel seating area"
        className="w-1/2 max-w-md h-auto object-cover rounded-lg shadow-lg"
      />

      {/* Text Section */}
      <div className="ml-8 max-w-xl text-left">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est placeat tempora quas
          reprehenderit aspernatur dolorum adipisci labore. Vero beatae officia veritatis
          consequatur accusamus sint ex reprehenderit fuga repudiandae enim.
        </p>
      </div>
    </div>
  );
};

export default About;

