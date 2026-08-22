interface Note {
  id: string;
  userId: string;
  subjectId: string;
  fileUrl: string;
  title: string;
  fileType: string;
  fileSize: number;
  images: string[];
  tags: string[];
  semester: string;
  upVoteCount: number;
  downVoteCount: number;
  score: number;
  downloadCount: number;
  viewCount: number;
  createdAt: Date;
  uploadedBy: User;
  subject: Subject;
  votes: Vote[];
  comments: Comment[];
}
interface User {
  id: string;
  name: string;
  email: string;
  university: string;
  year: number;
  faculty: string;
  reputation: number;
}
interface Subject {
  id: string;
  name: string;
  code: string;
  faculty: string;
  year: number;
}
interface Vote {
  id: string;
  noteId: string;
  userId: string;
  type: string;
}

interface Comment {
  id: string;
  text: string;
  parentId?: string | null;
  userId: string;
  noteId: string;
  createdAt: Date;
  user: User;
  replies: Comment[];
}
export type { Note, User, Vote, Comment, Subject };
