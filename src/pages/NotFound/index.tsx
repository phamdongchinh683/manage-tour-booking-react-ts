import { Link } from 'react-router-dom';
const NotFound = () => {

  return (
     <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404</i>
      </p>
      <Link to="/dashboard">
        Go to DashBoard
      </Link>
      </>
  );
};

export default NotFound;