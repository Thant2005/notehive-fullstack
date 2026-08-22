import { createRoot } from "react-dom/client";
import "./index.css";
import NoteHiveRouter from "./router/NoteHiveRouter";

createRoot(document.getElementById("root")!).render(<NoteHiveRouter />);
