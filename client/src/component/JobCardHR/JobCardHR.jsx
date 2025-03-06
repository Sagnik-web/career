import React from 'react'
import { useHistory } from 'react-router-dom'
import JobStatusUpdate from '../JobStatusUpdate/JobStatusUpdate'

function JobCardHR({data, onDelete}) {

  const history = useHistory()

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2 text-left">{data?.title}</td>
      <td className="px-4 py-2 text-left max-w-lg">{data.description}</td>
      <td className="px-4 py-2 text-left">{new Date(data.createdAt).toLocaleString()}</td>
      <td className="px-4 py-2 text-left max-w-lg">{data.status}</td>
      <td className="px-4 py-2 text-center">
      <button
          onClick={() => history.push(`/hr/job_application/${data._id}`)}
          className="text-green-500 hover:text-green-700 px-2 py-1 text-sm font-medium"
        >
          View Application
        </button>
        <div className=' inline-block'>
          <JobStatusUpdate id={data._id}/>
        </div>
        <button
          onClick={() => onDelete(data._id)}
          className="text-red-500 hover:text-red-700 px-2 py-1 text-sm font-medium ml-2"
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default JobCardHR