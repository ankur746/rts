import React, { useState } from "react";

const Users = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 20,
  },
  {
    name: "Michael",
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const onClick = () => {
    const foundUser = Users.find((user) => {
      return user.name === name;
    });

    // console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      <h1>User Search</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
      <div> {!user && <h2> No User Found</h2>}</div>
    </div>
  );
};

export default UserSearch;
