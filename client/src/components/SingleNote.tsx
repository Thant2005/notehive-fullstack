import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";
import PdfIcon from "../assets/icon-pdf.svg";
import type { Note } from "../types/type";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
function SingleNote({ note }: { note: Note }) {
  dayjs.extend(relativeTime);
  const fileUrl = note.fileUrl.split("/").pop();
  const fileType = fileUrl?.split(".").pop();
  return (
    <div className="bg-surface rounded-xl border border-line p-6 flex flex-col space-y-3">
      <div>
        <div className="flex items-center gap-1">
          <div className="rounded-full bg-muted/20 text-[10px] font-bold p-0.5 w-9 h-9 flex items-center justify-center">
            TW
          </div>
          <div>
            <h4 className="text-xs mb-0.5">{note.uploadedBy.name}</h4>
            <p className="text-[10px] text-muted">
              <span>{dayjs(note.createdAt).fromNow()}</span> .{" "}
              {note.subject.name}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{note.title}</h1>
      </div>
      <div className="w-full overflow-hidden">
        {!!note.images?.length ? (
          <img className="rounded-xl" src={note?.images[0]} alt="" />
        ) : (
          <div className="w-full flex gap-1 items-center bg-canvas rounded-lg border border-line px-2 py-1">
            <div className="w-8 h-8 p-2 rounded-md bg-primary-soft flex items-center justify-center">
              <img src={PdfIcon} className="w-6 h-6  " alt="" />
            </div>
            <div>
              <p>{fileUrl}</p>
              <p>
                {note.fileSize} . {fileType}
              </p>
            </div>
            <button className="bg-white shadow-md rounded-md hover:bg-surface hover:font-bold ml-60 px-3 py-1">
              Preview
            </button>
          </div>
        )}
      </div>
      <div className="border-b-2 border-line"></div>
      <div className="flex items-center gap-5 text-muted">
        <div className="px-5 py-1 rounded-lg bg-surface-subtle  cursor-pointer hover:bg-muted/20 flex items-center gap-1">
          <ThumbsUp size={13} />
          {note.upVoteCount}
        </div>
        <div className="px-5 py-1 rounded-lg bg-surface-subtle  cursor-pointer hover:bg-muted/20 flex items-center gap-1">
          <ThumbsDown size={13} />
          {note.downVoteCount}
        </div>
        <div className="px-5 py-1 rounded-lg bg-surface-subtle  cursor-pointer hover:bg-muted/20 flex items-center gap-1">
          <MessageCircle size={13} />
          {note.comments.length}
        </div>
      </div>
    </div>
  );
}

export default SingleNote;
