import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from '../src/Home/Home';
import Languages from './Content/Languages';
import Project from './Content/Project';
import Sheet from './Content/Sheet';
import LoginPage from './components/Login';
import Forgetpassword from './components/Forgetpassword';
import Signup from './components/Signup';
import AdminloginPage from './components/Adminlogin';
import AddAdmin from './components/Addadmin';
import Contact from './Contacts/Contact';
import Pagenotfound from './components/Pagenotfound';
import Technicalblog from './Content/Technicalblog';
import DSA from './components/Language/DSA/DSA';
import Python from './components/Language/Python/Python';
import Java from './components/Language/Java/Java';
import Dbms from './components/Language/DBMS/Dbms';
import Cpp from './components/Language/C++/Cpp';
import C from './components/Language/C/C';
import Techblog from './components/TechBlogs/Techblog';
import CSPage from './components/CSSubject/CSPage';
import BlogDetail from './components/TechBlogs/Blogdetail';
import Projectdetail from './components/Projects/Projectdetail';
import Projectpage from './components/Projects/Projectpage';
import DashBoard from './components/Admin/Dashboard';
import Contactform from './Contacts/Contactform';
import { useAuth } from './Context/AuthProvider';
import Profile from './components/Profile';
import Ai from './components/Aipage';


const App = () => {
  //auth user function 
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path='/Contactform' element={authUser ? <Contactform /> : <Navigate to="/Signup" />} />
          <Route path="/Languages" element={<Languages />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Sheet" element={<Sheet />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Adminlogin" element={<AdminloginPage />}></Route>
          <Route path="/AddAdmin" element={<AddAdmin />}></Route>
          <Route path="/Forgetpassword" element={<Forgetpassword />}></Route>
          <Route path='/Pagenotfound' element={<Pagenotfound />}></Route>
          <Route path='/Technicalblog' element={<Technicalblog />}></Route>
          <Route path='/CSPage' element={<CSPage />}></Route>
          <Route path='/DSA' element={authUser ? <DSA /> : <Navigate to="/Signup" />}></Route>
          <Route path='/Python' element={<Python />}></Route>
          <Route path='/Dbms' element={authUser ? <Dbms /> : <Navigate to="/Signup" />}></Route>
          <Route path='/Java' element={<Java />}></Route>
          <Route path='/Cpp' element={<Cpp />}></Route>
          <Route path='/C' element={<C />}></Route>
          <Route path='/techblog' element={<Techblog />}></Route>
          <Route path='/detail/:id' element={<BlogDetail />}></Route>
          <Route path='/Projectpage' element={<Projectpage />}></Route>
          <Route path='/projectdetail/:id' element={<Projectdetail />}></Route>
          <Route path='/Dashboard' element={<DashBoard />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Ai' element={<Ai />} />

        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
