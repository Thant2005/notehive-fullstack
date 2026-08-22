import type { ReactNode } from "react";
import { NavLink } from "react-router";

interface SidebarLinkProps {
  to: string;
  end?: boolean;
  icon: ReactNode;
  children: ReactNode;
}
function SidebarLink({ to, end, icon, children }: SidebarLinkProps) {
  return (
    <NavLink to={to} end={end}>
      {({ isActive }) => (
        <div
          className={`flex items-center gap-2  w-60 p-2 rounded-control   ${isActive ? "bg-primary-soft text-primary" : "hover:bg-muted/10 text-muted"}`}
        >
          <span className="text-sm font-extrabold">{icon}</span>
          <span className="text-sm font-bold">{children}</span>
        </div>
      )}
    </NavLink>
  );
}

export default SidebarLink;
