import { useSelector, useDispatch } from 'react-redux';
import { useRef, useState, useEffect } from "react";
import { app } from "../firebase";
import {Link} from "react-router-dom"
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice";

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess,setUpdateSucess]=useState(false);
  const dispatch=useDispatch();

  console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handelSubmit =async (e) => {
    e.preventDefault();
    try {

      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"

        },
        body: JSON.stringify(formData)
      });

      const data=await res.json();
      if(data.success === false){
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSucess(true);

    } catch (error) {
        dispatch(updateUserFailure(error.message));
    }
  };


  const handleDeleteUser= async()=>{
    try{

      dispatch((deleteUserStart()));
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      });
      const data=res.json();
      if(data.success === false){
        dispatch(deleteUserFailure(data.message));
        return;
      }

      dispatch(deleteUserSuccess(data));
      
     
    }catch(error){
      dispatch(deleteUserFailure(error.message));
    }

  }


  const handleSignOut=async()=>{

    try{
      dispatch(signOutUserStart());
      const res=await fetch('/api/auth/signout')
      const data=await res.json();
      if(data.success=== false){
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
    }catch(error){
      dispatch(signOutUserFailure(error.message));
    }

  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Profile</h1>
      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cusrsor-pointer self-center mt-2"
          src={formData.avatar || currentUser.avatar}
          alt="profile"
        />

        <p className="text-sm font-semibold self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          className="border p-3 rounded-lg "
          type="text"
          defaultValue={currentUser.username}
          placeholder="username"
          id="username"
          onChange={handelChange}
        />
        <input
          className="border p-3 rounded-lg "
          type="text"
          defaultValue={currentUser.email}
          placeholder="email"
          id="email"
          onChange={handelChange}
        />
        <input
          className="border p-3 rounded-lg "
          type="password"
          defaultValue={currentUser.password}
          placeholder="password"
          id="password"
          onChange={handelChange}
        />
        <button disabled={loading} className="bg-blue-900  text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80">
        {loading ? 'Loading...' : 'Update'}
        </button>
        <Link className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95' to={'/create-listing'}>
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteUser} className="text-red-500 cursor-auto font-medium">
          Delete Account
        </span>
        <span  onClick={handleSignOut} className="text-red-500 cursor-auto font-medium">Sign out</span>
      </div>
      {error && <p className='text-red-500 mt-5 font-medium'>{error}</p>}
      <p className='text-green-700 mt-5 font-medium'>{updateSuccess ? 'User Is Updated Sucessfully' : ''}</p>
    </div>
  );
}
