
import { FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-white shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-blue-500'>Estate</span>
          <span className='text-blue-900'>Guru</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input className='bg-transparent focus:outline-none w-24 sm:w-64' type='text' placeholder='Search...' />
          <FaSearch className='text-blue-900' />
        </form>
        <ul className='flex gap-4 font-medium'>
          <Link to="/"><li className='hidden sm:inline text-blue-500 hover:underline'>Home</li></Link>
          <Link to='/about'><li className='hidden sm:inline text-blue-500 hover:underline'>About</li></Link>
          <Link to='/signin'><li className=' sm:inline text-blue-500 hover:underline'>Sign  in</li></Link>
        </ul>
      </div>
    </header>
  )
}
