import { Route, Routes } from "react-router-dom";
import { Users } from "./Users";
import { Navbar } from "./Navbar";
import { UserDetailsCard } from "./UserDetailsCard";
import { UserProvider } from "../context/UserProvider";


export const UsersApp = () => {
    return (
        <UserProvider>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Welcome to Home Page</h1>} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:userId" element={<UserDetailsCard />} />
                </Routes>
            </div>
        </UserProvider>

    );
};