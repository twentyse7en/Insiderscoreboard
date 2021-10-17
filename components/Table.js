import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';


export default function Table({ rows, type, loading }) {

  const columns = [
    {
        name: 'Stock',
        selector: row => row[0],
        sortable: true,
    },
    {
        name: 'Buy',
        selector: row => row[1],
        sortable: true,
        right: true,
    },
    {
      name: 'Sell',
      selector: row => row[2],
      sortable: true,
      right: true,
    },
    {
      name: 'Diff',
      selector: row => row[3],
      sortable: true,
      right: true,
      style: {
        color: type === "buy" ? '#28a745' : '#cb0505',
      }
    }
  ];

  const customStyles = {
    head: {
      style: {
        fontSize: '16px',
        color: '#fff',
        fontWeight: '700'
      }
    },
    headRow: {
      style: {
        backgroundColor: type === "buy" ? '#28a745' : '#cb0505',
      }
    }
  };

  return (
    <DataTable columns={columns} data={rows} customStyles={customStyles} striped={true} progressPending={loading}/>
  );
}
