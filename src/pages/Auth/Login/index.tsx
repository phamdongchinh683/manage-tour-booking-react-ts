import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AdminLogin } from '../../../models/AdminLogin';
import { UserService } from '../../../services/User';

export const Login: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { adminLogin } = UserService();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 

    const loginData: AdminLogin = { username, password };

    try {
      await adminLogin(loginData);
      alert("Login successful!");
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Form>
  );
};
