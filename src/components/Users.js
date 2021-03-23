import React, { useState, useEffect } from "react";
import axios from "axios";
import EachUser from "./EachUser";
import Loading from "./Loading";

export default function Users() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (response) {
      setUserData(response.data);
    }
  };

  return (
    <div className="users-box">
      {userData.length === 0 ? (
        <Loading />
      ) : (
        userData.map((user) => {
          return <EachUser key={user.id} data={user} />;
        })
      )}
    </div>
  );
}
