// Dashboard.js
import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import { Outlet } from 'react-router-dom';
import './index.css';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const handleSideBarToggle = () => {
    setSidebarOpen(!isSidebarOpen);

  };

  return (
    <>
      <section className='full-section'>
        <div className="dashboard-container">
          <div className='sidebar-wrapper'>
            <DashboardSidebar isSidebarOpen={isSidebarOpen} />
          </div>
          <div className='content-wrapper'>
            <div className='menu-wrapper'>
              <DashboardHeader handleSideBarToggle={handleSideBarToggle} />
            </div>
            <div style={{ height: 'calc(100vh - 88px)', overflow: 'auto', }}>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
