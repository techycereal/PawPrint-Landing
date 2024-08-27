import { useState } from 'react';
import './App.css';
import dog_hero from './assets/dog1.jpg';
import dog2 from './assets/dog2.jpg';
import dog3 from './assets/dog3.jpg';
import dog4 from './assets/dog4.jpg';
import dog5 from './assets/dog5.jpg';
import dog6 from './assets/dog7.jpg';
import dog7 from './assets/dog6.jpg';
import dog8 from './assets/dog8.jpg';
import dog9 from './assets/dog9.jpg';
import dog10 from './assets/dog10.jpg';

const images = [dog10, dog7, dog4, dog5, dog6, dog9]; // Add more images as needed

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${dog_hero})` }}
      >
        <div className="absolute left-0 right-0 border-t-8 border-blue-500 h-[10vh] flex items-center px-4">
          <div>
            <p className="text-white text-lg md:text-2xl font-bold">PawPrint Portraits</p>
          </div>
          <div className="ml-auto flex space-x-2 md:space-x-4">
            <button className="text-white text-sm md:text-md">Home</button>
            <button className="text-white text-sm md:text-md">About Us</button>
            <button className="text-white text-sm md:text-md">Pricing</button>
          </div>
        </div>
        
        <div className="flex items-center justify-center text-center h-[70vh] pt-[10vh] bg-black bg-opacity-50">
          <div className="px-4">
            <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl mb-4">
              Capture the Perfect Moment
            </h1>
            <p className="text-white font-semibold text-xs md:text-sm lg:text-md mb-4">
              Book a professional photoshoot for your furry friend and create lasting memories!
            </p>
            <button className="border-4 border-white rounded-3xl text-white px-4 py-2 md:px-6 md:py-3 mt-4">
              Schedule Your Session
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-blue-500 flex items-center justify-center py-8 ">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 space-y-6 md:space-y-0">
          <img 
            src={dog2} 
            alt="Dog Photoshoot" 
            className="w-full md:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="text-white text-center md:text-left md:ml-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Us?</h2>
            <ul className="list-disc list-inside text-sm md:text-md space-y-2">
              <li>Professional and experienced photographers.</li>
              <li>High-quality images with creative setups.</li>
              <li>Customizable packages to fit your needs.</li>
              <li>Convenient scheduling and flexible options.</li>
            </ul>
            <button className='rounded-lg px-2 py-2 md:px-4 md:py-2 mt-4 bg-yellow-400 ml-4'>Book your Appointment</button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Display */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Large View ${currentImageIndex + 1}`}
            className="max-w-full max-h-[90vh] object-cover"
          />
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Additional Sections */}
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 flex-1">
              <h3 className="text-xl font-semibold mb-2">Standard Photoshoot</h3>
              <p className="text-sm md:text-md">
                A professional session capturing the best moments of your pet with high-quality images.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 flex-1">
              <h3 className="text-xl font-semibold mb-2">Deluxe Photoshoot</h3>
              <p className="text-sm md:text-md">
                An extended session with multiple outfit changes and themed backgrounds for unique photos.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 flex-1">
              <h3 className="text-xl font-semibold mb-2">Custom Package</h3>
              <p className="text-sm md:text-md">
                Create a personalized photoshoot experience tailored to your pet's needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">1234 Pet Lane, Pet City, PC 56789</p>
            <p className="text-sm">Email: info@petphotos.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="text-center md:text-right mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400">Facebook</a>
              <a href="#" className="text-white hover:text-gray-400">Instagram</a>
              <a href="#" className="text-white hover:text-gray-400">Twitter</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm">&copy; 2024 Pet Photos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
