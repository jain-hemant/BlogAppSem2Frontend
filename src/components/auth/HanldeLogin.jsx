import {useSelector} from 'react-redux';
import { selectUser } from '../../app/auth/authslice';
import policies, { ROLES } from '../../policies/policies';

export default function HanldeLogin({policy, yes, no}) {
    const user = useSelector(selectUser)
    
    const userRole = user?.role || ROLES.GUEST;
    const isAllowed = policies[userRole].includes(policy);
    console.log(userRole);
    if(isAllowed){
        return yes()
    }else {
        return no()
    }
}










