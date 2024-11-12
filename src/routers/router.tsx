import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Auth/Login';
import Home from '../pages/Home';
import { UserList } from '../pages/User/Components/UserList';

export const RouterApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/manage-user/users" element={<UserList />} />
    </Routes>
  );
};
