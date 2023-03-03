
import React, { useContext, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { AppContext } from '../Context';
 import Home from '../Home';
const Searching = () => {
   const [myOptions, setMyOptions] = useState([])
   let {state,dispatch}=useContext(AppContext)
   let {product}=state
  
        let fetchData=()=>{
          // let uniqueItems = [...new Set (filteredDatas.map((item)=>{return item.title}))];
            try {

               for (var i = 0; i < product.length; i++) {
                myOptions.push(product[i].title)
                
                      }
                      setMyOptions(myOptions)
            } catch (error) {
                console.log('error')
            }
        }
const handlesearch=(txt)=>{

  fetchData()
dispatch({
  type:'filterdata',
  payload:txt
})
}

  return (
  <>
      
      <Autocomplete
        style={{ width: 510,backgroundColor:'white',borderRadius:'5px',height:'30px' }}
        options={myOptions}
        renderInput={(params) => (
          <TextField style={{width:'490px',marginLeft:'10px'}} {...params}
            onChange={(e)=>handlesearch(e.target.value)}
            placeholder="Search..."
          />
        )}
      />

</>
 
  );
}
 
export default Searching