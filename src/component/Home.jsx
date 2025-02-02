import React from "react"; 
import { Statistics } from "../pages/Statistics";
import {Card } from "../component/Card";

export const Home = () => {
  return (
    <div className="bg-white" >
      {/* Hero Section */}
      <section className="bg-white text-gray-800 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">
              Transform Waste into Energy
            </h1>
            <p className="text-lg mb-6">
              Join us in making the world a greener place. Manage waste, produce
              biogas, and contribute to sustainable energy solutions.
            </p>
            <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600">
              Learn More
            </button>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.pexels.com/photos/5433129/pexels-photo-5433129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hero Section"
              className="rounded shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>


      <section className="bg-white">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-dark-800 capitalize lg:text-3xl">
      Explore Our <br /> Awesome <span className="text-green-800 font-extrabold">Biogas Solutions</span>
    </h1>
    <Card />
  </div>
</section>



      {/* Our Mission and Vision Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-8">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Mission */}
      <div>
        <h2 className="text-3xl font-extrabold mb-4 text-green-800">Our Mission</h2>
        <p className="text-gray-700">
          To create a greener and cleaner future by promoting biogas production through
          efficient waste management and fostering collaboration among communities,
          producers, and consumers.
        </p>
      </div>
      {/* Vision */}
      <div>
        <h2 className="text-3xl font-extrabold mb-4 text-green-800">Our Vision</h2>
        <p className="text-gray-700">
          To lead the way in sustainable energy by enabling a seamless connection between
          waste contributors, biogas producers, and customers, ensuring a sustainable energy ecosystem.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Statistics Section */}
      <Statistics />
      {/* Footer */}
      
    </div>
  );
};
