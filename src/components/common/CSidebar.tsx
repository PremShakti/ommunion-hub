import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { navlist } from "@/lib/nablist";
import { Link, useLocation } from "react-router-dom";

// Menu items.

export function CSidebar() {
  const location = useLocation();
  return (
    <Sidebar className="">
      <SidebarContent className="bg-gray-100">
        <SidebarGroup>
          <SidebarGroupLabel className="w-[117px] py-5">
            {" "}
            <h1 className="text-lg font-[600] ">JOB BOARD</h1>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className=" mt-10 space-y-3 ">
              {navlist.map((item) => {
                const active = location.pathname === item.url;
                return (
                  <SidebarMenuItem
                    key={item.title}
                    className={`${active ? " border-b-2 " : "  border-b"}`}
                  >
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <SidebarTrigger className="flex text-black items-centert justify-start w-full">
                          <item.icon />
                          <span>{item.title} </span>
                        </SidebarTrigger>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
