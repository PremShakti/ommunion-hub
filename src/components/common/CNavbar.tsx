import { Link, useLocation } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";

import { navlist } from "@/lib/nablist";
import { PanelLeftIcon } from "lucide-react";

const CNavbar = () => {
  const location = useLocation();
  return (
    <div className=" sticky top-0 left-0 z-30 bg-blue-500 ">
      <nav className=" container  text-white flex justify-between items-center p-4">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="sm:hidden">
              <SidebarTrigger>
                <PanelLeftIcon />
              </SidebarTrigger>
            </div>
            <h1 className="text-2xl font-[700]">Communion App</h1>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <ul className="sm:flex gap-4 hidden ">
                {navlist.map((item, i) => {
                  const active =
                    // item.url !== "recruiter/" &&
                    location.pathname === item.url;
                  // || pathName.startsWith(`${item.url}/`);
                  return (
                    <Link
                      to={item.url}
                      key={i}
                      className={`${
                        active
                          ? " border-b-2 "
                          : " hover:border-b-2 border-dashed"
                      }`}
                    >
                      <li>{item.title}</li>
                    </Link>
                  );
                })}
              </ul>

              {/* <AuthForm /> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CNavbar;
