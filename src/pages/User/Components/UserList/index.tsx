import { FC, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { UserService } from '../../../../services/User';

export const UserList: FC = () => {
  const { getUsers } = UserService();
  const [list, setList] = useState<any[]>([]);  
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    let mounted = true;  
    getUsers()
      .then((items) => {
        if (mounted) {
          setList(items); 
          setLoading(false); 
        }
      })
      .catch((error) => {
        console.error("Error fetching users", error);
        setLoading(false);  
      });

    return () => {
      mounted = false;
    };
  }, []);  

  if (loading) {
    return <div>Loading...</div>;  
  }


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Age</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user, index) => (
          <tr key={user.id}> 
            <td>{index + 1}</td>
            <td>{user.fullName.firstName}</td>
            <td>{user.fullName.lastName}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.createdAt}</td>
            <td>{user.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
