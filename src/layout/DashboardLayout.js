import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
      <div>
        <Navbar />
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">My Cart</Link>
              </li>
              <li>
                <Link to="/dashboard/add-products">Add Products</Link>
              </li>

              <li>
                <Link to="/dashboard/make-moderator">Make Moderator</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;