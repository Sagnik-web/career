import React from 'react'
import StatusUpdatePopup from '../StatusUpdate/StatusUpdate'

function ApplicationCardRow({row, deleteApplication, editStatus}) {
  return (
    <tr  className="hover:bg-gray-50 ">
    <td className="p-5 border-b">{row.candidate.email}</td>
    <td className="p-5 border-b">{row.job.title}</td>
    <td className="p-5 border-b">{ new Date(row.createdAt).toLocaleString()    }</td>
    <td className="p-5 border-b">{row.status}</td>
    <td className="p-5 border-b">
      <a href={row.resume_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Resume Link
      </a>
    </td>
    {/* <td className="py-2 px-4 border-b">{row.status}</td> */}
    <td className="py-2 px-4 border-b">
      {/* <button
        onClick={editStatus}
        className="bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600"
      >
        Edit Status
      </button> */}
      <StatusUpdatePopup id={row._id}/>
      <button
        onClick={deleteApplication}
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </td>
  </tr>
  )
}

export default ApplicationCardRow