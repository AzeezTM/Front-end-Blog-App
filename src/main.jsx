import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import App from './App'

import './index.css'
import Topbar from './components/topbar/Topbar';
import Home from './components/Home/Home';
import Signup from './components/signup/Signup';
import Profile from './components/profile/profile';
import SinglePosts from './components/Single/SinglePosts';
import AddPost from './components/admin/Admin-post/AddPost';
// import AddTopic from './components/admin/Admin-Topic/AddTop';
import AddTopic from './components/admin/Admin-Topic/AddTopic';

const router = createBrowserRouter([
  {
    path: "/", element: <App/>
  
   
  },

  {
    path: "signup", element: <Signup/>
   
  },
  {
    path: "/",  element: <Home/>
   
  },
  {
    path: "profile", element:   <Profile/>
   
  },

  {
    path: "post/:id", element: <SinglePosts/>
   
  },
  {
    path:"/addPost", element: <AddPost />
  },
  {
    path:"/addTopic", element: <AddTopic />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
