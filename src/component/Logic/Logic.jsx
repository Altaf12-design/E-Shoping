
import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
 
const Logic = () => {
 
  const [myOptions, setMyOptions] = useState([])
 
//   const getDataFromAPI = () => {
//     console.log("Options Fetched from API")
 
//     fetch('https://api.escuelajs.co/api/v1/products').then((response) => {
//       return response.json()
//     }).then((res) => {
//       console.log(res)
//       for (var i = 0; i < res.data.length; i++) {
//         myOptions.push(res.data[i].title)
//       }
//       setMyOptions(myOptions)
//     })
//   }
useEffect(()=>{
    fetchApi()
},[])
        const fetchApi=async ()=>{
            try {
                let responce=await fetch('https://api.escuelajs.co/api/v1/products');
                let data=await responce.json()
            //    console.log(data) 
               for (var i = 0; i < data.length; i++) {
                myOptions.push(data[i].title)
                      }
                      setMyOptions(myOptions)
            } catch (error) {
                console.log('error')
            }
        }
  return (
    <div style={{ width:'500px' }}>
      
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={fetchApi}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}
 
export default Logic