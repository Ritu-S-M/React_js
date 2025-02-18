import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>
      Github : {data.followers}
      <img src={data.avatar_url} width={200} alt="" />
      <p>Current Streak : 3 days</p>
      </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
  const res = await fetch('https://api.github.com/users/Ritu-S-M')
  return res.json()
}