import { useState } from "react";
import axios from "axios";

function App() {
  const [id, setId] = useState("");

  const getUser = async () => {
    console.log("Sending ID:", id);

    const res = await axios.get(`http://localhost:5000/user/${id}`);
    console.log(res.data);
  };

  return (
    <div>
      <input
        placeholder="Type ID here..."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={getUser}>Get User</button>
    </div>
  );
}

export default App;