import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
  
    useEffect(()=>{
      axios.get(url)
      .then(data => {
        setData(data.data)
      })
      .catch(error => console.log('Something went wrong : ', error))
    }, [])
    return data;
}

export default useFetch