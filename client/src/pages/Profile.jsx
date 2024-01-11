import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser}=useSelector((state)=> state.user);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='rounded-full h-24 w-24 object-cover cusrsor-pointer self-center mt-2'
        src={currentUser.avatar} alt='profile'/>
        <input className='border p-3 rounded-lg ' type='text' placeholder='username' id='username'/>
        <input className='border p-3 rounded-lg ' type='text' placeholder='email' id='email'/>
        <input className='border p-3 rounded-lg ' type='text' placeholder='password' id='password'/>
        <button className='bg-blue-900  text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-500 cursor-auto font-medium'>Delete Account</span>
        <span className='text-red-500 cursor-auto font-medium'>Sign out</span>
      </div>
      </div>
  )
}
