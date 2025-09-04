// src/data/projects.ts
import { links } from "./links";

export const projects = [
  {
    title: "MultiLang Docstring Extractor",
    slug: "doc-extractor",
    description: "A parser-based tool to extracts inline documentation from codebases into JSON objects for LLM ingestion.",
    tech: ["Python", "LLM pipeline", "Tree-sitter", "Syntax Trees", "DFS", "Stacks", "Hashing"],
    github: `${links.github}/doc-extractor`,
    liveDemo: null,
  },
  {
    title: "MMORPG Automation Bot",
    slug: "aqw-bot",
    description: "A Go command-line bot that automates gameplay using OCR + window detection.",
    tech: ["Go", "Cobra", "Python", "Xdotool", "Linux", "CLI Automation", "EasyOCR", "Cross-language Scripting"],
    github: `${links.github}/aqw-bot`,
    liveDemo: null,
  },
  {
    title: "TicTacToe Minmax visualization",
    slug: "minimax-visualizer",
    description: "A Python app that visualizes the Minimax algorithm for TicTacToe.",
    tech: ["Python", "Tkinter", "Decision Trees", "Minmax Algorithm", "Recursion", "AI Player"],
    github: `${links.github}/doc-extractor`,
    liveDemo: null,
  },
  {
    title: "Paper Trail",
    slug: "paper-trail",
    description: "A lightweight document search tool that indexes and previews your files, allowing you to locate the right document without manually opening each file. ",
    tech: ["Python", "FAISS", "PyQt", "SQLite", "SentenceTransformers", "Semantic Search"],
    github: `${links.github}/paper-trail`,
    liveDemo: null,
  },
];
