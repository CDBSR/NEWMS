import { Children, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const users = [
        { id: 1, name: 'John Doe', role: 'Admin', email: 'john@gmail.com', projects: ['Project A', 'Project B', 'Project C'] },
        { id: 2, name: 'Alice', role: 'Developer', email: 'alice@gmail.com', projects: ['Project A', 'Project B'] },
        { id: 3, name: 'Bob', role: 'Finanace Manager', email: 'bob@gmail.com',projects: ['Project B', 'Project C'] },
        { id: 4, name: 'boojho', role: 'Backend Developer', email: 'boojho@gmail.com',projects: ['Project D'] },
        { id: 5, name: 'Harry Potter', role: 'Designer', email: 'harry@gmail.com', projects: ['Project B', 'Project D'] },
    ];

    return (
        <UserContext.Provider value={{users}}>
            {children}
        </UserContext.Provider>
    )
}