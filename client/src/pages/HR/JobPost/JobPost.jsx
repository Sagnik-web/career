import React, {useState} from 'react'


function JobPost() {
    // State to store form data
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Here, you can process the form data (e.g., send it to a backend)
  console.log('Job Title:', title);
  console.log('Job Description:', description);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Post a Job</h2>

        <form onSubmit={handleSubmit}>
          {/* Job Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Job Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="6"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default JobPost