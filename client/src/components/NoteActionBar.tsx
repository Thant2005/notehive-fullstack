import { Clock, Plus } from "lucide-react";
import { NavLink } from "react-router";

function NoteActionBar() {
  return (
    <div className="px-4 py-6 max-w-200 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Notes</h1>
        <button className="flex items-center bg-primary px-3 py-2 text-white rounded-md">
          <Plus size={13} />
          <span className="text-xs font-bold tracking-tight">Add Note</span>
        </button>
      </div>
      <p className="text-xs text-muted mt-1 mb-4">
        Useful notes shared by students in this course
      </p>
      <div className="bg-muted/20 rounded-xl py-1 px-1 w-max flex items-center">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-white  rounded-lg " : "text-muted"} px-4 py-1.5 text-sm font-bold`
          }
          to={"/"}
        >
          🔥Top Notes
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-white  rounded-lg " : "text-muted"} px-4 py-1.5 text-sm font-bold flex items-center gap-0.5`
          }
          to={"/note-list"}
        >
          <Clock size={13} className="mb-0.5" />
          Latest Notes
        </NavLink>
      </div>
    </div>
  );
}

export default NoteActionBar;
