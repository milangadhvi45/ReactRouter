import { useParams } from "react-router-dom"
import UserData from '../data/Userdata.js'

export default function Profile() {
    const { userid } = useParams();
    const user = UserData.find(u => u.id === Number(userid));

    if (!user) {
        return (
            <div className="container">
                <div className="empty-state">
                    <h2>User Not Found</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="profile-card">
                <img src={user.src} alt={user.Name} className="profile-avatar" />
                <h1 className="profile-name">{user.Name}</h1>
                
                <div className="profile-details">
                    <div className="detail-item">
                        <span className="detail-label">Study</span>
                        <span className="detail-value">{user.Study}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">University</span>
                        <span className="detail-value">{user.University}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Role</span>
                        <span className="detail-value">{user.Role}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Company</span>
                        <span className="detail-value">{user.Company}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Experience</span>
                        <span className="detail-value">{user.Experience}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Age</span>
                        <span className="detail-value">{user.Age}</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
