import React from 'react'
import { useHistory } from 'react-router-dom'

function JobCardHR({data, onEdit, onDelete}) {

  const history = useHistory()

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2 text-left">{data.title}</td>
      <td className="px-4 py-2 text-left max-w-lg">{data.description}</td>
      <td className="px-4 py-2 text-left">{new Date(data.createdAt).toLocaleString()}</td>
      <td className="px-4 py-2 text-center">
      <button
          onClick={() => history.push(`/hr/job_application/${data._id}`)}
          className="text-green-500 hover:text-green-700 px-2 py-1 text-sm font-medium"
        >
          View Application
        </button>
        <button
          onClick={() => onEdit(data)}
          className="text-blue-500 hover:text-blue-700 px-2 py-1 text-sm font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(data)}
          className="text-red-500 hover:text-red-700 px-2 py-1 text-sm font-medium ml-2"
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default JobCardHR