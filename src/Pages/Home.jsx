import { useState, useEffect } from 'react';

import UserData from '../data/Userdata.js'
export default function Home() {
    const [followingList, setFollowingList] = useState(() => {
        const saved = localStorage.getItem('followinglist');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('followinglist', JSON.stringify(followingList));
    }, [followingList]);

    function addUser(userId) {
        const findUser = UserData.find(u => u.id === userId);
        const alreadyFollowed = followingList.some(u => u.id === userId);
        
        if (findUser && !alreadyFollowed) {
            setFollowingList([...followingList, findUser]);
        }
    }

    return (
        <div className="container">
            <h1 className="page-title">All Users</h1>
            <div className="user-grid">
                {UserData.map((user) => {
                    const isFollowing = followingList.some(u => u.id === user.id);
                    
                    return (
                        <div key={user.id} className="user-card">
                            <img src={user.src} alt={user.Name} className="user-avatar" />
                            <div className="user-info">
                                <h3 className="user-name">{user.Name}</h3>
                                <p className="user-role">{user.Role}</p>
                                <p className="user-company">{user.Company}</p>
                            </div>
                            <button 
                                onClick={() => addUser(user.id)}
                                disabled={isFollowing}
                                className={isFollowing ? "btn btn-following" : "btn btn-follow"}
                            >
                                {isFollowing ? '✓ Following' : '+ Follow'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}