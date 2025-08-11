// PageList.jsx
import React, { useState } from 'react';
import { Edit2, Eye, X, CornerDownRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageList = () => {
  const [pages, setPages] = useState([
    { title: 'About NGeoGle', author: 'admin', date: '2021/01/12 at 8:43 am' },
    { title: 'Corporate Sales', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Travel Agents', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Terms and Condition', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Privacy Page', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Chartered Sales', author: '', date: '2021/01/12 at 8:43 am' },
    { title: 'Cargo Pages', author: '', date: '2021/01/12 at 8:43 am' },
  ]);

  const [newTitle, setNewTitle] = useState('');

  const handleCreatePage = (e) => {
    e.preventDefault();
    if (newTitle.trim() === '') return;

    const newPage = {
      title: newTitle,
      author: '',
      date: new Date().toLocaleDateString('en-CA') + ' at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setPages([...pages, newPage]);
    setNewTitle('');
  };

  const handleDeletePage = (indexToDelete) => {
    setPages(pages.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-full bg-gray-100 pt-15 p-4 sm:p-6 lg:p-10">
      {/* Top Section */}
      <div className="flex flex-col p-6 bg-white rounded-lg sm:border-r-6 sm:border-r-[#C5AC8E] sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-[#C5AC8E] mx-auto sm:mx-0"></div>
        <form onSubmit={handleCreatePage} className="flex flex-col sm:flex-row justify-between items-center w-full gap-4">
          <input
            className="text-[22px] sm:text-[20px] p-2 outline-none font-semibold text-[#767272] w-full"
            placeholder="Add a new page"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#C5AC8E] text-[15px] text-white cursor-pointer py-2 px-4 rounded-lg w-full sm:w-auto"
          >
            Create Now
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="flex mt-15 mb-1 w-full">
        <div className="h-[30px] sm:h-[60px] bg-[#2C473A] w-1/2"></div>
        <div className="h-[30px] sm:h-[60px] bg-black w-1/2"></div>
      </div>

      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="min-w-[800px] w-full text-left">
          <thead className="bg-white text-[#2B2D42] text-lg font-light">
            <tr>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap"></th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap">Type</th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap">Title</th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap"></th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap"></th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap">Author</th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap">Published Date</th>
              <th className="p-3 font-light sm:p-4 whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            {pages.map((page, index) => (
              <tr key={index} className="bg-white shadow-sm hover:bg-gray-100">
                <td className="py-3 border-gray-100 border-y-3 text-[#2B2D42] sm:py-4 text-center bg-gray-100 w-[60px] whitespace-nowrap">
                  <CornerDownRightIcon className="text-center w-full text-[#D9D9D9]" />
                </td>
                <td className="p-3 border-gray-100 border-y-7 text-[#2B2D42] font-bold sm:p-4 whitespace-nowrap">
                  Select
                </td>
                <td className="p-3 border-gray-100 border-y-7 text-[#2B2D42] font-light sm:p-4 border-x-3 whitespace-nowrap">
                  {page.title}
                </td>
                <td className="p-3 border-gray-100 w-[150px] border-y-7 text-blue-600 font-light sm:p-4 border-x-3 whitespace-nowrap">
                  <div className="flex flex-row justify-center gap-x-2 items-center gap-2">
                    <Eye size={16} /> <p>View</p>
                  </div>
                </td>
                <td className="p-3 border-gray-100 w-[150px] border-y-7 text-green-600 font-light sm:p-4 border-x-3 whitespace-nowrap">
                  <Link to={`/dashboard/pages/edit/${index}`} className="flex flex-row justify-center gap-x-2 items-center gap-2">
                    <Edit2 size={16} />
                    <p>Edit</p>
                  </Link>
                </td>
                <td className="p-3 border-gray-100 border-y-7 text-[#2B2D42] border-x-3 font-light sm:p-4 whitespace-nowrap">
                  {page.author}
                </td>
                <td className="p-3 border-gray-100 border-y-7 text-[#2B2D42] font-light sm:p-4 whitespace-nowrap w-[200px]">
                  {page.date}
                </td>
                <td className="py-3 border-gray-100 border-y-7 text-[#2B2D42] sm:py-4 items-center">
                  <button
                    onClick={() => handleDeletePage(index)}
                    className="text-red-500 hover:underline flex items-center gap-1"
                  >
                    <X size={24} className="text-white rounded-full p-1 cursor-pointer bg-[#C5AC8E]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageList;