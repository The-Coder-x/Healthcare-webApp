import React from "react";
import "./Header.css";
import { Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-icons">
        <Bell size={20} />
        <button className="add-btn">
          <Plus size={20} />
        </button>
        <div className="user-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
