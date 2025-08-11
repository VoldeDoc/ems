import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog from "../assets/blog.png";
import Header2 from "../components/Header2";
import Contact2 from "../components/Contact2";
import Footer2 from "../components/Footer2";
import { Skeleton } from "@mui/material";
import { insights, topStories } from "../data/blogData";

const BlogPage = () => {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="max-w-[1500px] mx-auto">
      <Header2 />
      <div className="lg:px-15 md:px-10 px-5 p md:pb-12">
        <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
          {!bannerLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          )}
          <img
            src={blog}
            alt="Descriptive alt text for accessibility"
            className="w-full h-full object-cover object-center"
            onLoad={() => setBannerLoaded(true)}
            loading="eager"
            decoding="async"
            style={{ display: bannerLoaded ? "block" : "none" }}
          />
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <section className="px-4 sm:px-6 lg:px-8 py-12">
            <div className=" mb-12">
              <h2 className="text-3xl md:text-4xl poppins font-bold text-[#333333]">
                Welcome to Our Blog
              </h2>
              <p className="mt-2 poppins max-w-[430px] text-[#333333]">
                Stay inspired with expert tips on personal grooming, cultural
                etiquette, and professional excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map(
                ({ id, imageSrc, alt, title, description, date, slug }) => (
                  <div
                    key={id}
                    className="bg-white rounded-lg rounded-t-2xl overflow-hidden flex flex-col hover:shadow-lg hover:scale-105 transition duration-300"
                  >
                    {!imageLoaded[id] && (
                      <Skeleton
                        variant="rectangular"
                        className="w-full h-48"
                        animation="wave"
                      />
                    )}
                    <img
                      src={imageSrc}
                      alt={alt}
                      className="w-full h-48 object-cover"
                      onLoad={() => handleImageLoad(id)}
                      style={{ display: imageLoaded[id] ? "block" : "none" }}
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-[20px] font-semibold poppins text-[#2E2F33] mb-2">
                        {title}
                      </h3>
                      <p className="text-[#5F6980] poppins text-sm mb-4 flex-grow">
                        {description}
                      </p>
                      <div className="flex items-center justify-between text-gray-500 text-xs">
                        <Link
                          to={`/posts/${slug}`}
                          className="text-blue-500 font-semibold hover:underline"
                        >
                          View More
                        </Link>
                        <span className="text-[#333333] opacity-50 poppins">
                          {date}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>

          <aside className="max-w-xs w-full px-4 py-12 md:border-l md:border-gray-200 md:pl-8 space-y-8">
            <h2 className="text-lg poppins font-bold text-[#333333] mb-6">
              Top Stories
            </h2>
            <div className="space-y-8">
              {topStories.map((story, idx) => (
                <div
                  key={story.id}
                  className={`space-y-3 ${
                    idx < topStories.length - 1
                      ? "border-b border-gray-200 pb-8"
                      : ""
                  }`}
                >
                  <div className="text-2xl font-bold text-gray-900">
                    {idx + 1}
                  </div>
                  <div className="bg-white rounded-lg rounded-t-2xl overflow-hidden shadow hover:shadow-lg hover:scale-105 transition duration-300">
                    {!imageLoaded[story.id] && (
                      <Skeleton
                        variant="rectangular"
                        className="w-full h-32"
                        animation="wave"
                      />
                    )}
                    <img
                      src={story.imageSrc}
                      alt={story.alt}
                      className="w-full h-32 object-cover"
                      onLoad={() => handleImageLoad(story.id)}
                      style={{
                        display: imageLoaded[story.id] ? "block" : "none",
                      }}
                    />
                    <div className="p-3 flex flex-col">
                      <h3 className="text-base font-semibold poppins text-[#2E2F33] mb-2">
                        {story.title}
                      </h3>
                      <p className="text-[#5F6980] poppins text-sm mb-4 flex-grow">
                        {story.description}
                      </p>
                      <div className="flex items-center justify-between text-gray-500 text-xs">
                        <Link
                          to={`/posts/${story.slug}`} // Fixed: Use story.slug instead of slug
                          className="text-blue-500 font-semibold hover:underline"
                        >
                          View More
                        </Link>
                        <span className="text-[#333333] opacity-50 poppins">
                          {story.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <Contact2 />
      <Footer2 />
    </div>
  );
};

export default BlogPage;
