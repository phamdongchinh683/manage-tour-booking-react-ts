import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { UsersResponse } from '../../../../models/UsersReponse';
import { UserService } from '../../../../services/User';

export const UserList: FC = () => {
  const { getUsers } = UserService();
  const [list, setList] = useState<UsersResponse[]>([]);
  const checkCall = useRef(false);
  const [checkedUsers, setCheckedUsers] = useState<{ [key: string]: boolean }>({});
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const getAllUser = async () => {
    if (!checkCall.current) {
        checkCall.current = true;
        const users = await getUsers();
        setList(users);
    }
};

useEffect(() => {
  getAllUser();
}, []);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, userId: string) => {
    setCheckedUsers((prev) => ({
      ...prev,
      [userId]: e.target.checked,
    }));
  };

  const handleSelectAllChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setCheckedUsers((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, isChecked]))
    );
  };

  const getSelectedUsers = () => {
    const selectedUsers = Object.keys(checkedUsers)
      .filter((userId) => checkedUsers[userId]) 
      .map((userId) => ({ _id: userId })); 
    return { users: selectedUsers };
  };

  if (list.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
             Select All
          </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Age</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        {list.map((user) => (
          <tr key={user._id}>
            <td>
              <input
                type="checkbox"
                checked={checkedUsers[user._id] || false}
                onChange={(e) => handleCheckboxChange(e, user._id)}
              />
            </td>
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
