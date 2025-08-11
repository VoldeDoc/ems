import React, { useState } from 'react'; // Added React import
import { ChevronRightIcon, ChevronDownIcon, FilePlus, X } from 'lucide-react';

const MonitorContent = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Lifestyle', subcategories: [] },
    { id: 2, name: 'Insurance', subcategories: [] },
    { id: 3, name: 'Health', subcategories: [] },
  ]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubcategoryModal, setShowAddSubcategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({}); // Track which categories are expanded

  const addCategory = () => {
    if (newCategory.trim() === '') return;

    const newEntry = {
      id: categories.length + 1,
      name: newCategory.trim(),
      subcategories: [],
    };
    setCategories([...categories, newEntry]);
    setNewCategory('');
    setShowAddCategoryModal(false);
  };

  const addSubcategory = () => {
    if (newSubcategory.trim() === '' || !selectedCategoryId) return;

    const updatedCategories = categories.map((cat) => {
      if (cat.id === selectedCategoryId) {
        return {
          ...cat,
          subcategories: [
            ...cat.subcategories,
            { id: cat.subcategories.length + 1, name: newSubcategory.trim() },
          ],
        };
      }
      return cat;
    });
    setCategories(updatedCategories);
    setNewSubcategory('');
    setShowAddSubcategoryModal(false);
    setSelectedCategoryId(null);
  };

  const editCategory = () => {
    if (editCategoryName.trim() === '' || !selectedCategoryId) return;

    const updatedCategories = categories.map((cat) => {
      if (cat.id === selectedCategoryId) {
        return { ...cat, name: editCategoryName.trim() };
      }
      return cat;
    });
    setCategories(updatedCategories);
    setEditCategoryName('');
    setShowEditCategoryModal(false);
    setSelectedCategoryId(null);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
    setExpandedCategories((prev) => {
      const newExpanded = { ...prev };
      delete newExpanded[id];
      return newExpanded;
    });
  };

  const toggleSubcategories = (id) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="px-4 py-6 sm:px-8">
      <div className="p-4 bg-white rounded-xl shadow sm:p-6">
        <div className="flex flex-col justify-between items-start mb-4 sm:flex-row sm:items-center">
          <h2 className="text-xl font-semibold text-[#252B42] sm:text-2xl">Blog Categories</h2>
          <button
            onClick={() => setShowAddCategoryModal(true)}
            className="mt-2 bg-[#2C473A] text-white cursor-pointer px-4 py-2 rounded-sm hover:bg-green-700 sm:mt-0"
          >
            + Add Category
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-green-50 rounded overflow-hidden">
            <thead className="bg-[#10172B] text-white font-medium text-sm sm:text-base text-left">
              <tr>
                <th className="px-2 py-2 w-8 sm:px-4 sm:w-12"></th>
                <th className="px-2 py-2 sm:px-4">ID</th>
                <th className="px-2 py-2 sm:px-4">Name</th>
                <th className="px-4 py-2 text-right sm:px-8">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <React.Fragment key={cat.id}>
                  <tr className="border-b">
                    <td className="px-2 py-2 w-8 text-[#060a18b9] sm:px-4 sm:w-12">
                      <button onClick={() => toggleSubcategories(cat.id)}>
                        {expandedCategories[cat.id] ? (
                          <ChevronDownIcon className="cursor-pointer w-5 h-5" />
                        ) : (
                          <ChevronRightIcon className="cursor-pointer w-5 h-5" />
                        )}
                      </button>
                    </td>
                    <td className="px-2 py-2 text-sm sm:px-4 sm:text-base">{cat.id}</td>
                    <td className="px-2 py-2 font-medium text-sm sm:px-4 sm:text-base">{cat.name}</td>
                    <td className="px-4 py-2 flex gap-x-2 sm:gap-y-0 cursor-pointer text-right justify-end text-base sm:text-lg">
                      <button
                        onClick={() => {
                          setSelectedCategoryId(cat.id);
                          setShowAddSubcategoryModal(true);
                        }}
                        className="text-green-600 hover:scale-110"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCategoryId(cat.id);
                          setEditCategoryName(cat.name);
                          setShowEditCategoryModal(true);
                        }}
                        className="text-purple-600 hover:scale-110"
                      >
                        ✎
                      </button>
                      <button
                        onClick={() => deleteCategory(cat.id)}
                        className="text-red-600 hover:scale-110"
                      >
                        🗑
                      </button>
                    </td>
                  </tr>
                  {expandedCategories[cat.id] &&
                    cat.subcategories.map((subcat) => (
                      <tr key={`${cat.id}-${subcat.id}`} className="border-b bg-green-25">
                        <td className="px-2 py-2 pl-6 w-8 sm:px-4 sm:pl-8 sm:w-12"></td>
                        <td className="px-2 py-2 text-sm sm:px-4 sm:text-base">{`${cat.id}.${subcat.id}`}</td>
                        <td className="px-2 py-2 text-sm sm:px-4 sm:text-base">{subcat.name}</td>
                        <td className="px-4 py-2 sm:px-8"></td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Category Modal */}
        {showAddCategoryModal && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
            <div className="bg-white relative p-4 rounded shadow-md w-[90%] max-w-md sm:p-6">
              <h3 className="text-lg font-semibold mb-4 pb-4 border-b border-b-[#060a1860] sm:text-xl">
                Create New Category
              </h3>
              <h3 className="text-sm font-medium pb-2 text-[#060a18b9] sm:text-base">Category name*</h3>
              <input
                type="text"
                placeholder="Enter category name"
                className="w-full border rounded px-3 py-2 mb-4 text-sm sm:text-base"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  onClick={() => setShowAddCategoryModal(false)}
                  className="px-4 py-2 border rounded cursor-pointer text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={addCategory}
                  className="bg-[#2C473A] cursor-pointer hover:bg-green-600 flex items-center gap-x-2 text-white px-4 py-2 rounded text-sm sm:text-base"
                >
                  <FilePlus className="w-4 h-4" />
                  Create
                </button>
                <button
                  className="absolute cursor-pointer top-4 right-4 text-[#060a1860] hover:text-[#060a18] text-xl sm:top-6 sm:right-4"
                  onClick={() => setShowAddCategoryModal(false)}
                >
                  <X className="font-light" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Subcategory Modal */}
        {showAddSubcategoryModal && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
            <div className="bg-white relative p-4 rounded shadow-md w-[90%] max-w-md sm:p-6">
              <h3 className="text-lg font-semibold mb-4 pb-4 border-b border-b-[#060a1860] sm:text-xl">
                Add Subcategory
              </h3>
              <div className="mb-4">
                <h3 className="text-sm font-medium pb-2 text-[#060a18b9] sm:text-base">Parent Category</h3>
                <input
                  type="text"
                  value={categories.find((cat) => cat.id === selectedCategoryId)?.name || ''}
                  disabled
                  className="w-full border rounded px-3 py-2 bg-gray-100 text-sm sm:text-base"
                />
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-medium pb-2 text-[#060a18b9] sm:text-base">Subcategory name*</h3>
                <input
                  type="text"
                  placeholder="Enter subcategory name"
                  className="w-full border rounded px-3 py-2 text-sm sm:text-base"
                  value={newSubcategory}
                  onChange={(e) => setNewSubcategory(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  onClick={() => {
                    setShowAddSubcategoryModal(false);
                    setSelectedCategoryId(null);
                    setNewSubcategory('');
                  }}
                  className="px-4 py-2 border rounded cursor-pointer text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={addSubcategory}
                  className="bg-[#2C473A] cursor-pointer hover:bg-green-600 flex items-center gap-x-2 text-white px-4 py-2 rounded text-sm sm:text-base"
                >
                  <FilePlus className="w-4 h-4" />
                  Create
                </button>
                <button
                  className="absolute cursor-pointer top-4 right-4 text-[#060a1860] hover:text-[#060a18] text-xl sm:top-6 sm:right-4"
                  onClick={() => {
                    setShowAddSubcategoryModal(false);
                    setSelectedCategoryId(null);
                    setNewSubcategory('');
                  }}
                >
                  <X className="font-light" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Category Modal */}
        {showEditCategoryModal && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
            <div className="bg-white relative p-4 rounded shadow-md w-[90%] max-w-md sm:p-6">
              <h3 className="text-lg font-semibold mb-4 pb-4 border-b border-b-[#060a1860] sm:text-xl">
                Edit Category
              </h3>
              <h3 className="text-sm font-medium pb-2 text-[#060a18b9] sm:text-base">Category name*</h3>
              <input
                type="text"
                placeholder="Enter category name"
                className="w-full border rounded px-3 py-2 mb-4 text-sm sm:text-base"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  onClick={() => {
                    setShowEditCategoryModal(false);
                    setSelectedCategoryId(null);
                    setEditCategoryName('');
                  }}
                  className="px-4 py-2 border rounded cursor-pointer text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={editCategory}
                  className="bg-[#2C473A] cursor-pointer hover:bg-green-600 flex items-center gap-x-2 text-white px-4 py-2 rounded text-sm sm:text-base"
                >
                  <FilePlus className="w-4 h-4" />
                  Update
                </button>
                <button
                  className="absolute cursor-pointer top-4 right-4 text-[#060a1860] hover:text-[#060a18] text-xl sm:top-6 sm:right-4"
                  onClick={() => {
                    setShowEditCategoryModal(false);
                    setSelectedCategoryId(null);
                    setEditCategoryName('');
                  }}
                >
                  <X className="font-light" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonitorContent;