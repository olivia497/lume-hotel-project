import React from 'react'

const About = () => {
  return (
    <div className='flex'>
      {/* Image Section */}
      <img
        src="src/assets/jonathan-borba-00fCk2lZn1c-unsplash.jpg"
        alt="hotel seating area"
        className='w-100'
      />

      {/* Text Section */}
      <div>
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est placeat tempora quas
          reprehenderit aspernatur dolorum adipisci labore. Vero beatae officia veritatis
          consequatur accusamus sint ex reprehenderit fuga repudiandae enim.
        </p>
      </div>
    </div>
  );
};

export default About;

