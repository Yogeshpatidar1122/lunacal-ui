import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
    }
    setImages(newImages);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white bg-gray-900 rounded-2xl py-2 px-6">Gallery</h3>
        <div className="flex space-x-2 items-center">
          <label className="bg-gray-900 px-5 py-2 rounded-2xl cursor-pointer hover:scale-105 transition-shadow ">
            + Add Image
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          {/* Arrow Buttons Positioned to the Right */}
          <button className="bg-gray-900 p-2 rounded-full shadow-md text-gray-300"><ArrowLeft/> </button>
          <button className="bg-gray-900 p-2 rounded-full shadow-md text-gray-300"><ArrowRight/></button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded ${index}`}
            className="w-full h-32 bg-gray-700 rounded-lg object-cover shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
