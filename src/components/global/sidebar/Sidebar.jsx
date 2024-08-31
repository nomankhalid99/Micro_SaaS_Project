import { useLocation } from "react-router-dom";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { FaList, FaQrcode, FaUsers } from "react-icons/fa";
import {
  LuArrowBigRightDash,
  LuArrowBigLeftDash,
  LuClipboardSignature,
} from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {  FaToolbox } from "react-icons/fa6";
import { IoCalculatorOutline } from "react-icons/io5";


const Sidebar = ({ menuCollapse, setMenuCollapse }) => {
  const location = useLocation();

  const menuIconClick = () => {
    setMenuCollapse((prevMenuCollapse) => !prevMenuCollapse);
  };

  const isMenuItemActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <Box
        id="header"
        sx={{
          "& .ps-sidebar-container .ps-submenu-content": {
            fontSize: "16px",
            zIndex: "9999 !important",
            backgroundColor: "#FF4747"
          },
          "& .ps-sidebar-container .ps-submenu-content .ps-menu-button": {
            height: "30px",
            paddingLeft: "60px",
          },
        }}
        position="fixed"
      >
        <ProSidebar
          className="bg-gradient-to-tr from-[#FF4B2B] to-[#FF416C] text-white h-screen"
          collapsed={menuCollapse}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            mt={5}
            mb={2}
          >
            <Box className="logotext" bgcolor="white" borderRadius="50%" p={1}>
              <IconButton>
                <FaQrcode fontSize="30px" className="text-red-500"/>
              </IconButton>
            </Box>
            <Box display={menuCollapse ? "none" : "block"}>
              <Typography variant="h5" fontWeight="bold">
                SaaS
              </Typography>
            </Box>
          </Box>
          <Menu className="text-lg h-[320px] overflow-y-auto">
            <MenuItem
              active={isMenuItemActive("/home")}
              icon={<AiFillHome fontSize="22px" />}
            >
              <Link to="/home">Home</Link>
            </MenuItem>
            {/* <MenuItem
              active={isMenuItemActive("/projects")}
              icon={<FaToolbox fontSize="22px" />}
            >
              <Link to="/feature1">Feature#1</Link>
            </MenuItem>
            <MenuItem
              active={isMenuItemActive("/tasks")}
              icon={<FaList fontSize="22px" />}
            >
              <Link to="/feature2">Feature#2</Link>
            </MenuItem> */}
            {menuCollapse ? (
              <MenuItem icon={<FaUsers fontSize="22px" />}>Feature#1</MenuItem>
            ) : (
              <SubMenu label="Feature#1" icon={<FaUsers fontSize="22px" />}>
                <Link to="/leaders">
                  <MenuItem active={isMenuItemActive("/leaders")}>
                    Compains
                  </MenuItem>
                </Link>
                <Link to="/employees">
                  <MenuItem active={isMenuItemActive("/employees")}>
                    Analytics
                  </MenuItem>
                </Link>
                {/* <Link to="/employee-profile">
                  <MenuItem active={isMenuItemActive("/employee-profile")}>
                    Employee Profile
                  </MenuItem>
                </Link> */}
              </SubMenu>
            )}
            {menuCollapse ? (
              <MenuItem icon={<IoCalculatorOutline fontSize="22px" />}>
                Feature#2
              </MenuItem>
            ) : (
              <SubMenu
                label="Feature#2"
                icon={<IoCalculatorOutline fontSize="22px" />}
              >
                <Link to="/invoices">
                  <MenuItem active={isMenuItemActive("/invoices")}>
                    Email Stats
                  </MenuItem>
                </Link>
                {/* <Link to="/payments">
                  <MenuItem active={isMenuItemActive("/payments")}>
                    Payments
                  </MenuItem>
                </Link>
                <Link to="/expenses">
                  <MenuItem active={isMenuItemActive("/expenses")}>
                    Expenses
                  </MenuItem>
                </Link>
                <Link to="/create-invoice">
                  <MenuItem active={isMenuItemActive("/create-invoice")}>
                    Create Invoice
                  </MenuItem>
                </Link> */}
              </SubMenu>
            )}
          </Menu>
          <Box
            className="closemenu"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            marginTop={9}
            onClick={menuIconClick}
          >
            {menuCollapse ? (
              <LuArrowBigRightDash fontSize="30px" />
            ) : (
              <LuArrowBigLeftDash fontSize="30px" />
            )}
          </Box>
        </ProSidebar>
      </Box>
    </>
  );
};

export default Sidebar;