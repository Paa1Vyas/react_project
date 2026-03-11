import React from 'react'
import axios from 'axios';

export default function FullStackDemo() {
    const url = 'http://localhost:3000/students';
    axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
  return (
    <div>

    </div>
  )
}
