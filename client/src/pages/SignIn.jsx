import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFaliure } from '../redux/user/userSlice';
import Oauth from '../components/Oauth';
export default function SignIn() {

  const [formData, setFormData] = useState({});


  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleChange = (e) => {

    setFormData({
      ...formData, [e.target.id]: e.target.value,
    });

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      dispatch(signInStart());
      const response = await fetch('/api/auth/signin', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"

        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success === false) {


        dispatch(signInFaliure(data.message));

        console.log(data);
        return;
      }

      console.log(data);

      dispatch(signInSuccess(data));

      navigate('/')
    } catch (error) {
      dispatch(signInFaliure(error.message));
    }

  }

  return (
    <div className='p-3 mx-auto max-w-lg '>
      <h1 className='my-7 text-3xl text-center font-semibold '>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input placeholder='email' id='email' type="email"
          className='border p-3 rounded-lg' onChange={handleChange} />
        <input placeholder='password' id='password' type='password'
          className='border p-3 rounded-lg' onChange={handleChange} />

        <button disabled={loading} className='bg-blue-900 text-white p-3 uppercase font-semibold rounded-lg hover:opacity-95 disabled:opacity-70'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
       <Oauth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account ? </p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5 font-medium'>{error}</p>}
    </div>
  )
}
