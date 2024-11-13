import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const DropDown = ({data }: { feature: string, data: Array<{ linkRouter: string, name: string }> }) => {
  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Menu>
      {data.map((router, index) => (
          <Link to={`/dashboard/${router.linkRouter}`} key={index}>
            <div>{router.name}</div>
          </Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
