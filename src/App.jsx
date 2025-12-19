import { Link, Route, Routes , Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Following from './Pages/Follwing'
import Profile from './Pages/Followingprofile'
import './App.css'
import { useState , useEffect } from 'react'
import LoginPage from './Pages/LoginPage'
import ProtectedRoute from './data/ProtectedRoute'
import NotFoundPage from './Pages/NotFoundpage'

export default function App() {
    const [isLoggedin , setisLoggedin] = useState(() => {
        return localStorage.getItem('isLoggedin') === true
    })

     useEffect(() => {
        localStorage.setItem('isLoggedin', isLoggedin);
    }, [isLoggedin]);

    const HandleLogin = () => {
        setisLoggedin(true)
    }

    const handleLogout  = () => {
        setisLoggedin(false)
        localStorage.removeItem('UserName')
        localStorage.removeItem('UserEmail')
        localStorage.removeItem('isLoggedin')

    }

    return (
           <div className="app">
            {/* Only show navbar if logged in */}
            {isLoggedin && (
                <nav className="navbar">
                    <div className="nav-container">
                        <h1 className="nav-logo">FollowHub</h1>
                        <div className="nav-links">
                            <Link to="/home" className="nav-link">All Users</Link>
                            <Link to="/following" className="nav-link">Following</Link>
                            <button onClick={handleLogout} className="logout-btn">
                                Logout
                            </button>
                        </div>
                    </div>
                </nav>
            )}

    <Routes>
        <Route path='/' element={isLoggedin ? 
            <Navigate to='/Home' replace/> :
            <Navigate to='/Login' replace />
        }/>
         <Route path='/Login' element={
            isLoggedin ? <Navigate to='/Home' replace /> : 
           <LoginPage onlogin={HandleLogin}
         />} />
         <Route path='/Home' element={<ProtectedRoute isLoggedin={isLoggedin}><Home/></ProtectedRoute>}/>
         <Route path='/following' element={<ProtectedRoute isLoggedin={isLoggedin}><Following/></ProtectedRoute>}/>
         <Route path='/following/:userid' element={<ProtectedRoute isLoggedin={isLoggedin}><Profile /></ProtectedRoute>}/>
         <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
            </div>
    );
}