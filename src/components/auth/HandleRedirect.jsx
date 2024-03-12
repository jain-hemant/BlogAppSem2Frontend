import {useSelector} from 'react-redux';
import { selectIsAuth } from '../../app/auth/authslice';
import { Navigate} from 'react-router-dom'


export default function HandleRedirect() {
   const isAuthenticated = useSelector(selectIsAuth) 

   if(isAuthenticated){
     return <Navigate to="/" replace={true} />
   }else{
     return <Navigate to="/login" replace={true} />
   }
}
