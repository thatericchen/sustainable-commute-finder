import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Button } from "@nextui-org/react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        onLogin(true);
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && <p className="text-red-500">{error}</p>}
      <Input
        isRequired
        type="email"
        label="Email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        className="max-w-xs"
      />
      <Input
        isRequired
        type="password"
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        className="max-w-xs"
      />
      <Button color="primary" type="submit" fullWidth disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
