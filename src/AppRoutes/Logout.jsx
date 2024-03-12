import  { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { logOut } from '../app/auth/authslice';

export default function Logout() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(logOut());
    }, [dispatch])

  return null;
}
