"use client"; // Ensure it's a client component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Replaces useLocation
import { RiTeamFill } from "react-icons/ri";
import { FiCheckSquare } from "react-icons/fi";
import { CiGrid42 } from "react-icons/ci";
import { TbSettings } from "react-icons/tb";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current route

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <CiGrid42 className="w-5 h-5" />,
    },
    {
      name: "Manage Incident",
      path: "/manageincident",
      icon: <FiCheckSquare className="w-5 h-5" />,
    },
    {
      name: "Contracts",
      path: "/contracts",
      icon: <RiTeamFill className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <TbSettings className="w-5 h-5" />,
    },
  ];

  return (
    <aside
      className="min-h-screen pt-16 w-60 text-white flex flex-col font-montserrat"
      style={{
        backgroundImage: "url(/sidebar-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <nav className="mt-6">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`relative flex items-center px-6 py-2 rounded-lg ${
                pathname === item.path
                  ? "bg-gradient-to-r from-[#00A0E4] to-transparent text-white"
                  : "hover:bg-gradient-to-r from-[#00A0E4] to-transparent"
              }`}
            >
              {pathname === item.path && (
                <span className="absolute left-0 top-0 h-full w-1 bg-white rounded-full"></span>
              )}
              <Link href={item.path} className="flex items-center space-x-2 w-full">
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
