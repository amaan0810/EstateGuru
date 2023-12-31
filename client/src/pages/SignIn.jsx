import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFaliure } from '../redux/user/userSlice';
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
        <button className="flex justify-center items-center uppercase p-3 bg-white border border-gray-300 rounded-lg shadow-md px-6  font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg className='h-6 w-6 mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Continue with Google</span>
        </button>
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
