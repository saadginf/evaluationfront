import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { FcDataProtection } from "react-icons/fc";
import "./TopBar.css"
import { Dropdown } from "react-bootstrap";

const TopBar = () => {
  const handlCick = () => {
    console.log("LOGOUT")
  };

  return (
<div className="topbar">
      <h3>DPSIC</h3>
      <div className="topbarlogo">
      <FcDataProtection size="90"/>
      </div>
      <div>
    <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaUser />
            {"  "}
            {"admin"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handlCick}>
              <FaSignOutAlt/>{" "}
              <span>Logout</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;