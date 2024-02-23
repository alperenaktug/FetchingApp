import { useState } from "react";
import UserDetail from "./UserDetail";
import UserList from "./UserList";

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className="App">
      <div>
        <UserList setActiveUserId={setActiveUserId} />
      </div>
      <div>
        <UserDetail activeUserId={activeUserId} />
      </div>
    </div>
  );
}

export default App;
