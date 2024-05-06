import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/kujjwal-dev')
    //     .then(response => response.json())
    //     .then(data => {
    //          console.log(data);
    //          setData(data);
    //      })

    // },[]);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col gap-10'>
       <p>Name: {data.name}</p> 

    <img className='place-self-center ' src= {data.avatar_url} alt='Git Picture' width={300} />

        <a href={data.repos_url} className='place-self-center'>Repositories</a>
    
     </div>
  )
}

export default Github

export const githubInfoLoader = async (data) => {
    const response = await fetch('https://api.github.com/users/kujjwal-dev');
    return response.json();
};