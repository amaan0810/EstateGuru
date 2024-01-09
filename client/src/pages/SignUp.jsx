import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Oauth from '../components/Oauth';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error,setError]=useState(null);
  const [loading ,setLoading]=useState(false);
  const navigate=useNavigate();


  const handleChange = (e) => {

    setFormData({
      ...formData, [e.target.id]: e.target.value,
    });

    console.log(formData);
  };

  const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
  
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if(data.success===false){
        setLoading(false);
        setError(data.message);
        console.log(data);
        return;
      }
      setLoading(false);
      console.log(data);
      setError(null);
      navigate('/signin')
    }catch (error){
      setLoading(false);
      setError(error.message);
    }
     
  }

  return (
    <div className='p-3 mx-auto max-w-lg '>
      <h1 className='my-7 text-3xl text-center font-semibold '>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input placeholder='username' id='username' type="text"
          className='border p-3 rounded-lg' onChange={handleChange} />
        <input placeholder='email' id='email' type="email"
          className='border p-3 rounded-lg' onChange={handleChange} />
        <input placeholder='password' id='password' type='password'
          className='border p-3 rounded-lg' onChange={handleChange} />

        <button disabled={loading} className='bg-blue-900 text-white p-3 uppercase font-semibold rounded-lg hover:opacity-95 disabled:opacity-70'>
          {loading ? 'Loading...' : 'Sign Up'}
          </button>
       <Oauth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ? </p>
        <Link to={'/signin'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5 font-medium'>{error}</p>}
    </div>
  )
}
