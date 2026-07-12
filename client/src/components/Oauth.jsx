import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase';
import { useDispatch } from 'react-redux';
import { signinSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
function Oauth() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleGooleclick = async()=>{
        
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider);
            const res = await fetch("api/auth/google",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(
                    {name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL})
            })
            const data = await res.json();
            dispatch(signinSuccess(data))
            navigate('/home')
        } catch (error) {
            console.log("could not sign it with google",error)
        }
    }
  return (
    <div type='button' className='bg-red-700 text-white text-center rounded-lg
    p-3 uppercase  hover:opacity-95' onClick={handleGooleclick}>continue with google</div>
  )
}

export default Oauth