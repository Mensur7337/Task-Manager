<img width="783" height="742" alt="image" src="https://github.com/user-attachments/assets/a745d4df-a890-405b-9873-489b73b0875a" />


# 📝 Vanilla JavaScript Todo App

A lightweight, production-quality Task Management application built with **Pure (Vanilla) JavaScript**. This project focuses on DOM manipulation, state management, and local storage without using any external libraries or frameworks.

## 🚀 Features

### Core Functionalities (MVP)
* **Quick Task Addition:** Add tasks with a title, category, and due date. Empty inputs are strictly validated.
* **Dynamic Sorting:** New tasks are automatically added to the top of the list for better visibility.
* **Persistent Storage:** All data is saved in `localStorage`, so your tasks remain even after a page refresh.
* **Smart Filtering:** Live search by title and filtering by status (All, Active, Completed).
* **Inline Editing:** Edit task names easily via double-click or the edit icon.
* **Visual Indicators:** * 🔴 **Overdue:** Red border for tasks past their due date.
    * 🟠 **Upcoming:** Orange border for tasks due today.
    * 🟢 **Completed:** Strikethrough and opacity change for finished tasks.

### Technical Highlights
* **Semantic HTML5:** Built with accessibility and SEO in mind.
* **Modern CSS3:** Responsive design with a clean UI using CSS variables.
* **Clean Code:** Modular function structure and meaningful naming conventions in English.
* **No Dependencies:** 100% Vanilla JS, HTML, and CSS.

## 🛠️ Technology Stack
* **HTML5**
* **CSS3** (Custom Properties, Flexbox)
* **JavaScript** (ES6+, LocalStorage API)
* **FontAwesome** (For iconography)

## 📁 Project Structure
```text
.
├── index.html      # Main structural file
├── style.css       # Custom styles and responsive design
├── index.js        # Logic, state management, and DOM manipulation
└── README.md       # Project documentation
