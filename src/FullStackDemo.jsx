import React from 'react'
import axios from 'axios';
import cors from 'cors';

export default function FullStackDemo() {
    const url = 'https://k-eep9.onrender.com/hello?name=paavan';
    axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  return (
    <div>
      <h1>Full Stack Demo</h1>
      <p>{response.data.message}</p>

    </div>
  )
}
