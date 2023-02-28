import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clinic">Clinic</Link>
          </li>
          <li>
            <Link to="/medteam">Medteam</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;