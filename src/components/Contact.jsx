import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "lucide-react";
import { SiX } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  // Add loading state
  const [isLoading, setIsLoading] = useState(false);

  const subjects = [
    { id: "general", label: "General Inquiry" },
    { id: "program", label: "Program Inquiry" },
    { id: "feedback", label: "Feedback & Suggestions" },
    { id: "payment", label: "Report Payment" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when submission starts
    try {
      const res = await fetch("https://ems-backend-qif8.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "general",
          message: "",
          
        });
        navigate("/submit");
      } else {
        toast.error(data.message || "Message not sent");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after completion
    }
  };

  return (
    <div className="py-10 md:pb-30 lg:px-18 md:px-12 px-6 p">
      {/* Heading */}
      <div className="w-full mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl text-[#c5ac8e] poppins font-bold">
          Contact Us
        </h2>
        <p className=" mt-2 text-[#717171] poppins font-medium text-sm md:text-base">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full mx-auto bg-white rounded-xl p-1.5 shadow-lg flex flex-col md:flex-row">
        {/* Left Panel */}
        <div className="bg-[#8C6239] text-white flex flex-col justify-between rounded-xl md:w-2/5 px-8 py-12">
          <div>
            <h3 className="text-xl md:text-[28px] poppins font-semibold">
              Contact Information
            </h3>
          </div>
          <ul className="space-y-10 mt-6">
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-4" />
              <span className="text-[#E5E5E5] poppins">
                (+234) 704 840 6083
              </span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-4" />
              <span className="text-[#E5E5E5] poppins break-all">
                info@etiquettemanagementschool.com
              </span>
            </li>
            <li className="flex items-center">
              <MapPin className="w-5 h-5 mr-4" />
              <span className="text-[#E5E5E5] poppins">
                Area 11, Garki, Abuja.
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-12">
            <a
              href="https://www.instagram.com/EMS_Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D09B66] rounded-full text-[#333333] hover:bg-white cursor-pointer"
            >
              <InstagramIcon className="w-10 h-10 p-2" />
            </a>
            <a
              href="https://x.com/EMS_Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D09B66] rounded-full text-[#333333] hover:bg-white cursor-pointer"
            >
              <SiX className="w-10 h-10 p-2" />
            </a>
            <a
              href="#"
              className="bg-[#D09B66] rounded-full text-[#333333] hover:bg-white cursor-pointer"
            >
              <FaFacebookF className="w-10 h-10 p-2" />
            </a>
            <a
              href="#"
              className="bg-[#D09B66] rounded-full text-[#333333] hover:bg-white cursor-pointer"
            >
              <LinkedinIcon className="w-10 h-10 p-2" />
            </a>
          </div>
        </div>

        {/* Right Panel */}
        <form
          onSubmit={handleSubmit}
          className="md:w-3/5 md:p-14 p-6 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-normal poppins text-[#333333] mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                placeholder="Add your first name"
                className="w-full border-b border-gray-300 focus:outline-none pb-1"
              />
            </div>
            <div>
              <label className="block text-sm font-normal poppins text-[#333333] mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                placeholder="Add your last name"
                className="w-full border-b border-gray-300 focus:outline-none pb-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-normal poppins text-[#333333] mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Add your email"
                className="w-full border-b border-gray-300 focus:outline-none pb-1"
              />
            </div>
            <div>
              <label className="block text-sm font-normal poppins text-[#333333] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Add your phone number"
                className="w-full border-b border-gray-300 focus:outline-none pb-1"
              />
            </div>
          </div>

          <div>
            <p className="text-black poppin font-semibold text-sm mb-2">
              Select Subject?
            </p>
            <div className="flex flex-wrap gap-6 w-full">
              {subjects.map((s) => (
                <label key={s.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="subject"
                    value={s.id}
                    checked={form.subject === s.id}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span
                    className={`w-3 h-3 mr-2 rounded-full border ${
                      form.subject === s.id
                        ? "border-[#19392c] bg-[#19392c]"
                        : "border-gray-400"
                    }`}
                  ></span>
                  <span className="text-[#333333] poppins">{s.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-base font-medium text-[#8D8D8D] mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Write your message..."
              className="w-full border-b border-gray-300 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading} // Disable button while loading
              className={`px-6 py-2 rounded-lg flex items-center justify-center ${
                isLoading
                  ? "bg-[#19392c]/70 cursor-not-allowed"
                  : "bg-[#19392c] hover:opacity-90"
              } text-white`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
