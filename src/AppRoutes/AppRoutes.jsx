
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import HanldeLogin from '../components/auth/HanldeLogin';
import HandleRedirect from '../components/auth/HandleRedirect.jsx';
import Logout from './Logout.jsx';
import Category from './Admin/Category.jsx';
import Blogs from './Admin/Blogs.jsx';
import Users from './Admin/Users.jsx';
import Comments from './Admin/Comments.jsx';
import Profile from './Profile.jsx';
import SingleBlog from './SingleBlog.jsx';

export default function AppRoutes() {
  return <Routes>
    <Route path='/signup' element={<HanldeLogin policy={'signup:visit'} yes={()=><SignUp/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/admin/categories' element={<HanldeLogin policy={'categories:visit'} yes={()=><Category/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/admin/blogs' element={<HanldeLogin policy={'blogs:visit'} yes={()=><Blogs/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/admin/users' element={<HanldeLogin policy={'users:visit'} yes={()=><Users/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/admin/comments' element={<HanldeLogin policy={'comments:visit'} yes={()=><Comments/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/' element={<HanldeLogin policy={'dashboard:visit'} yes={()=><Dashboard/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/blog/:blogId' element={<HanldeLogin policy={'single-blog:visit'} yes={()=><SingleBlog/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/profile' element={<HanldeLogin policy={'profile:visit'} yes={()=><Profile/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/login' element={<HanldeLogin policy={'login:visit'} yes={()=><Login/>} no={()=> <HandleRedirect/>}/>} />
    <Route path='/logout' element={<HanldeLogin policy={'logout:visit'} yes={()=><Logout/>} no={()=> <HandleRedirect/>}/>} />
  </Routes>
}
