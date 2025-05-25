import React from "react";
import "./Sidebar.css";
import { sidebarLinks } from "../data/navigation";
import {
  Home,
  Clock,
  Calendar,
  FileText,
  BarChart2,
  Activity,
  MessageSquare,
  HelpCircle,
  Settings,
} from "lucide-react";

const icons = {
  Home,
  Clock,
  Calendar,
  FileText,
  BarChart2,
  Activity,
  MessageSquare,
  HelpCircle,
  Settings,
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <ul>
        {sidebarLinks.map((link, idx) => {
          const Icon = icons[link.icon];
          return (
            <li key={idx}>
              <Icon size={18} />
              {link.label}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
