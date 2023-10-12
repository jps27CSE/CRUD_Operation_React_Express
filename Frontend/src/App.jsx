import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const user = form.user.value;
    const sendData = { user, email };

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Saved Successfully");
        }

        form.reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="user" placeholder="user" />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
}

export default App;
