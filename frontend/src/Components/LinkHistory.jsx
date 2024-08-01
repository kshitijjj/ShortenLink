import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar2 from './Navbar2';
import axios from 'axios';
import { useScrollTrigger } from '@mui/material';


// Define columns without type annotations



const LinkHistory = () => {
    const [rows,setrows]=useState([
        {
        id:"",
        inputUrl:"",
        shortenUrl:"",
        clicks:"",
        createdAt:""
    }
]);
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'inputUrl', headerName: 'Input URL',type:'string',width:500  },
        { field: 'shortenUrl', headerName: 'Shorten URL',type: 'string',width:300},
        { field: 'clicks', headerName: 'Clicks', type: 'string', width: 250 },
        { field: 'createdAt', headerName: 'CreatedAt', type: 'string', width: 200 }
        /* { field: 'ExpiresAt', headerName: 'ExpireAt', type: 'date', width: 110 } */
      ];
    
    useEffect(()=>{
        const fetchdata=async()=>{
            const token=localStorage.getItem('token');
            if(token){
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            const res=await axios.get("http://localhost:3001/shortenlink/history",config);
            console.log("data is:",res.data[0].inputUrl); 

            if(Array.isArray(res.data)){
            const formattedRows = res.data.map((item, index) => ({
                id: index + 1, // Ensure unique IDs
                inputUrl: item.inputUrl,
                shortenUrl: item.shortenUrl,
                createdAt: item.createdAt,
                clicks: item.clicks,
            }));

            setrows(formattedRows);
        }
            } catch (error) {
                console.log(error);
            }
        }
        }
        fetchdata()
    },[])
    
      /* const rowss = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
        { id: 6, lastName: 'Melisandre', firstName: 'Saul', age: 28 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rowe', age: 36 },
      ]; */
      
  return (
    <>
    <Navbar2/>
    <div className='h-[40rem] w-full m-auto p-[3rem] font-bold'>
      <DataGrid rows={rows} columns={columns} pageSize={5} style={{font:"bold"}} />
    </div>
    </>
  );
};

export default LinkHistory;
