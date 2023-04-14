import { useState } from "react";

const useCreateUsername = (first_name, last_name) => {
  const [username, setUsername] = useState(null);

  if (first_name !== undefined && last_name !== undefined) {
    setUsername(`${first_name[0] + last_name}`);
  }

  return username;
};

export default useCreateUsername
