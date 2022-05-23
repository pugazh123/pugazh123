import React,  {useState, useEffect } from 'react'
import axios from 'axios'

function DataSearch() {
    const [posts, setPosts]=useState({})
    const [id,setId] = useState(0);

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
                console.log(response)
                setPosts(response.data)
            })
            .catch( error => {
                console.log(error)
            })
    })
  return (
    <div>
        <input type="text" value={id} onChange={event => setId(event.target.value)} /><br />
        {posts.title}
        
    </div>
  )}
  export default DataSearch