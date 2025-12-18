import { Link, Route, Routes , Router } from 'react-router-dom'
import Home from './Pages/Home'
import Following from './Pages/Follwing'
import Profile from './Pages/Followingprofile'
import './App.css'

export default function App() {
    return (
            <div className="app">
                <nav className="navbar">
                    <div className="nav-container">
                        <h1 className="nav-logo">FollowHub</h1>
                        <div className="nav-links">
                            <Link to="/" className="nav-link">All Users</Link>
                            <Link to="/following" className="nav-link">Following</Link>
                        </div>
                    </div>
                </nav>

              <Routes>
           <Route path='/' element={<Home/>}/>
         <Route path='/following' element={<Following/>}/>
         <Route path='/following/:userid' element={<Profile/>}/>
         
     </Routes>
            </div>
    );
}