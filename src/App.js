
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
function App() {

  const handleSubmit=(e)=>{
    e.preventDefault();
   
    const data=new FormData(e.target)
    axios.post('https://testinghousepk.herokuapp.com/imageAdd',data)
    .then((res)=>{
      console.log(res.data)
    })
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} method="post" >
      <h1>this is my first website</h1>
      <input type="text" name="abc" placeholder='abc'/>
      <input placeholder='image' type="file" name="image"/>
      {/* <input placeholder='password'/> */}
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
