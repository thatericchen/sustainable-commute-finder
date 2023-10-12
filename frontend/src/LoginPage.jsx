import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (credentials) => {
    const response = await fetch("http://127.0.0.1:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      console.log("Login successful");
      onLogin(true);
    } else {
      console.error("Login failed");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const credentials = {
      email: email,
      password: password,
    };

    login(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        isRequired
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="max-w-xs"
      />
      <Input
        isRequired
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="max-w-xs"
      />
      <Button color="primary" type="submit" fullWidth>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
