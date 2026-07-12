import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Oauth from "../components/Oauth";
import SignIn from "./SignIn";

function SignUp() {
  const [formData,setData] = useState({});
  const[error,setError] = useState(null)
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
        body:JSON.stringify(formData)
    })
    const data = await res.json();
    navigate('/')
    if(data.success == false){
      setLoading(false)
      setError(data.message);
      return;
    }
    setLoading(false)
    setError(null)
   
    } catch (error) {
      console.log("fetch api is not working")
      console.log(error)
    }
    
     
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
      <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' onChange={handleChange}
        className='border p-3 rounded-lg' id="username"/>
        <input type="email" placeholder='email' onChange={handleChange}
        className='border p-3 rounded-lg' id="email"/>
        <input type="password" placeholder='password' onChange={handleChange}
        className='border p-3 rounded-lg' id="password"/>
        <button disabled= {loading} className='bg-slate-700 text-white p-3 rounded-lg
        uppercase hover:opacity-90 disabled:opacity-80' >{loading ? 'Loading...':'SignUp'} </button>
        <Oauth/>
      </form>
      <div className="flex gap-2 mt-5">
       <p>Have an account</p>
       <Link to="/signin">
          <span className="text-blue-700">signIn</span>
       </Link>
      </div>
      {error && <p className="text-red-500  mt-5">{error}</p>}
    </div>
  )
}

export default SignUp