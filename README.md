# Inx Academy - Gamified Learning & Assessment Platform

An interactive, web-based single-page application built for developer training, proctored assessments, and algorithm visualization.

## 🌟 Key Features

- **Interactive Data Structure Visualizer**: Real-time interactive memory diagrams for Stacks, Queues, and Binary Trees.
- **Inx Code Arena & Playground**: Web sandbox supporting C, Data Structures, Python, and live rendering HTML5 canvas.
- **Proctored Exam Module**: Timed certification exams featuring automated grading and tab-switch monitoring.
- **1v1 Peer Duels & Contests**: Timed peer coding challenges with continuous XP progress and global leaderboard rankings.
- **Inx Faculty & Admin Dashboard**: Manage batch analytics, export student grade logs, and build custom question banks.
- **Inx AI Mentor Assistant**: Contextual tutor and code debugging assistant.

## 🚀 Getting Started

No build step or compiler setup is required. The platform runs directly in modern web browsers.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/K-IT-TECH/Assesment-Web.git
   cd Assesment-Web
   python -m http.server 8000
   ```

2. Open http://localhost:8000/ . The root `index.html` is the application entry point; the old `main index.html` link redirects there.

## Scope and verification

This is a frontend prototype: the login is simulated, exam scores are hard-coded, and AI mentor / CSV export controls are placeholders. Do not use it for real credentials or grading. CDN-loaded dependencies need an internet connection.

Run `node --test tests/*.test.cjs` for the root-entry and MCQ text-rendering regressions. This patch makes code examples such as `<stdio.h>`, `<img>` and `<script>` appear literally instead of being interpreted as HTML. It does not turn the prototype into a production assessment backend.
