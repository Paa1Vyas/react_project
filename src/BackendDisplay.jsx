import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function BackendDisplay() {
    const url = "http://localhost:3000/displayuser";
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        let fetchData = async () => {
            try {
                const response = await axios.get(url);
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();

    },[]);
  return (
    <div>
        <h1>Users from Backend</h1>
        <ul>
            {users.map(user => {
                let return_data = "<table><tr><td>Name</td><td>Email</td><td>Status</td></tr><tr><td>" + user.name + "</td><td>" + user.email + "</td><td>" + (user.isActive ? "Active" : "Inactive") + "</td></tr></table>";
                return return_data;
            })}
        </ul>
    </div>
  )
}
