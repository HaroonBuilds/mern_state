import {useSelector} from 'react-redux';
import { useEffect, useRef, useState } from 'react';
export default function Profile() {
  const fileRef = useRef(null);
  const [file,setFile] = useState(undefined);
  const [formData,setFormData] = useState({});
  const [uploadError,setUploadError] = useState(false)
  const {currentUser} = useSelector((state) => state.user);
  useEffect(()=>{
    if(file){
      handleFileUpload(file)
    }
  },[file])

  const handleFileUpload = async (uploadFile) => {
  const formPayload = new FormData();
  formPayload.append('file', uploadFile);
  formPayload.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

  try {
    setUploadError(false);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formPayload }
    );
    const result = await res.json();

    if (!res.ok || result.error) {
      console.log(result.error?.message);
      setUploadError(true);
      return;
    }

    setFormData({ ...formData, avatar: result.secure_url });
    console.log('successful upload', result.secure_url);
  } catch (error) {
    console.log(error);
    setUploadError(true);
  }

  
};
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/>
        <img
          onClick={()=> fileRef.current.click()}
          src={currentUser.avatar}
          alt="Profile"
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <p className='text-sm self-center'>{uploadError && <span className='text-red-700 self-center'>Error image upload</span>}</p>
        <input
          type="text"
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg'
        />
        <input
          type="email"
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
        />
        <input
          type="text"
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button className='bg-slate-700 text-white rounded-full 
        p-3 uppercase hover:opacity-95 disabled:opacity-80' >update  </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}