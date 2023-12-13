import { Outlet, NavLink } from "react-router-dom";

export const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <NavLink end to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/platillos">Platillos</NavLink>
          </li>
          <li>
            <NavLink to="/promociones">Promociones</NavLink>
          </li>
          <li>
            <NavLink to="/identificacion">Identificacion</NavLink>
          </li>
          <li>
            <NavLink to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink to="/ubicacion">Ubicacion</NavLink>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;