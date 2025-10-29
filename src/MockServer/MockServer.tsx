import axios from "axios";
import { FC, useState } from "react";

const MockServer: FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const { username } = response.data;
      setUserName(username);
      setClicked(true);
    } catch {
      setError("Fetching Failed !");
    }
  };
  const buttonText = clicked ? "Loaded" : "Start Fetch";

  return (
    <div>
      <button onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {userName && <h3>{userName}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </div>
  );
};

export default MockServer;
