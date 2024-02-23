import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function UserDetail({ activeUserId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error("Error fetching user:", error))
      .finally(() => setLoading(false));
  }, [activeUserId]);

  if (!activeUserId) {
    return <div>Kullanıcı seçilmedi.</div>;
  }

  return (
    <div>
      <h1>Detaylar</h1>
      {loading && <div>Yükleniyor...</div>}

      {!loading && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}

UserDetail.propTypes = {
  activeUserId: PropTypes.any,
};

export default UserDetail;
