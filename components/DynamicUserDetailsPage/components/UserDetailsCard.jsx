import { useContext } from "react"
import { UserContext } from "../context/UserProvider";
import { Link, useParams } from "react-router-dom";
import '../styles/UserDetailsCard.css';

export const UserDetailsCard = () => {
    const {users} = useContext(UserContext);
    const {userId} = useParams();

    const user = users.find((u) => u.id === parseInt(userId));

    if(!user) {
        return <div className="user-not-found">User Not Found!</div>;
    }
    return (
        <div className="user-details">
            <h2>Details of {user.name}</h2>
            <div className="details-card">
                <p><strong>Role: </strong> {user.role} </p>
                <p><strong>Email: </strong> {user.email} </p>
                <p><strong>Projects: </strong></p>
                <ul>
                    {user.projects.map((project, index) => (
                        <li key={index}>{project} </li>
                    ))}
                </ul>
                <Link to='/users' className="back-link">Back to Users List</Link>
            </div>
        </div>
    );
};