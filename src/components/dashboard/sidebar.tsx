import { StyledSidebar } from "./styles/sidebar.styled";
import {FaTabletAlt, FaUserAlt, FaMoneyBill} from "react-icons/fa"
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { pathname } = useLocation();
  
  return (
    <StyledSidebar>
      <h5>Main</h5>
      <ul>
        <li>
          <Link className={(pathname === "/admin" || pathname==="/driver") ? 'active' : 'deActive'} to="/admin">
            <FaTabletAlt className="sideIcon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className={pathname==="/admin/drivers" ? 'active' : 'deActive'}  to="/admin/drivers">
            <FaUserAlt className="sideIcon" />
            <span>Add a Driver</span>
          </Link>
        </li>
        <li>
          <Link className={pathname==="/admin/pricing" ? 'active' : 'deActive'}  to="/admin/pricing">
            <FaMoneyBill className="sideIcon" />
            <span>Pricing</span>
          </Link>
        </li>
                <li>
          <Link className={pathname==="/admin/triphistory" ? 'active' : 'deActive'}  to="/admin/triphistory">
            <FaMoneyBill className="sideIcon" />
            <span>Trip History</span>
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
}


export default Sidebar;
