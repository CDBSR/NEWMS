
import { Link } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import '../styles/Users.css';


export const Users = () => {
    const {users} = useContext(UserContext);
    return (
        <div className="users-container">
            <h1>Users List</h1>
            <div className="users-grid">
                {users?.map((user) => {
                    return (
                        <div key={user.id} className="user-card">
                            <h2>{user.name} </h2>
                            <p>{user.role} </p>
                            <Link to={`/users/${user.id}`} className='details-link'>View Details</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}