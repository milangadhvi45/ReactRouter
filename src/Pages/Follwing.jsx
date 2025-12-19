 import { useState , useEffect} from "react"
 import { Link } from "react-router-dom";
import UserData from '../data/Userdata.js'

export default function Following() {
    const [followingList, setFollowingList] = useState(() => {
        const saved = localStorage.getItem('followinglist');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('followinglist', JSON.stringify(followingList));
    }, [followingList]);

    const follows = UserData.filter(user => 
        followingList.some(followedUser => followedUser.id === user.id)
    );
    
    function unfollowUser(userId) {
        const updated = followingList.filter(u => u.id !== userId);
        setFollowingList(updated);
    }
    console.log(unfollowUser);
    

    if (follows.length === 0) {
        return (
            <div className="container">
                <h1 className="page-title">Following</h1>
                <div className="empty-state">
                    <p>You're not following anyone yet.</p>
                    <Link to="/" className="btn btn-primary">Discover Users</Link>
                </div>
            </div>
        );
    }

     return (
        <div className="container">
            <h1 className="page-title">Following ({follows.length})</h1>
            <div className="user-grid">
                {follows.map((user) => (
                    <div key={user.id} className="user-card">
                        <img src={user.src} alt={user.Name} className="user-avatar" />
                        <div className="user-info">
                            <h3 className="user-name">{user.Name}</h3>
                            <p className="user-role">{user.Role}</p>
                            <p className="user-company">{user.Company}</p>
                        </div>
                        <div className="button-group">
                            <Link to={`/following/${user.id}`} className="btn btn-primary">
                                View Profile
                            </Link>
                            <button 
                                onClick={() => unfollowUser(user.id)}
                                className="btn btn-unfollow"
                            >
                                Unfollow
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


