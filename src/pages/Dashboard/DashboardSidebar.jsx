/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './sidebarlayout.css'
import { Box, Typography } from "@mui/material";
import { MdOutlineDashboard } from "react-icons/md";

const routes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: <MdOutlineDashboard />,
  // },
 {
   path: "/dashboard/file-upload",
   name: "File Upload",
   icon: <MdOutlineDashboard />,
 },
];

const DropdownMenuItem = ({ path, name }) => (
  <NavLink
    to={path}
    className="submenu-link"
    style={{ marginLeft: '50px', paddingTop: '3px', display: 'flex', alignItems: 'center', fontSize: '15px',  fontFamily:'Poppins', color:' #E3E2EF', textDecoration: 'none', gap: '10px', marginTop:'10px' }}
  >
    {name}
  </NavLink>
);

const DashboardSidebar = ({ isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isSidebarOpen ? "" : "70px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* <img src="/admin-white.png" /> */}
                  <Box>
                    <Typography sx={{
                      color: '#E3E2EF',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '24px',
                      fontWeight: '500',
                    }}>
                    Dental <br/> Dashboard
                    </Typography>
                  </Box>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route?.disabled) route.path = location.pathname

              if (route.subRoutes) {
                return (
                  <div key={index} className="routes">
                    <div style={{ display: "flex", cursor: "pointer", alignItems: "center", gap: "10px", margin:'-10px 0 10px 0', fontSize: '15px', fontFamily:'Poppins', color:' #E3E2EF' }}>
                      {route.icon && <div className="icon" style={{marginLeft:'25px'}}>{route.icon}</div>}
                      <div className="submenu-text" onClick={toggleDropdown}>{route.name}</div> 
                    </div>
                    <AnimatePresence>
                      {isSidebarOpen && isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="submenu-items"
                        >
                          {route.subRoutes.map((subRoute, subIndex) => (
                            <DropdownMenuItem
                              key={subIndex}
                              path={subRoute.path}
                              name={subRoute.name}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isSidebarOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      </div>
    </>
  );
}

export default DashboardSidebar;