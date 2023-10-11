import { useState } from 'react';
import { Card, CardHeader, CardBody, Input, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

function AccountForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const register = async (account) => {
    const response = await fetch('http://127.0.0.1:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    });

    if (response.ok) {
      console.log('Registration successful');
      onLogin(true);
    } else {
      console.error('Registration failed');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const account = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password
    };

    register(account);
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
      <Input
        isRequired
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        className="max-w-xs"
      />
      <Input
        isRequired
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        className="max-w-xs"
      />
      <Button color="primary" type="submit" fullWidth>
        Register
      </Button>
    </form>
  );
}

export default AccountForm;