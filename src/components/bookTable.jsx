import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

export default function bookTable() {
    const columns = [{
        dataField: 'id',
        text: 'Product ID'
      }, {
        dataField: 'name',
        text: 'Product Name'
      }, {
        dataField: 'price',
        text: 'Product Price'
      }];

      const products = [{

      }]

  return (
    <div><BootstrapTablepTable keyField='id' data={ products } columns={ columns } />
    </div>
    
  )
}
