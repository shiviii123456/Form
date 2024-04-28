import { useState,useEffect } from "react"
import mock from './mock/mock.json'
const useFetch = ()=>{  
   const [blog,setBlog] = useState();
   
   useEffect(() => {
    setBlog(mock);
  }, []);

   return {blog}
}

export default useFetch