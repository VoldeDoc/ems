import React, { useState } from "react";
import in1 from "../assets/in1.jpg";
import in2 from "../assets/in2.jpg";
import in3 from "../assets/in3.jpg";
import si1 from "../assets/si1.jpg";
import si2 from "../assets/si2.jpg";
import si3 from "../assets/si3.jpg";

const galleryData = [
  {
    id: 1,
    label: "INDUCTION GRADUATE TRAINING",
    mainImage: in1,
    subImages: [in1, in2, in3],
  },
  {
    id: 2,
    label: "SLIVER SERVICE CLASS",
    mainImage: si1,
    subImages: [si1, si2, si3],
  },
];

const Gallery = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };

  const handleBackClick = () => {
    setSelectedImageId(null);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const selectedItem = galleryData.find((item) => item.id === selectedImageId);

  return (
    <div className="py-10 md:pb-20 lg:px-18 md:px-12 px-6 relative z-0">
      {/* Modal for Fullscreen Image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={modalImage}
              alt="Full Preview"
              className="max-h-full max-w-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Sub Images View */}
      {selectedImageId ? (
        <>
          <button
            onClick={handleBackClick}
            className="mb-6 bg-[#19392c] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            ← Back
          </button>

          <div className="rounded-xl">
            <h3 className="text-xl md:text-2xl poppins font-semibold text-[#333333] mb-4">
              {selectedItem.label} Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {selectedItem.subImages.map((subImage, index) => (
                <img
                  key={index}
                  src={subImage}
                  alt={`Sub-image ${index + 1}`}
                  onClick={() => openModal(subImage)}
                  className="w-full h-70 object-cover object-top rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        // Main Gallery View
        <>
          <div className="w-full mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-[35px] text-[#19392c] poppins font-bold">
              Our Gallery
            </h2>
            <p className="mt-2 text-[#19392c] font-medium text-sm md:text-base">
              Explore our collection of images
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer group"
                onClick={() => handleImageClick(item.id)}
              >
                <img
                  src={item.mainImage}
                  alt={item.label}
                  className="w-full h-64 object-cover object-top rounded-lg shadow-md transition-transform group-hover:scale-105"
                />
                <div className="bottom-0 w-full text-[#19392c] py-3 text-xl">
                  <p className="font-semibold pl-2">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
