import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';


// export default function BookTable() {

//   let [posts, setPosts] = useState([])

//   const columns = [
//     {
//       dataField: 'id',
//       text: 'Id'
//     } , {
//       dataField: 'title',
//       text: 'Titulo'
//     } , {
//       dataField: 'body',
//       text: 'Texto'
//     }
//   ]

//   const getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//       console.log('posts' , data)
//       setPosts (data)
//     })
//   }

//   useEffect(() => {
//     getPosts();
//   }, [])

//   return (
//     <div>
//       <BootstrapTable keyField="id" data={posts} columns={columns}  />
//     </div>
//   );
// }

export default function BookTable() {

  let [comments, setComments] = useState([])

  const columns = [
    {
      dataField: 'id',
      text: 'Id'
    } , {
      dataField: 'name',
      text: 'Nome'
    } , {
      dataField: 'email',
      text: 'E-mail'
    } , {
      dataField: 'body',
      text: 'Texto'
    }
  ]

  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
      console.log('comments' , data)
      setComments (data)
    })
  }

  useEffect(() => {
    getComments();
  }, [])

  return (
    <div>
      <BootstrapTable keyField="id" data={comments} columns={columns} pagination={ paginationFactory() }  />
    </div>
  );
}
