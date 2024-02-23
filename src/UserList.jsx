import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function UserList({ setActiveUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data).finally(() => setLoading(false))
    );
  }, []);
  return (
    <div>
      <h1 className="h1-list">Kullanıcılar</h1>
      {loading && <div className="div-list">loading...</div>}

      <ul className="user-list">
        {users.map((user) => (
          <li
            className="li-list"
            key={user.id}
            onClick={() => setActiveUserId(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
UserList.propTypes = {
  setActiveUserId: PropTypes.any,
};

export default UserList;
