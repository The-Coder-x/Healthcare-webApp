import React, { useState } from "react";
import "../styles/Sidebar.css";
import {
  Home,
  Clock,
  Calendar,
  FileText,
  BarChart2,
  MessageSquare,
  Phone,
  Settings,
  
} from "lucide-react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const sidebarLinks = [
  {
    section: "General",
    links: [
      { label: "Dashboard", icon: Home },
      { label: "History", icon: Clock },
      { label: "Calendar", icon: Calendar },
      { label: "Appointments", icon: FileText },
      { label: "Statistics", icon: BarChart2 },
    ],
  },
  {
    section: "Tools",
    links: [
      { label: "Chat", icon: MessageSquare },
      { label: "Support", icon: Phone },
    ],
  },
  {
    section: "Settings",
    links: [{ label: "Setting", icon: Settings }],
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);


  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <>
     
      <button
        className="sidebar-toggle"
        onClick={handleToggle}
        aria-label="Toggle sidebar"
      >
        {open ? <IoMdClose /> : <IoMenu />}
      </button>

     
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-logo">Healthcare.</h1>
        </div>
        {sidebarLinks.map((section, idx) => (
          <div key={idx} className="sidebar-section">
            <h3 className="sidebar-section-title">{section.section}</h3>
            <ul className="sidebar-links">
              {section.links.map((link, linkIdx) => {
                const Icon = link.icon;
                return (
                  <li key={linkIdx} className="sidebar-item">
                    <Icon size={20} />
                    <span className="sidebar-label">{link.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>

      
      {open && <div className="sidebar-overlay" onClick={handleToggle}></div>}
    </>
  );
}

export default Sidebar;


