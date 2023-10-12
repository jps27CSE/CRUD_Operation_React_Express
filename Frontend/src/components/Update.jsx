import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const user = form.user.value;

    fetch(`http://localhost:3000/user/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ user, email }),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" defaultValue={user?.email} />
        <input type="text" name="user" defaultValue={user?.user} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
