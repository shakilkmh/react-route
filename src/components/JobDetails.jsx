import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {
  // const{id}=useParams();

  const JobDetails = useLoaderData();
  return (
    <div className='job-details' >
      <p><b>Job Title:</b>{JobDetails.title}</p>
      <p><b>Salary:</b>{JobDetails.salary}</p>
      <p><b>Job Location:</b>{JobDetails.locaction}</p>
      <p><b>Salary:</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ratione sit doloremque aperiam, architecto culpa est cum at excepturi rem, quae quibusdam impedit suscipit quo quis. Dolore nam debitis natus?</p>
      <button>Apply Now</button>
    </div>
           
  )
}

export default JobDetails

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/ " + id)
  return res.json;
}