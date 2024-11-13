import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { RoleResponse } from '../../../../models/RoleResponse';
import { UserCreation } from '../../../../models/UserCreation';
import { RoleService } from '../../../../services/Role';
import { UserService } from '../../../../services/User';

export const UserCreationForm: FC = () => {
  const { getRoles } = RoleService();
  const { AddUsers } = UserService();
  const [roles, setRoles] = useState<RoleResponse[]>([]);
  const [users, setUsers] = useState<UserCreation []>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [selectedRole, setSelectRole] = useState('');

  useEffect(() => {
    let isMounted = true;
    getRoles()
      .then((data) => {
        if (isMounted) {
          setRoles(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Failed to load roles");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [getRoles]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      age,
      username,
      password,
      email,
      phoneNumber,
      city,
      selectedRole,
    };

    
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridRole">
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={selectedRole}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectRole(e.target.value)}
          >
            <option>Choose...</option>
            {roles.map((role) => (
              <option key={role._id} value={role._id}>
                {role.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
