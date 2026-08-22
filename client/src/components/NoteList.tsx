import type { Note } from "../types/type";

import SingleNote from "./SingleNote";

const notes: Note[] = [
  {
    id: "note_cuid_001",
    userId: "user_uuid_001",
    subjectId: "subj_cuid_101",
    title: "Data Structures and Algorithms - Complete Lecture Notes",
    fileUrl: "https://example.com/files/dsa-notes.pdf",
    fileType: "application/pdf",
    fileSize: 2450000,
    images: [
      "https://picsum.photos/seed/dsa1/800/600",
      "https://picsum.photos/seed/dsa2/800/600",
    ],
    tags: ["algorithms", "java", "exam-prep"],
    semester: "Fall 2025",
    upVoteCount: 42,
    downVoteCount: 2,
    score: 40,
    downloadCount: 150,
    viewCount: 320,
    createdAt: new Date("2026-01-15T10:00:00Z"),

    uploadedBy: {
      id: "user_uuid_001",
      name: "Alice Smith",
      email: "alice@university.edu",
      university: "Tech State University",
      year: 3,
      faculty: "Computer Science",
      reputation: 120,
    },

    subject: {
      id: "subj_cuid_101",
      name: "Data Structures & Algorithms",
      code: "CS201",
      faculty: "Computer Science",
      year: 2,
    },

    votes: [
      {
        id: "vote_1",
        noteId: "note_cuid_001",
        userId: "user_uuid_002",
        type: "up",
      },
    ],

    comments: [
      {
        id: "comm_1",
        text: "These notes saved my grade, thank you!",
        parentId: null,
        userId: "user_uuid_002",
        noteId: "note_cuid_001",
        createdAt: new Date("2026-01-16T12:30:00Z"),
        user: {
          id: "user_uuid_002",
          name: "Bob Jones",
          email: "bob@university.edu",
          university: "Tech State University",
          year: 2,
          faculty: "Computer Science",
          reputation: 15,
        },
        replies: [],
      },
    ],
  },
  {
    id: "note_cuid_002",
    userId: "user_uuid_003",
    subjectId: "subj_cuid_102",
    title: "Organic Chemistry Reaction Mechanisms Summary",
    fileUrl: "https://example.com/files/ochem-summary.pdf",
    fileType: "application/pdf",
    fileSize: 5120000,
    images: ["https://picsum.photos/seed/ochem1/800/600"],
    tags: ["chemistry", "reactions", "organic"],
    semester: "Spring 2025",
    upVoteCount: 28,
    downVoteCount: 1,
    score: 27,
    downloadCount: 95,
    viewCount: 210,
    createdAt: new Date("2026-02-01T14:20:00Z"),

    uploadedBy: {
      id: "user_uuid_003",
      name: "Charlie Brown",
      email: "charlie@university.edu",
      university: "Tech State University",
      year: 4,
      faculty: "Chemistry",
      reputation: 85,
    },

    subject: {
      id: "subj_cuid_102",
      name: "Organic Chemistry II",
      code: "CHEM302",
      faculty: "Natural Sciences",
      year: 3,
    },

    votes: [],
    comments: [],
  },
  {
    id: "note_cuid_003",
    userId: "user_uuid_004",
    subjectId: "subj_cuid_103",
    title: "Macroeconomics Midterm Formula Sheet",
    fileUrl: "https://example.com/files/macro-formulas.docx",
    fileType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileSize: 1024000,
    images: [],
    tags: ["economics", "formulas", "midterm"],
    semester: "Fall 2025",
    upVoteCount: 15,
    downVoteCount: 4,
    score: 11,
    downloadCount: 60,
    viewCount: 140,
    createdAt: new Date("2026-02-10T09:15:00Z"),

    uploadedBy: {
      id: "user_uuid_004",
      name: "Diana Prince",
      email: "diana@university.edu",
      university: "Tech State University",
      year: 2,
      faculty: "Business School",
      reputation: 40,
    },

    subject: {
      id: "subj_cuid_103",
      name: "Principles of Macroeconomics",
      code: "ECON101",
      faculty: "Business School",
      year: 1,
    },

    votes: [],
    comments: [],
  },
  {
    id: "note_cuid_004",
    userId: "user_uuid_001",
    subjectId: "subj_cuid_104",
    title: "Database Management Systems SQL Cheat Sheet",
    fileUrl: "https://example.com/files/sql-cheatsheet.pdf",
    fileType: "application/pdf",
    fileSize: 1800000,
    images: ["https://picsum.photos/seed/sql1/800/600"],
    tags: ["sql", "database", "postgres", "prisma"],
    semester: "Spring 2026",
    upVoteCount: 67,
    downVoteCount: 0,
    score: 67,
    downloadCount: 300,
    viewCount: 540,
    createdAt: new Date("2026-03-05T16:45:00Z"),

    uploadedBy: {
      id: "user_uuid_001",
      name: "Alice Smith",
      email: "alice@university.edu",
      university: "Tech State University",
      year: 3,
      faculty: "Computer Science",
      reputation: 120,
    },

    subject: {
      id: "subj_cuid_104",
      name: "Database Systems",
      code: "CS350",
      faculty: "Computer Science",
      year: 3,
    },

    votes: [],
    comments: [],
  },
  {
    id: "note_cuid_005",
    userId: "user_uuid_005",
    subjectId: "subj_cuid_105",
    title: "Calculus III Multivariable Integration Notes",
    fileUrl: "https://example.com/files/calc3-notes.pdf",
    fileType: "application/pdf",
    fileSize: 3400000,
    images: [
      "https://picsum.photos/seed/calc1/800/600",
      "https://picsum.photos/seed/calc2/800/600",
    ],
    tags: ["math", "calculus", "integration"],
    semester: "Fall 2025",
    upVoteCount: 34,
    downVoteCount: 3,
    score: 31,
    downloadCount: 120,
    viewCount: 280,
    createdAt: new Date("2026-03-12T11:10:00Z"),

    uploadedBy: {
      id: "user_uuid_005",
      name: "Ethan Hunt",
      email: "ethan@university.edu",
      university: "Tech State University",
      year: 2,
      faculty: "Mathematics",
      reputation: 60,
    },

    subject: {
      id: "subj_cuid_105",
      name: "Calculus III",
      code: "MATH201",
      faculty: "Mathematics",
      year: 2,
    },

    votes: [],
    comments: [],
  },
];
function NoteList() {
  return (
    <div className="max-w-200 px-4 mx-auto space-y-5 ">
      {notes?.map((note) => (
        <SingleNote note={note} />
      ))}
    </div>
  );
}

export default NoteList;
