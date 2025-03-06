import React from 'react'

function AppliedApplication({data,apply}) {
  return (
    <div className="mt-5 max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden" >
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{data.job.title}</h2>
      <p className="text-sm text-gray-500 mt-1">{data.job.description}</p>
      
      <div className="mt-4">
      Job Status:<span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 ml-2 rounded-full"> {data.job.status}</span>
      </div>

      <div className="mt-4">
        <span className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{data.status}</span>
      </div>
      
      <div className="mt-4 text-sm text-gray-400">
        {/* <p>HR: {data.hr}</p> */}
        <p>Application Date: {new Date(data.createdAt).toLocaleString()}</p>
      </div>
      {/* <button className=' cursor-pointer bg-blue-800 text-white px-5 py-2 mt-5' onClick={apply}>Applied</button> */}
    </div>
  </div>
  )
}

export default AppliedApplication