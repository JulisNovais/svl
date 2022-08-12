import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default function BookTable() {

  let [posts, setPosts] = useState([])

  const columns = [
    {
      dataField: 'id',
      text: 'Id'
    } , {
      dataField: 'title',
      text: 'Titulo'
    } , {
      dataField: 'body',
      text: 'Texto'
    }
  ]

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log('posts' , data)
      setPosts (data)
    })
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <BootstrapTable keyField="id" data={posts} columns={columns} />
    </div>
  );
}
