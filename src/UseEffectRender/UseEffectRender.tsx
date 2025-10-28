import axios from "axios";
import { FC, useEffect, useState } from "react";

type UserData = {
  username: string;
  email: string;
};
const UseEffectRender: FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const fetchJSON = async () => {
    const response = await axios.get<UserData>(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return response.data;
  };
  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
};

export default UseEffectRender;
