// EditPage.jsx
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { index } = useParams(); // Get the page index from URL
  const [sliderImage, setSliderImage] = useState(null);
  const [featuredImages, setFeaturedImages] = useState([null, null, null, null]); // State for 4 featured images
  const [title, setTitle] = useState(''); // Placeholder for page title
  const [descriptions, setDescriptions] = useState(['', '']); // Placeholder for descriptions

  // Mock page data (in a real app, this would come from PageList or a global state)
  const pages = [
    { title: 'About NGeoGle', author: 'admin', date: '2021/01/12 at 8:43 am' },
    { title: 'Corporate Sales', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Travel Agents', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Terms and Condition', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Privacy Page', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Chartered Sales', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Cargo Pages', author: '', date: '2021/01/12 at 8:43 am' },
  ];

  // Get the page data based on index (fallback if index is invalid)
  const page = pages[index] || { title: 'Untitled', author: '', date: '' };

  const handleImageChange = (e, setImage, index = null) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (index !== null) {
        // Update specific featured image
        const newFeaturedImages = [...featuredImages];
        newFeaturedImages[index] = imageUrl;
        setFeaturedImages(newFeaturedImages);
      } else {
        // Update slider image
        setImage(imageUrl);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6 bg-gray-50 min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* Slider Upload */}
        <div>
          <label className="block font-light text-[18px] mb-2">Upload Slider</label>
          <div className="flex">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setSliderImage)}
            className="mb-2 bg-white p-2 rounded"
          />
          <div className="bg-[#C5AC8E] px-3 py-2 text-white h-fit text-[16px]">Attached</div>
          </div>
          {sliderImage && (
            <img src={sliderImage} alt="Slider" className="w-full h-64 object-cover rounded-md" />
          )}
        </div>

        {/* Title Sections */}
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="space-y-3 border p-4 rounded bg-white">
            <input
              type="text"
              placeholder={`Title ${idx + 1}`}
              defaultValue={idx === 0 ? page.title : ''} // Pre-fill first title with page title
              className="w-full border-b p-2 text-lg font-medium outline-none"
            />
            {/* Text Editor Toolbar */}
            <div className="border rounded bg-[#2C473A] text-white flex items-center p-1 gap-1">
              <select className="border rounded p-1 text-sm">
                <option>Normal</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
              <button className="p-1 hover:bg-gray-100 rounded font-bold">B</button>
              <button className="p-1 hover:bg-gray-100 rounded italic">I</button>
              <button className="p-1 hover:bg-gray-100 rounded underline">U</button>
              <button className="p-1 hover:bg-gray-100 rounded">S</button>
              <button className="p-1 hover:bg-gray-100 rounded">"</button>
              <div className="h-5 w-px bg-gray-300 mx-1"></div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4H4v4h4V4z" fill="currentColor"/>
                  <path d="M4 11h4v4H4v-4z" fill="currentColor"/>
                  <path d="M4 18h4v4H4v-4z" fill="currentColor"/>
                  <path d="M11 4h12v4H11V4z" fill="currentColor"/>
                  <path d="M11 11h12v4H11v-4z" fill="currentColor"/>
                  <path d="M11 18h12v4H11v-4z" fill="currentColor"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h4v4H4V4z" fill="currentColor"/>
                  <path d="M11 4h12v4H11V4z" fill="currentColor"/>
                  <path d="M4 11h4v4H4v-4z" fill="currentColor"/>
                  <path d="M11 11h12v4H11v-4z" fill="currentColor"/>
                  <path d="M4 18h4v4H4v-4z" fill="currentColor"/>
                  <path d="M11 18h12v4H11v-4z" fill="currentColor"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16v2H4V6z" fill="currentColor"/>
                  <path d="M4 11h16v2H4v-2z" fill="currentColor"/>
                  <path d="M4 16h16v2H4v-2z" fill="currentColor"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16v2H4V6z" fill="currentColor"/>
                  <path d="M8 11h12v2H8v-2z" fill="currentColor"/>
                  <path d="M4 16h16v2H4v-2z" fill="currentColor"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 7h10v2H9V7z" fill="currentColor"/>
                  <path d="M6 7H4v10h2V7z" fill="currentColor"/>
                  <path d="M9 15h10v2H9v-2z" fill="currentColor"/>
                  <path d="M6 15h2v2H6v-2z" fill="currentColor"/>
                  <path d="M6 7h2v2H6V7z" fill="currentColor"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8L3 12l4 4V8z" fill="currentColor"/>
                  <path d="M17 8l4 4-4 4V8z" fill="currentColor"/>
                  <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>
            <textarea
              className="w-full border p-2 rounded h-32 resize-none"
              placeholder="Write your content here..."
              defaultValue={idx === 0 ? "EEI Insurance Policy protects the Insured against accidental breakdown and physical damage of the electronic equipment as result of any perils except those stated as excluded perils in the policy." : ""}
            />
          </div>
        ))}

        {/* Green Area */}
        <div className="w-full bg-[#10172B] mb-1 p-3 pl-7 text-white">Footer Description Text</div>
        <div className="bg-white p-4 rounded space-y-4 w-full">
          <div className="flex justify-between items-center mb-4 w-full">
          <div>
          <div className="flex gap-x-1 items-center">
                <PlusIcon className="w-5 h-5 bg-[#C5AC8E] rounded-full p-1 text-white cursor-pointer" />
                <label className="font-light text-[16px] underline">Change title</label>
            </div>
            <input
              type="text"
              placeholder="Title Description"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full pl-3 p-2 rounded mt-1 text-[#424541] bg-[#C5AC8E] max-w-[400px]"
            />
          </div>
          <div>
            <div className="flex gap-x-1 items-center">
                <PlusIcon className="w-5 h-5 bg-[#C5AC8E] rounded-full p-1 text-white cursor-pointer" />
                <label className="font-light text-[16px] underline">Change conatct</label>
            </div>
            <input
              type="email"
              placeholder="chartered@ngeagle.com"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full pl-3 p-2 rounded mt-1 text-[#424541] bg-[#C5AC8E] max-w-[400px]"
            />
          </div>
          </div>
          {[1].map((_, idx) => (
            <div key={idx}>
              <div className="flex gap-x-1 items-center">
                <PlusIcon className="w-5 h-5 bg-[#C5AC8E] rounded-full p-1 text-white cursor-pointer" />
                <label className="font-light text-[16px] underline">Change descriptions</label>
            </div>
              <textarea
                placeholder="Download a shareable and printable document containing general information about this subsidiary."
                value={descriptions[idx]}
                onChange={(e) => {
                  const newDescriptions = [...descriptions];
                  newDescriptions[idx] = e.target.value;
                  setDescriptions(newDescriptions);
                }}
                className="w-full pl-3 p-2 rounded mt-1 text-[#424541] bg-[#C5AC8E]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-64 space-y-6">
        {/* Page Attributes */}
        <div className="bg-white rounded p-4 shadow-sm">
          <label className="block mb-2 font-semibold">Page Attributes</label>
          <select className="w-full border p-2 rounded">
            <option>Policy Statements</option>
            <option>General Information</option>
            <option>Promotional</option>
          </select>
        </div>

        {/* Featured Images */}
        {[0, 1, 2, 3].map((idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow-sm">
            <label className="block mb-1">Feature Image {idx + 1}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setFeaturedImages, idx)}
              className="mb-2"
            />
            {featuredImages[idx] ? (
              <img
                src={featuredImages[idx]}
                alt={`Featured ${idx + 1}`}
                className="w-full h-32 object-cover rounded"
              />
            ) : (
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded">
                <span className="text-sm text-gray-500">Set featured image</span>
              </div>
            )}
          </div>
        ))}

        {/* Publish Button */}
        <button className="w-full py-2 bg-[#0B1B2B] text-white rounded shadow-md">
          Publish Page
        </button>
      </div>
    </div>
  );
};

export default EditPage;