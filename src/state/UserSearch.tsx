import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 25 },
];


const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: String, age: number } | undefined>();

    const onClick = () => {

        const foundUser = users.find((user) => {
            return user.name === name;

        });
        setUser(foundUser);
        /* console.log(foundUser); */
    };

    return (
        <div>
            <hr></hr>
            <small>-state/UserSearch.tsx 구역-</small>
            <h3> User Search</h3>

            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick} >Find User</button>
            <div>
                1. 이름: {user && user.name} <br></br>
                2. 나이: {user && user.age}
            </div>

        </div>
    );
};

export default UserSearch